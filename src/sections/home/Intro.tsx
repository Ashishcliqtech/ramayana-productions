import { Reveal, WordReveal } from '../../components/Reveal'
import { company } from '../../data/company'

export default function Intro() {
  return (
    <section className="section intro" id="intro" aria-labelledby="intro-title">
      <div className="container intro-grid">
        <div>
          <Reveal>
            <p className="eyebrow">The House</p>
          </Reveal>
          <WordReveal as="h2" text="High-end visual masterpieces, from compelling narratives." className="display" />
          <span id="intro-title" className="sr-only">
            About Ramayana Productions
          </span>
        </div>
        <Reveal delay={0.2} className="intro-copy">
          <p className="lede lede-large">{company.introduction}</p>
          <div className="intro-pillars">
            <span>Short-form digital</span>
            <i aria-hidden="true" />
            <span>Grand cinematic</span>
            <i aria-hidden="true" />
            <span>End-to-end</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
