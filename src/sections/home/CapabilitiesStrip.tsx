import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, WordReveal } from '../../components/Reveal'
import CinematicImage from '../../components/CinematicImage'

const points = [
  'Dedicated in-house creative professionals',
  'Seasoned directors and veteran Directors of Photography',
  'Strategic creative partnerships',
  'Scalable capacity for multiple concurrent productions',
]

export default function CapabilitiesStrip() {
  return (
    <section className="capabilities-strip" aria-label="Production capabilities">
      <div className="capabilities-strip-bg" aria-hidden="true">
        <CinematicImage src="/images/n.jpeg" alt="" motif="film" palette={['#0f0f12', '#262228', '#C6A36B']} variant={2} />
      </div>
      <div className="capabilities-strip-shade" aria-hidden="true" />
      <div className="container capabilities-strip-inner">
        <div>
          <Reveal>
            <p className="eyebrow">Production Capabilities</p>
          </Reveal>
          <WordReveal as="h2" text="Built to execute at cinematic scale." className="display" />
        </div>
        <Reveal delay={0.15}>
          <ul className="capability-points">
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Link to="/capabilities" className="text-link text-link-lg">
            Explore our capabilities <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
