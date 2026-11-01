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
  /** Optional real photograph. Put the file in /public/images and set e.g. '/images/web-series.jpg' */
  image?: string
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
