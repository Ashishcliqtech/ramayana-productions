import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import CinematicImage from './CinematicImage'
import type { Project } from '../types'

export default function ProjectCard({ project, tall = false }: { project: Project; tall?: boolean }) {
  const reduce = useReducedMotion()
  return (
    <motion.article
      layout={!reduce}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5 }}
      className={`project-card ${tall ? 'is-tall' : ''}`}
    >
      <Link to={`/work/${project.slug}`} className="project-card-link" aria-label={`${project.title} — ${project.category}`}>
        <CinematicImage
          src={project.coverImage}
          alt={`${project.title} — ${project.category} cover`}
          motif={project.motif}
          palette={project.palette}
          className="project-card-image"
        />
        <div className="project-card-overlay">
          <div className="project-card-meta">
            <span className="chip">{project.category}</span>
            {project.isIllustrative && <span className="chip chip-outline">Illustrative concept</span>}
          </div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <span className="text-link">
            View project <ArrowUpRight size={16} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
