import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

/** Scroll-triggered fade + rise. */
export function Reveal({ children, delay = 0, y = 32, className }: RevealProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

interface WordRevealProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p'
  /** Animate immediately instead of on scroll */
  immediate?: boolean
}

/** Elegant typography animation: words rise into place one after another. */
export function WordReveal({ text, className, delay = 0, as = 'h2', immediate = false }: WordRevealProps) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  const Tag = as
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span className="word-mask" key={`${word}-${i}`} aria-hidden="true">
          <motion.span
            className="word"
            initial={reduce ? false : { y: '110%' }}
            {...(immediate ? { animate: { y: 0 } } : { whileInView: { y: 0 }, viewport: { once: true, margin: '-60px' } })}
            transition={{ duration: 0.9, delay: delay + i * 0.07, ease }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

/** Image reveal: a mask wipes away to uncover the picture. */
export function ImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)', scale: 1.06 }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)', scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.2, ease }}
    >
      {children}
    </motion.div>
  )
}
