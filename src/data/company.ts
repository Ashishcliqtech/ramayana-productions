import type { SocialLinks } from '../types'

interface Company {
  name: string
  wordmarkTop: string
  wordmarkBottom: string
  tagline: string
  positioning: string
  introduction: string
  heroSupporting: string
  siteUrl: string
  email: string
  phone: string
  address: string
  social: SocialLinks
  heroVideoUrl: string
  legal: {
    legalName: string
    registeredAddress: string
    governingLaw: string
    lastUpdated: string
    privacyContact: string
  }
}

/**
 * ============================================================
 *  EDIT THIS FILE to update official company information.
 *  Anything wrapped in [square brackets] is a PLACEHOLDER.
 * ============================================================
 */
export const company: Company = {
  name: 'Ramayana Productions',
  wordmarkTop: 'RAMAYANA',
  wordmarkBottom: 'PRODUCTIONS',
  tagline: 'Stories That Stay With You.',
  positioning: 'Premium Film, Media & Creative Production House',

  introduction:
    'At Ramayana Productions, we turn compelling narratives into high-end visual masterpieces. From short-form digital content to grand cinematic storytelling, our end-to-end production capabilities bring your vision to life with precision, creativity and unmatched quality.',

  heroSupporting:
    'We transform imagination into cinematic reality through powerful storytelling, creative excellence and world-class production.',

  /** PLACEHOLDER — replace with the official domain (also update public/sitemap.xml, public/robots.txt, index.html) */
  siteUrl: 'https://www.your-domain.com',

  /** PLACEHOLDER — replace with the official enquiry email address */
  email: 'hello@your-domain.com',
  /** Leave empty until an official number is supplied; the phone line is hidden when empty */
  phone: '',
  /** Leave empty until an official address is supplied; the location block is hidden when empty */
  address: '',

  /** Leave a URL empty to hide that link. Only add official accounts. */
  social: {
    instagram: '',
    youtube: '',
    facebook: '',
    linkedin: '',
    x: '',
  },

  /** Optional hero background video (mp4). Leave empty to use the generated cinematic backdrop. */
  heroVideoUrl: '',

  legal: {
    legalName: '[Registered legal name of the company]',
    registeredAddress: '[Registered business address]',
    governingLaw: '[Governing law and jurisdiction]',
    lastUpdated: '[Date of last update]',
    privacyContact: 'hello@your-domain.com',
  },
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/capabilities', label: 'Capabilities' },
  { to: '/founders-vision', label: "Founder's Vision" },
] as const
