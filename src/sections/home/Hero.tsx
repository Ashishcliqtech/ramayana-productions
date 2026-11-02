import { useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import CinematicImage from '../../components/CinematicImage'
import { Monogram } from '../../components/Logo'
import Button from '../../components/Button'
import { WordReveal } from '../../components/Reveal'
import { company } from '../../data/company'
import { retryImageUrl } from '../../utils/media'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const [logoRetried, setLogoRetried] = useState(false)
  const [logoFailed, setLogoFailed] = useState(false)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const heroVideo: string = company.heroVideoUrl

  return (
    <section className="hero" ref={ref} aria-label="Introduction">
      <motion.div className="hero-bg" style={reduce ? undefined : { y }}>
        <CinematicImage
          src="/images/i.jpeg"
          alt="A film crane silhouetted against the setting sun"
          motif="hero"
          palette={['#0B0B0B', '#241b0f', '#C6A36B']}
          eager
        />
        {heroVideo && !reduce && (
          <video
            className={`hero-video${videoReady ? ' is-ready' : ''}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/i.jpeg"
            aria-hidden="true"
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoReady(false)}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
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
          {logoFailed ? (
            <span className="hero-square-logo hero-square-logo-fallback" aria-hidden="true">
              <Monogram size={52} />
            </span>
          ) : (
            <img
              className="hero-square-logo"
              src={logoRetried ? retryImageUrl('/images/logo.jpeg') : '/images/logo.jpeg'}
              alt="Ramayana Productions"
              onError={() => {
                if (!logoRetried) setLogoRetried(true)
                else setLogoFailed(true)
              }}
            />
          )}
          <span className="hero-positioning">{company.positioning}</span>
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

    </section>
  )
}
