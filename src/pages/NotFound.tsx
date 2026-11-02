import { motion, useReducedMotion } from 'framer-motion'
import CinematicImage from '../components/CinematicImage'
import Button from '../components/Button'
import { useSEO } from '../hooks/useSEO'

export default function NotFound() {
  const reduce = useReducedMotion()
  useSEO({
    title: 'Page Not Found',
    description: 'The page you are looking for could not be found.',
    path: '/404',
    noIndex: true,
  })

  return (
    <section className="not-found">
      <div className="page-hero-bg">
        <CinematicImage src="/images/stock-40.webp" alt="" motif="film" palette={['#0B0B0B', '#1d1710', '#C6A36B']} eager />
      </div>
      <div className="page-hero-shade" />
      <div className="container not-found-content">
        <motion.p
          className="not-found-code"
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          aria-hidden="true"
        >
          404
        </motion.p>
        <p className="eyebrow eyebrow-center">That’s a wrap on this scene</p>
        <h1 className="display display-lg">This page isn’t part of the story.</h1>
        <p className="lede lede-center">The page you’re looking for may have moved, or never made the final cut.</p>
        <div className="cta-actions">
          <Button to="/">Back to Home</Button>
          <Button to="/services" variant="ghost">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}
