import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import CinematicImage from './CinematicImage'
import type { Service } from '../types'

export default function ServiceCard({ service, image }: { service: Service; image: string }) {
  return (
    <Link to={`/services/${service.slug}`} className="service-card">
      <CinematicImage
        src={image}
        alt={`${service.title} — cinematic visual`}
        motif={service.motif}
        palette={service.palette}
        className="service-card-image"
      />
      <div className="service-card-body">
        <span className="service-card-number">{service.number}</span>
        <h3>{service.title}</h3>
        <p>{service.tagline}</p>
        <span className="text-link">
          Explore service <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
