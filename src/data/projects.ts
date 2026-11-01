import type { Project, ProjectCategory } from '../types'

/**
 * ============================================================
 *  PORTFOLIO DATA — add real projects here.
 *
 *  Every entry below is an ILLUSTRATIVE CONCEPT (isIllustrative: true).
 *  They are placeholders so the layout can be reviewed and are NOT
 *  real Ramayana Productions work. To add a real project:
 *    1. Copy an entry, give it a unique slug
 *    2. Set isIllustrative: false
 *    3. Add coverImage / videoUrl / gallery (files in /public/images)
 *    4. Add the new /work/<slug> path to public/sitemap.xml
 *  Delete the illustrative entries when real work is available.
 * ============================================================
 */
export const projectCategories: ProjectCategory[] = [
  'Web Series',
  'Commercials',
  'Music Videos',
  'Micro Dramas',
  'Documentaries',
  'Feature Films',
  'Short Films',
]

export const projects: Project[] = [
  {
    slug: 'city-of-lights-series',
    title: 'City of Lights',
    category: 'Web Series',
    summary: 'An illustrative episodic drama concept set across one restless night in a city that never sleeps.',
    concept:
      'A concept sketch showing how a web series project page can present premise, tone and episodic structure. Replace this with the real creative concept of an actual series.',
    isIllustrative: true,
    motif: 'series',
    palette: ['#1b1712', '#3a2c18', '#C6A36B'],
  },
  {
    slug: 'golden-hour-campaign',
    title: 'Golden Hour',
    category: 'Commercials',
    summary: 'An illustrative brand-film concept built around warmth, craft and a single unforgettable image.',
    concept:
      'A concept sketch demonstrating how a commercial can be presented: the brand idea, the visual language and the emotion it is designed to create. Replace with a real commercial when available.',
    isIllustrative: true,
    motif: 'commercial',
    palette: ['#14161a', '#2a2e36', '#d8c08f'],
  },
  {
    slug: 'brand-in-motion',
    title: 'Brand in Motion',
    category: 'Commercials',
    summary: 'An illustrative promotional-film concept that turns a product story into movement and rhythm.',
    concept:
      'A concept sketch for a promotional film, showing how the portfolio presents strategy, story and visual treatment together.',
    isIllustrative: true,
    motif: 'studio',
    palette: ['#16120d', '#2c2418', '#C6A36B'],
  },
  {
    slug: 'echoes-of-midnight',
    title: 'Echoes of Midnight',
    category: 'Music Videos',
    summary: 'An illustrative music-video concept where light and rhythm carry the emotion of the song.',
    concept:
      'A concept sketch for a music video treatment: the mood of the track translated into colour, movement and cinematography. Replace with a real music video when available.',
    isIllustrative: true,
    motif: 'music',
    palette: ['#120f14', '#2d1f33', '#C6A36B'],
  },
  {
    slug: 'one-minute-heartbreak',
    title: 'One Minute Heartbreak',
    category: 'Micro Dramas',
    summary: 'An illustrative vertical micro-drama concept: one decision, one minute, one lasting feeling.',
    concept:
      'A concept sketch showing a vertical-first micro drama — a tight story built for mobile screens with a clear hook and emotional payoff.',
    isIllustrative: true,
    motif: 'micro',
    palette: ['#15110f', '#33241a', '#e0c28f'],
  },
  {
    slug: 'threads-of-heritage',
    title: 'Threads of Heritage',
    category: 'Documentaries',
    summary: 'An illustrative documentary concept exploring cultural heritage through the people who keep it alive.',
    concept:
      'A concept sketch for a cultural-heritage documentary, demonstrating how research, interviews and cinematic coverage come together on the page.',
    isIllustrative: true,
    motif: 'documentary',
    palette: ['#11161a', '#26323a', '#C6A36B'],
  },
  {
    slug: 'the-quiet-harbour',
    title: 'The Quiet Harbour',
    category: 'Documentaries',
    summary: 'An illustrative personal-story documentary concept told with restraint and cinematic depth.',
    concept:
      'A concept sketch for a personal-story documentary, showing how an intimate subject can be given cinematic scale.',
    isIllustrative: true,
    motif: 'documentary',
    palette: ['#0f1519', '#1f2c33', '#b99663'],
  },
  {
    slug: 'the-last-monsoon',
    title: 'The Last Monsoon',
    category: 'Feature Films',
    summary: 'An illustrative feature-film concept about memory, belonging and the seasons of a family.',
    concept:
      'A concept sketch for a feature film page: logline, tone and visual world. Replace with a real feature film when available.',
    isIllustrative: true,
    motif: 'film',
    palette: ['#0f0f12', '#262228', '#C6A36B'],
  },
  {
    slug: 'the-letter-unsent',
    title: 'The Letter Unsent',
    category: 'Short Films',
    summary: 'An illustrative short-film concept: a single letter and the courage it takes to send it.',
    concept:
      'A concept sketch for a short film, demonstrating how a compact story is presented with a clear emotional core.',
    isIllustrative: true,
    motif: 'film',
    palette: ['#13100f', '#2b2220', '#d1b07a'],
  },
]

export const getProject = (slug: string | undefined) => projects.find((p) => p.slug === slug)
