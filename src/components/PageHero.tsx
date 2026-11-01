import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import CinematicImage from './CinematicImage'
import { WordReveal } from './Reveal'
import type { Motif, Palette } from '../types'

interface Props {
  className?: string
  eyebrow: string
  title: string
  text?: ReactNode
  motif?: Motif
  palette?: Palette
  image?: string
  imageAlt?: string
  children?: ReactNode
}

/** Shared cinematic header for inner pages. */
export default function PageHero({
  className = '',
  eyebrow,
  title,
  text,
  motif = 'hero',
  palette = ['#0B0B0B', '#171717', '#C6A36B'],
  image,
  imageAlt = '',
  children,
}: Props) {
  const reduce = useReducedMotion()
  return (
    <section className={`page-hero ${className}`.trim()}>
      <div className="page-hero-bg">
        <CinematicImage src={image} alt={imageAlt} motif={motif} palette={palette} eager />
      </div>
      <div className="page-hero-shade" />
      <div className="container page-hero-content">
        <motion.p
          className="eyebrow"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {eyebrow}
        </motion.p>
        <WordReveal as="h1" text={title} className="display display-xl" delay={0.1} immediate />
        {text && (
          <motion.p
            className="lede"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            {text}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  )
}
