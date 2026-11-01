import CinematicImage from '../../components/CinematicImage'
import { ImageReveal, Reveal, WordReveal } from '../../components/Reveal'

const beliefs = [
  { n: '01', t: 'Heart, depth and visual poetry', d: 'Every story deserves to be told with heart, depth and visual poetry.' },
  { n: '02', t: 'Narrative meets visual style', d: 'Strong narratives combined with impactful visual styles.' },
  { n: '03', t: 'Stories that connect', d: 'Stories that bridge cultures, spark conversations and evoke emotion.' },
]

export default function Philosophy() {
  return (
    <section className="section philosophy" aria-labelledby="philosophy-title">
      <div className="container philosophy-grid">
        <ImageReveal className="philosophy-image">
          <CinematicImage
            src="/images/g.jpeg"
            alt="A film crew setting up a camera on location"
            motif="documentary"
            palette={['#11161a', '#26323a', '#C6A36B']}
            variant={1}
          />
        </ImageReveal>

        <div className="philosophy-copy">
          <Reveal>
            <p className="eyebrow">Our Storytelling Philosophy</p>
          </Reveal>
          <WordReveal as="h2" text="Imagination, made cinematic." className="display" />
          <span id="philosophy-title" className="sr-only">
            Our storytelling philosophy
          </span>
          <Reveal delay={0.15}>
            <p className="lede">
              We are driven by a passion for storytelling and by the belief that imagination deserves to become cinematic reality — with creativity and technical precision working as one.
            </p>
          </Reveal>
          <ol className="beliefs">
            {beliefs.map((b, i) => (
              <li key={b.n}>
                <Reveal delay={0.1 * i} className="belief">
                  <span className="belief-n">{b.n}</span>
                  <div>
                    <h3>{b.t}</h3>
                    <p>{b.d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
