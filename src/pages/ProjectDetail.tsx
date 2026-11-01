import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Info } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import CinematicImage from '../components/CinematicImage'
import VideoFrame from '../components/VideoFrame'
import ProjectCard from '../components/ProjectCard'
import CTASection from '../components/CTASection'
import { ImageReveal, Reveal } from '../components/Reveal'
import { useSEO } from '../hooks/useSEO'
import { getProject, projects } from '../data/projects'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  useSEO({
    title: project ? project.title : 'Project not found',
    description: project ? project.summary : 'The requested project could not be found.',
    path: project ? `/work/${project.slug}` : '/work',
    noIndex: !project,
  })

  if (!project) return <NotFound />

  const sameCategory = projects.filter((p) => p.slug !== project.slug && p.category === project.category)
  const rest = projects.filter((p) => p.slug !== project.slug && p.category !== project.category)
  const related = [...sameCategory, ...rest].slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        text={project.summary}
        motif={project.motif}
        palette={project.palette}
        image={project.coverImage}
        imageAlt={`${project.title} — cover image`}
      >
        <div className="hero-inline-actions">
          {project.isIllustrative && <span className="chip chip-outline">Illustrative concept</span>}
          <Link to="/work" className="text-link">
            <ArrowLeft size={16} aria-hidden="true" /> All projects
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          {project.isIllustrative && (
            <aside className="notice" role="note">
              <Info size={20} aria-hidden="true" />
              <p>
                This is an <strong>illustrative concept</strong> shown to demonstrate the project page layout. It is not a completed Ramayana Productions project, and no credits or production details are implied.
              </p>
            </aside>
          )}
          <div className="project-meta">
            <div>
              <small>Category</small>
              <strong>{project.category}</strong>
            </div>
            <div>
              <small>Status</small>
              <strong>{project.isIllustrative ? 'Illustrative concept' : 'Completed project'}</strong>
            </div>
          </div>
          <VideoFrame title={project.title} videoUrl={project.videoUrl} motif={project.motif} palette={project.palette} poster={project.coverImage} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <SectionHeading eyebrow="Creative Concept" title="The idea behind it." />
          <Reveal delay={0.1}>
            <p className="lede lede-large">{project.concept}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={project.isIllustrative ? 'Illustrative Frames' : 'Production Photographs'}
            title={project.isIllustrative ? 'The visual world.' : 'Behind the scenes.'}
          />
          <div className="frame-grid">
            {(project.gallery && project.gallery.length > 0 ? project.gallery : [undefined, undefined, undefined]).map((src, i) => (
              <ImageReveal key={i} className={`frame frame-${(i % 3) + 1}`}>
                <CinematicImage
                  src={src}
                  alt={`${project.title} — ${project.isIllustrative ? 'illustrative frame' : 'production photograph'} ${i + 1}`}
                  motif={project.motif}
                  palette={project.palette}
                  variant={i}
                />
              </ImageReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Related Projects" title="Continue exploring." />
          <div className="project-grid">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Inspired? Let’s make yours." />
    </>
  )
}
