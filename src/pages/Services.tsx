import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import CinematicImage from '../components/CinematicImage'
import CTASection from '../components/CTASection'
import Button from '../components/Button'
import { ImageReveal, Reveal, WordReveal } from '../components/Reveal'
import { useSEO } from '../hooks/useSEO'
import { services } from '../data/services'

export default function Services() {
  useSEO({
    title: 'Our Services',
    description:
      'Web series, ad commercials, music videos, micro dramas, documentaries, and feature & short films — end-to-end production from Ramayana Productions.',
    path: '/services',
  })

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="From short-form to grand cinema."
        text="End-to-end production capabilities that bring your vision to life with precision, creativity and unmatched quality."
        motif="series"
        palette={['#1b1712', '#3a2c18', '#C6A36B']}
        imageAlt="Layered cinematic frames"
      />

      <nav className="service-jump container" aria-label="Jump to a service">
        {services.map((s) => (
          <a key={s.slug} href={`#${s.slug}`}>
            <span>{s.number}</span> {s.shortTitle}
          </a>
        ))}
      </nav>

      {services.map((s) => (
        <section key={s.slug} id={s.slug} className={`service-feature layout-${s.layout}`} aria-labelledby={`${s.slug}-title`}>
          <div className="container service-feature-grid">
            <ImageReveal className="service-feature-media">
              <CinematicImage src={s.image} alt={`${s.title} — cinematic visual`} motif={s.motif} palette={s.palette} />
            </ImageReveal>
            <div className="service-feature-copy">
              <Reveal>
                <p className="service-feature-number">{s.number}</p>
              </Reveal>
              <WordReveal as="h2" text={s.title} className="display" />
              <span id={`${s.slug}-title`} className="sr-only">
                {s.title}
              </span>
              <Reveal delay={0.1}>
                <p className="service-feature-tagline">{s.tagline}</p>
                <p className="lede">{s.summary}</p>
                <div className="service-feature-actions">
                  <Button to={`/services/${s.slug}`}>Explore {s.shortTitle}</Button>
                  <Link to={`/contact?service=${s.slug}`} className="text-link">
                    Enquire about this service <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  )
}
