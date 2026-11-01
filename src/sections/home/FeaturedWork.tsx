import SectionHeading from '../../components/SectionHeading'
import ProjectCard from '../../components/ProjectCard'
import Button from '../../components/Button'
import { Reveal } from '../../components/Reveal'
import { projects } from '../../data/projects'

export default function FeaturedWork() {
  const featured = [projects[7], projects[0], projects[3], projects[5]].filter(Boolean)
  const hasIllustrative = featured.some((p) => p.isIllustrative)

  return (
    <section className="section featured-work" aria-label="Featured portfolio">
      <div className="container">
        <SectionHeading
          eyebrow="Featured Portfolio"
          title="A glimpse of the work."
          text={
            hasIllustrative
              ? 'The projects below are illustrative concepts that show how our portfolio will be presented. They are not completed company work.'
              : 'A selection of recent work from across our services.'
          }
        />
        <div className="featured-grid">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className={`featured-item featured-item-${i + 1}`}>
              <ProjectCard project={p} tall={i === 0 || i === 3} />
            </Reveal>
          ))}
        </div>
        <div className="section-action">
          <Button to="/work">View Full Portfolio</Button>
        </div>
      </div>
    </section>
  )
}
