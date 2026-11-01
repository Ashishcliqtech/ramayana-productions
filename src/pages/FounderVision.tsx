import PageHero from '../components/PageHero'
import SectionHeading, { Divider } from '../components/SectionHeading'
import FounderPortrait from '../components/FounderPortrait'
import CTASection from '../components/CTASection'
import { Reveal } from '../components/Reveal'
import { useSEO } from '../hooks/useSEO'
import { founder } from '../data/founder'

export default function FounderVision() {
  useSEO({
    title: "Founder's Vision",
    description:
      "Founder's Vision: Redefining the Art of Storytelling. Discover the philosophy behind Ramayana Productions — heart, depth and visual poetry in every story.",
    path: '/founders-vision',
  })

  return (
    <>
      <PageHero
        eyebrow="Founder’s Vision"
        title="Redefining the Art of Storytelling"
        motif="studio"
        palette={['#16120d', '#2c2418', '#C6A36B']}
        imageAlt="Warm cinematic light in a dark studio"
      />

      <section className="section vision-opening">
        <div className="container vision-grid">
          <Reveal className="vision-portrait">
            <FounderPortrait />
          </Reveal>
          <div className="vision-copy">
            <SectionHeading eyebrow="In the Founder’s Words" title={founder.heading} />
            <Reveal delay={0.1}>
              <blockquote className="pull-quote pull-quote-xl">
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                {founder.quote}
              </blockquote>
            </Reveal>
            {founder.vision.map((p, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <p className={`vision-paragraph ${i === 0 ? 'drop-cap' : ''}`}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Founder Philosophy" title="What we hold to be true." />
          <ul className="philosophy-columns">
            {founder.philosophy.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 0.1} className="philosophy-column">
                  <span className="approach-n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <SectionHeading eyebrow="Creative Leadership" title="Protecting the story at every stage." />
          <Reveal delay={0.1}>
            <p className="lede lede-large">{founder.leadership}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <SectionHeading eyebrow="Commitment to Storytelling" title="Quality. Innovation. Authenticity." />
          <Reveal delay={0.1}>
            <p className="lede lede-large">{founder.commitment}</p>
            <ul className="value-tags">
              {founder.values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <SectionHeading eyebrow="The Future of Filmmaking" title="Imagination, united with precision." />
          <Reveal delay={0.1}>
            <p className="lede lede-large">{founder.future}</p>
          </Reveal>
        </div>
      </section>

      <CTASection title="Let’s create something that lives beyond the screen." />
    </>
  )
}
