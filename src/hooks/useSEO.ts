import { useEffect } from 'react'
import { company } from '../data/company'

interface SEOOptions {
  title: string
  description: string
  /** Route path, e.g. "/about" */
  path: string
  noIndex?: boolean
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Sets a unique <title>, meta description, canonical and Open Graph tags per page. */
export function useSEO({ title, description, path, noIndex = false }: SEOOptions) {
  useEffect(() => {
    const fullTitle = path === '/' ? title : `${title} | ${company.name}`
    const url = `${company.siteUrl}${path === '/' ? '/' : path}`

    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', `${company.siteUrl}/og-image.svg`)
    upsertMeta('property', 'og:image:alt', `${company.name} — Stories That Stay With You`)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', `${company.siteUrl}/og-image.svg`)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, path, noIndex])
}
