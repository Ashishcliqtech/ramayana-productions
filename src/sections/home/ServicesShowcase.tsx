import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import CinematicImage from '../../components/CinematicImage'
import SectionHeading from '../../components/SectionHeading'
import Button from '../../components/Button'
import { services } from '../../data/services'

export default function ServicesShowcase() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section className="section services-showcase" aria-label="Our services">
      <div className="container">
        <SectionHeading
          eyebrow="Our Services"
          title="Six ways we bring stories to life."
          text="From short-form digital content to grand cinematic storytelling, our end-to-end production capabilities bring your vision to life with precision, creativity and unmatched quality."
        />

        <div className="showcase-grid">
          <ul className="showcase-list">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className={`showcase-row ${i === active ? 'is-active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="showcase-number">{s.number}</span>
                  <span className="showcase-text">
                    <strong>{s.title}</strong>
                    <small>{s.tagline}</small>
                  </span>
                  <ArrowUpRight className="showcase-arrow" size={22} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="showcase-preview" aria-hidden="true">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="showcase-preview-inner"
              >
                <CinematicImage src={current.showcaseImage} alt="" motif={current.motif} palette={current.palette} />
                <p>{current.summary}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="section-action">
          <Button to="/services">View All Services</Button>
        </div>
      </div>
    </section>
  )
}
