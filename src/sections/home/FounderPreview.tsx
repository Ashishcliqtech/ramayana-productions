import FounderPortrait from '../../components/FounderPortrait'
import Button from '../../components/Button'
import { Reveal, WordReveal } from '../../components/Reveal'
import { founder } from '../../data/founder'

export default function FounderPreview() {
  return (
    <section className="section founder-preview" aria-labelledby="fp-title">
      <div className="container founder-preview-grid">
        <div className="founder-preview-copy">
          <Reveal>
            <p className="eyebrow">Founder’s Vision</p>
          </Reveal>
          <WordReveal as="h2" text={founder.heading} className="display" />
          <span id="fp-title" className="sr-only">
            {founder.heading}
          </span>
          <Reveal delay={0.1}>
            <blockquote className="pull-quote">
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              {founder.quote}
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="lede">{founder.preview}</p>
            <Button to="/founders-vision" variant="ghost">
              Read the Founder’s Vision
            </Button>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="founder-preview-portrait">
          <FounderPortrait />
        </Reveal>
      </div>
    </section>
  )
}
