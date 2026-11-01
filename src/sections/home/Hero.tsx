import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import CinematicImage from '../../components/CinematicImage'
import Button from '../../components/Button'
import { WordReveal } from '../../components/Reveal'
import { company } from '../../data/company'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const heroVideo: string = company.heroVideoUrl

  const scrollNext = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section className="hero" ref={ref} aria-label="Introduction">
      <motion.div className="hero-bg" style={reduce ? undefined : { y }}>
        {heroVideo && !reduce ? (
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/e.jpeg"
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <CinematicImage
            src="/images/e.jpeg"
            alt="A film crane silhouetted against the setting sun"
            motif="hero"
            palette={['#0B0B0B', '#241b0f', '#C6A36B']}
            eager
          />
        )}
      </motion.div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="letterbox letterbox-bottom" aria-hidden="true" />

      <motion.div className="container hero-content" style={reduce ? undefined : { opacity: fade }}>
        <motion.div
          className="hero-mark"
          initial={reduce ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img className="hero-square-logo" src="/images/logo.jpeg" alt="Ramayana Productions" />
          <span>{company.positioning}</span>
        </motion.div>

        <WordReveal as="h1" text="Stories That Stay With You." className="hero-title" delay={0.25} immediate />

        <motion.p
          className="hero-text"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {company.heroSupporting}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Button to="/services">Explore Our Services</Button>
          <Button to="/contact" variant="ghost">
            Start a Project
          </Button>
        </motion.div>
      </motion.div>

      <button type="button" className="scroll-indicator" onClick={scrollNext} aria-label="Scroll to introduction">
        <span>Scroll</span>
        <ChevronDown size={18} aria-hidden="true" />
        <i aria-hidden="true" />
      </button>
    </section>
  )
}
