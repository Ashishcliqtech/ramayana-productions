import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Info } from 'lucide-react'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import CTASection from '../components/CTASection'
import { useSEO } from '../hooks/useSEO'
import { projectCategories, projects } from '../data/projects'
import type { ProjectCategory } from '../types'

type Filter = 'All' | ProjectCategory

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('All')

  useSEO({
    title: 'Our Work',
    description:
      'Explore the Ramayana Productions portfolio — web series, commercials, music videos, micro dramas, documentaries, feature films and short films.',
    path: '/work',
  })

  const visible = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)), [filter])
  const hasIllustrative = projects.some((p) => p.isIllustrative)
  const filters: Filter[] = ['All', ...projectCategories]

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Stories on screen."
        text="An immersive look at the formats we create — from vertical micro dramas to cinematic features."
        motif="film"
        palette={['#0f0f12', '#262228', '#C6A36B']}
        imageAlt="Film strip and anamorphic light"
      />

      <section className="section portfolio">
        <div className="container">
          {hasIllustrative && (
            <aside className="notice" role="note">
              <Info size={20} aria-hidden="true" />
              <p>
                <strong>Illustrative concepts.</strong> Projects marked “Illustrative concept” are placeholders that show how work will be presented. They are not completed Ramayana Productions projects.
              </p>
            </aside>
          )}

          <div className="filters" role="group" aria-label="Filter projects by category">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`filter ${filter === f ? 'is-active' : ''}`}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <p className="filter-count" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
            {filter !== 'All' ? ` in ${filter}` : ''}
          </p>

          <motion.div layout className="project-grid">
            <AnimatePresence>
              {visible.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </AnimatePresence>
          </motion.div>

          {visible.length === 0 && <p className="empty-state">No projects in this category yet. Please check back soon.</p>}
        </div>
      </section>

      <CTASection title="Have a story in mind?" />
    </>
  )
}
