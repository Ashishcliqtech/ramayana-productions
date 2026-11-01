import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CinematicImage from '../components/CinematicImage'
import ProjectCard from '../components/ProjectCard'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import Button from '../components/Button'
import { ImageReveal, Reveal } from '../components/Reveal'
import { useSEO } from '../hooks/useSEO'
import { getService, services } from '../data/services'
import { projects } from '../data/projects'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  useSEO({
    title: service ? service.title : 'Service not found',
    description: service ? `${service.tagline} ${service.summary}` : 'The requested service could not be found.',
    path: service ? `/services/${service.slug}` : '/services',
    noIndex: !service,
  })

  if (!service) return <NotFound />

  const index = services.findIndex((s) => s.slug === service.slug)
  const prev = services[(index - 1 + services.length) % services.length]
  const next = services[(index + 1) % services.length]
  const related = projects.filter((p) => service.relatedCategories.includes(p.category)).slice(0, 3)
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.number}`}
        title={service.title}
        text={service.tagline}
        motif={service.motif}
        palette={service.palette}
        image={service.image}
        imageAlt={`${service.title} — cinematic hero visual`}
      >
        <div className="hero-inline-actions">
          <Button to={`/contact?service=${service.slug}`}>Enquire About {service.shortTitle}</Button>
          <Link to="/services" className="text-link">
            <ArrowLeft size={16} aria-hidden="true" /> All services
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container two-col">
          <SectionHeading eyebrow="Introduction" title={service.tagline} />
          <Reveal delay={0.1}>
            <p className="lede lede-large">{service.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Creative Approach" title="How we approach it." />
          <ol className="approach-list approach-list-3">
            {service.approach.map((a, i) => (
              <li key={a}>
                <Reveal delay={i * 0.08} className="approach-item">
                  <span className="approach-n">{String(i + 1).padStart(2, '0')}</span>
                  <p>{a}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <SectionHeading eyebrow="Production Capabilities" title="What we bring to the work." />
          <ul className="capability-list">
            {service.capabilities.map((c, i) => (
              <li key={c}>
                <Reveal delay={i * 0.05} className="capability-item">
                  <span aria-hidden="true" />
                  {c}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Visual Examples" title="The look and feel." text="Illustrative frames showing the visual language of this service." />
          <div className="frame-grid">
            {[0, 1, 2].map((v) => (
              <ImageReveal key={v} className={`frame frame-${v + 1}`}>
                <CinematicImage
                  alt={`${service.title} — illustrative frame ${v + 1}`}
                  motif={service.motif}
                  palette={service.palette}
                  variant={v}
                />
              </ImageReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Workflow" title="From idea to delivery." />
          <ol className="workflow">
            {service.workflow.map((w, i) => (
              <li key={w.title}>
                <Reveal delay={i * 0.07} className="workflow-step">
                  <span className="workflow-n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <SectionHeading eyebrow="Related Work" title={`${service.title} in our portfolio.`} />
            <div className="project-grid">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="More Services" title="Explore further." />
          <div className="service-card-grid">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
          <nav className="prev-next" aria-label="Service navigation">
            <Link to={`/services/${prev.slug}`}>
              <ArrowLeft size={18} aria-hidden="true" />
              <span>
                <small>Previous</small>
                {prev.title}
              </span>
            </Link>
            <Link to={`/services/${next.slug}`} className="is-next">
              <span>
                <small>Next</small>
                {next.title}
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </section>

      <CTASection
        title={`Start your ${service.title.toLowerCase()} project.`}
        primaryLabel="Send a Project Enquiry"
        primaryTo={`/contact?service=${service.slug}`}
      />
    </>
  )
}
