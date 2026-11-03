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
  motif: Motif
  palette: Palette
  layout: ServiceLayout
  /** Distinct photography for the service listing, homepage preview and detail-page hero. */
  image: string
  showcaseImage: string
  detailImage: string
  detailVideo: string
  detailVideoPoster?: string
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
