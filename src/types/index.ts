export type Motif = 'hero' | 'series' | 'commercial' | 'music' | 'micro' | 'documentary' | 'film' | 'studio'

export type Palette = readonly [string, string, string]

export type ServiceLayout = 'split-left' | 'split-right' | 'full-bleed' | 'stacked' | 'offset' | 'wide'

export interface WorkflowStep {
  title: string
  text: string
}

export interface Service {
  slug: string
  number: string
  title: string
  shortTitle: string
  tagline: string
  summary: string
  intro: string
  approach: string[]
  capabilities: string[]
  workflow: WorkflowStep[]
  /** Project categories shown as related work on the service page */
  relatedCategories: ProjectCategory[]
  motif: Motif
  palette: Palette
  layout: ServiceLayout
  /** Optional real photograph. Put the file in /public/images and set e.g. '/images/web-series.jpg' */
  image?: string
}

export type ProjectCategory =
  | 'Web Series'
  | 'Commercials'
  | 'Music Videos'
  | 'Micro Dramas'
  | 'Documentaries'
  | 'Feature Films'
  | 'Short Films'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  summary: string
  concept: string
  /** true = illustrative placeholder concept, NOT real company work. Set to false for real projects. */
  isIllustrative: boolean
  motif: Motif
  palette: Palette
  /** Optional real cover image (e.g. '/images/projects/my-film.jpg') */
  coverImage?: string
  /** Optional video: YouTube/Vimeo embed URL, or a direct .mp4 URL */
  videoUrl?: string
  /** Optional real production photographs */
  gallery?: string[]
}

export interface Pillar {
  title: string
  text: string
  icon: 'users' | 'film' | 'handshake' | 'camera' | 'layers' | 'repeat' | 'route' | 'aperture'
}

export interface SocialLinks {
  instagram: string
  youtube: string
  facebook: string
  linkedin: string
  x: string
}
