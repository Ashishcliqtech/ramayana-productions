import Button from './Button'
import { Reveal, WordReveal } from './Reveal'

interface Props {
  title?: string
  text?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export default function CTASection({
  title = "Let's tell your story.",
  text = 'Share your idea with us. From short-form digital content to grand cinematic storytelling, we will help bring your vision to life.',
  primaryLabel = 'Start a Project',
  primaryTo = '/contact',
  secondaryLabel = 'Explore Our Services',
  secondaryTo = '/services',
}: Props) {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="cta-glow" aria-hidden="true" />
      <div className="container cta-inner">
        <Reveal>
          <p className="eyebrow eyebrow-center">Begin the Journey</p>
        </Reveal>
        <WordReveal as="h2" text={title} className="display display-lg" />
        <span id="cta-title" className="sr-only">
          {title}
        </span>
        <Reveal delay={0.15}>
          <p className="lede lede-center">{text}</p>
        </Reveal>
        <Reveal delay={0.25} className="cta-actions">
          <Button to={primaryTo}>{primaryLabel}</Button>
          <Button to={secondaryTo} variant="ghost">
            {secondaryLabel}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
