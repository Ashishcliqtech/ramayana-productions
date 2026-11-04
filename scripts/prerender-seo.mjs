import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { Writable } from 'node:stream'
import { createServer } from 'vite'

process.env.NODE_ENV = 'production'

const [{ createElement }, { renderToPipeableStream }, { MemoryRouter }, { MotionConfig }] = await Promise.all([
  import('react'),
  import('react-dom/server'),
  import('react-router-dom'),
  import('framer-motion'),
])

const escapeHtml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

const escapeXml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;')

function renderRoute(App, route) {
  return new Promise((resolve, reject) => {
    let markup = ''
    let renderError
    let timeout

    const stream = renderToPipeableStream(
      createElement(
        MemoryRouter,
        { initialEntries: [route.path] },
        createElement(
          MotionConfig,
          { reducedMotion: 'user' },
          createElement(App),
        ),
      ),
      {
        onAllReady() {
          const output = new Writable({
            write(chunk, _encoding, callback) {
              markup += chunk.toString()
              callback()
            },
          })
          output.on('error', reject)
          output.on('finish', () => {
            clearTimeout(timeout)
            if (renderError) reject(renderError)
            else resolve(markup)
          })
          stream.pipe(output)
        },
        onShellError(error) {
          clearTimeout(timeout)
          reject(error)
        },
        onError(error) {
          renderError ??= error
        },
      },
    )

    timeout = setTimeout(() => {
      stream.abort()
      reject(new Error(`Timed out while rendering ${route.path}`))
    }, 30_000)
  })
}

const vite = await createServer({
  configFile: './vite.config.ts',
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const [{ default: App }, { company }, { services }, { pageSEO }] = await Promise.all([
    vite.ssrLoadModule('/src/App.tsx'),
    vite.ssrLoadModule('/src/data/company.ts'),
    vite.ssrLoadModule('/src/data/services.ts'),
    vite.ssrLoadModule('/src/data/seo.ts'),
  ])
  const mainPages = Object.values(pageSEO).filter((page) => !page.noIndex)
  const servicePages = services.map((service) => ({
    path: `/services/${service.slug}`,
    title: service.title,
    description: `${service.tagline} ${service.summary}`,
    service,
  }))
  const routes = [...mainPages, ...servicePages]
  const outputDirectory = path.resolve('dist')
  const template = await readFile(path.join(outputDirectory, 'index.html'), 'utf8')
  const organization = {
    '@type': 'Organization',
    '@id': `${company.siteUrl}/#organization`,
    name: company.name,
    url: `${company.siteUrl}/`,
    logo: `${company.siteUrl}/images/logo.jpeg`,
    description: company.positioning,
    email: company.email,
    telephone: '+91 7506846678',
    knowsAbout: services.map((service) => service.title),
  }

  for (const route of routes) {
    const url = `${company.siteUrl}${route.path === '/' ? '/' : route.path}`
    const fullTitle =
      route.path === '/' ? route.title : `${route.title} | ${company.name}`
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        organization,
        {
          '@type': 'WebSite',
          '@id': `${company.siteUrl}/#website`,
          url: `${company.siteUrl}/`,
          name: company.name,
          publisher: { '@id': `${company.siteUrl}/#organization` },
          inLanguage: 'en',
        },
        ...(route.service
          ? [
              {
                '@type': 'Service',
                name: route.service.title,
                description: route.description,
                url,
                provider: { '@id': `${company.siteUrl}/#organization` },
              },
            ]
          : []),
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${company.siteUrl}/`,
            },
            ...(route.path === '/'
              ? []
              : [
                  {
                    '@type': 'ListItem',
                    position: 2,
                    name: route.service ? 'Services' : route.title,
                    item: route.service ? `${company.siteUrl}/services` : url,
                  },
                  ...(route.service
                    ? [
                        {
                          '@type': 'ListItem',
                          position: 3,
                          name: route.title,
                          item: url,
                        },
                      ]
                    : []),
                ]),
          ],
        },
      ],
    }

    const seoHead = [
      `<title>${escapeHtml(fullTitle)}</title>`,
      `<meta name="description" content="${escapeHtml(route.description)}" />`,
      '<meta name="robots" content="index, follow" />',
      `<link rel="canonical" href="${escapeHtml(url)}" />`,
      '<meta property="og:type" content="website" />',
      `<meta property="og:site_name" content="${escapeHtml(company.name)}" />`,
      `<meta property="og:title" content="${escapeHtml(fullTitle)}" />`,
      `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
      `<meta property="og:url" content="${escapeHtml(url)}" />`,
      `<meta property="og:image" content="${escapeHtml(company.siteUrl)}/og-image.svg" />`,
      `<meta property="og:image:alt" content="${escapeHtml(company.name)} — ${escapeHtml(company.tagline)}" />`,
      '<meta name="twitter:card" content="summary_large_image" />',
      `<meta name="twitter:title" content="${escapeHtml(fullTitle)}" />`,
      `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
      `<meta name="twitter:image" content="${escapeHtml(company.siteUrl)}/og-image.svg" />`,
      `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`,
    ].join('\n    ')

    const html = template
      .replace(/<title>[\s\S]*?<\/title>/i, '')
      .replace(/<meta\s+(?:name|property)="(?:description|robots|og:[^"]+|twitter:[^"]+)"[^>]*\/?>/gi, '')
      .replace(/<link\s+rel="canonical"[^>]*\/?>/gi, '')
      .replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, '')
      .replace('</head>', `    ${seoHead}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${await renderRoute(App, route)}</div>`)

    const relativeDirectory = route.path === '/' ? '' : route.path.slice(1)
    const pageDirectory = path.join(outputDirectory, relativeDirectory)
    await mkdir(pageDirectory, { recursive: true })
    await writeFile(path.join(pageDirectory, 'index.html'), html)
  }

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((route) => `  <url><loc>${escapeXml(`${company.siteUrl}${route.path === '/' ? '/' : route.path}`)}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n')
  await writeFile(path.join(outputDirectory, 'sitemap.xml'), sitemap)
  console.log(`Pre-rendered ${routes.length} SEO-ready routes and generated sitemap.xml`)
} finally {
  await vite.close()
}
