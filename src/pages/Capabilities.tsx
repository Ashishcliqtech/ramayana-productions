import { Aperture, Camera, Film, Handshake, Layers, Repeat, Route, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CinematicImage from '../components/CinematicImage'
import CTASection from '../components/CTASection'
import { ImageReveal, Reveal } from '../components/Reveal'
import { useSEO } from '../hooks/useSEO'
import { pageSEO } from '../data/seo'
import { pillars } from '../data/pillars'
import type { Pillar } from '../types'

const icons: Record<Pillar['icon'], LucideIcon> = {
  users: Users,
  film: Film,
  handshake: Handshake,
  camera: Camera,
  layers: Layers,
  repeat: Repeat,
  route: Route,
  aperture: Aperture,
}

const stages = ['Concept', 'Script', 'Pre-production', 'Production', 'Post-production', 'Delivery']

export default function Capabilities() {
  useSEO(pageSEO.capabilities)

  return (
    <>
      <PageHero
        eyebrow="Production Capabilities"
        title="Built to execute at cinematic scale."
        text="Dedicated creative professionals, experienced leadership and scalable capacity — carrying your vision from idea to final delivery."
        motif="commercial"
        palette={['#14161a', '#2a2e36', '#d8c08f']}
        image="/images/f.jpeg"
        imageAlt="A video editor working on a production timeline"
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Operational & Creative Strengths" title="What stands behind every production." />
          <ul className="pillar-grid">
            {pillars.map((p, i) => {
              const Icon = icons[p.icon]
              return (
                <li key={p.title}>
                  <Reveal delay={(i % 4) * 0.07} className="pillar">
                    <span className="pillar-icon">
                      <Icon size={26} aria-hidden="true" />
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div className="split-copy">
            <SectionHeading
              eyebrow="End-to-End Production"
              title="One team, from first idea to final frame."
              text="From short-form digital content to grand cinematic storytelling, our production capabilities cover every stage of the journey."
            />
            <ol className="stage-list">
              {stages.map((s, i) => (
                <li key={s}>
                  <Reveal delay={i * 0.06} className="stage">
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {s}
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
          <ImageReveal className="split-media">
            <CinematicImage src="/images/g.jpeg" alt="A documentary film crew working on location" motif="film" palette={['#0f0f12', '#262228', '#C6A36B']} variant={1} />
          </ImageReveal>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <SectionHeading eyebrow="Scale & Reliability" title="Multiple productions. One standard." />
          <Reveal delay={0.1}>
            <p className="lede lede-large">
              Scalable production capacity and strategic partnerships mean we can execute and manage multiple high-quality productions concurrently — without compromising the creative standard of any one of them.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection title="Ready to put our capabilities to work?" />
    </>
  )
}
