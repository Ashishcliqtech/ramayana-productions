import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading, { Divider } from '../components/SectionHeading'
import FounderPortrait from '../components/FounderPortrait'
import CinematicImage from '../components/CinematicImage'
import CTASection from '../components/CTASection'
import Button from '../components/Button'
import { ImageReveal, Reveal } from '../components/Reveal'
import { useSEO } from '../hooks/useSEO'
import { company } from '../data/company'
import { founder } from '../data/founder'
import { pillars } from '../data/pillars'

const approach = [
  { t: 'Story first', d: 'Every project begins with the story — its heart, its depth and the emotion it should leave behind.' },
  { t: 'Visual poetry', d: 'Strong narratives are paired with impactful visual styles, so a story is felt as much as it is seen.' },
  { t: 'Technical precision', d: 'Creativity is carried by disciplined craft — from direction and cinematography to editing and design.' },
  { t: 'End-to-end delivery', d: 'One dedicated team carries your vision from first idea to final delivery.' },
]

export default function About() {
  useSEO({
    title: 'About Us',
    description:
      'Learn about Ramayana Productions — a forward-thinking film production house driven by a passion for storytelling, with end-to-end production capabilities.',
    path: '/about',
  })

  return (
    <>
      <PageHero
        className="about-page-hero"
        eyebrow="About Us"
        title="A house built on storytelling."
        text="Ramayana Productions is a forward-thinking film production house driven by a passion for storytelling."
        motif="documentary"
        palette={['#11161a', '#26323a', '#C6A36B']}
        image="/images/d.jpeg"
        imageAlt="A camera operator working under blue production lights"
      />

      <section className="section">
        <div className="container two-col">
          <SectionHeading eyebrow="Who We Are" title="Compelling narratives, high-end visual masterpieces." />
          <Reveal delay={0.1}>
            <p className="lede lede-large">{company.introduction}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt about-philosophy">
        <div className="container split about-philosophy-grid">
          <ImageReveal className="split-media about-philosophy-media">
            <CinematicImage
              src="/images/m.jpeg"
              alt="A camera operator filming a scene on location"
              motif="studio"
              palette={['#16120d', '#2c2418', '#C6A36B']}
            />
            <span className="about-philosophy-caption">Storytelling, shaped frame by frame</span>
          </ImageReveal>
          <div className="split-copy about-philosophy-copy">
            <SectionHeading eyebrow="Our Philosophy" title="Every story deserves heart, depth and visual poetry." />
            <Reveal delay={0.1}>
              <p className="lede">
                We believe in transforming imagination into cinematic reality. Creativity combined with technical precision, excellence in storytelling, visual aesthetics and emotional impact — these are the principles that guide every frame we make.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-production-gallery" aria-label="Production photography">
        <div className="container">
          <SectionHeading
            eyebrow="Inside the Craft"
            title="Every frame begins behind the camera."
            text="A glimpse of the tools, locations and craft that shape cinematic storytelling."
          />
          <div className="about-production-grid">
            <figure className="about-production-image about-production-image-wide">
              <CinematicImage
                src="/images/a.jpeg"
                alt="A clapperboard marks the start of a film scene"
                motif="film"
                palette={['#0f0f12', '#262228', '#C6A36B']}
              />
              <figcaption>On-set direction</figcaption>
            </figure>
            <figure className="about-production-image">
              <CinematicImage
                src="/images/b.jpeg"
                alt="A camera operator filming a scene on location"
                motif="studio"
                palette={['#16120d', '#2c2418', '#C6A36B']}
              />
              <figcaption>Production in motion</figcaption>
            </figure>
            <figure className="about-production-image">
              <CinematicImage
                src="/images/e.jpeg"
                alt="A film projector casting light into a dark room"
                motif="film"
                palette={['#0f0f12', '#262228', '#C6A36B']}
              />
              <figcaption>The magic of the final frame</figcaption>
            </figure>
          </div>
          <p className="about-production-note">Photography is illustrative and does not depict completed Ramayana Productions projects.</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <SectionHeading eyebrow="Our Mission" title="To create stories that matter beyond the screen." />
          <Reveal delay={0.1}>
            <p className="lede lede-large">
              Our mission is to create stories that bridge cultures, spark conversations and evoke emotion — held to a lasting commitment to quality, innovation and authenticity.
            </p>
          </Reveal>
        </div>
      </section>

      <Divider />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Creative Approach" title="How we tell a story." />
          <ol className="approach-list">
            {approach.map((a, i) => (
              <li key={a.t}>
                <Reveal delay={i * 0.07} className="approach-item">
                  <span className="approach-n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{a.t}</h3>
                  <p>{a.d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Production Capabilities & In-House Strength"
            title="A dedicated team, a scalable studio."
            text="Dedicated in-house creative professionals, an experienced creative team and strategic partnerships allow us to execute and manage multiple high-quality productions concurrently."
          />
          <ul className="mini-list">
            {pillars.slice(0, 4).map((p) => (
              <li key={p.title}>{p.title}</li>
            ))}
          </ul>
          <Link to="/capabilities" className="text-link text-link-lg">
            See all production capabilities <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container founder-preview-grid">
          <div className="founder-preview-copy">
            <Reveal>
              <p className="eyebrow">Founder’s Introduction</p>
            </Reveal>
            <SectionHeading title={founder.heading} />
            <Reveal delay={0.1}>
              <blockquote className="pull-quote">
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                {founder.quote}
              </blockquote>
              <p className="lede">{founder.vision[0]}</p>
              <Button to="/founders-vision" variant="ghost">
                Read the full vision
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="founder-preview-portrait">
            <FounderPortrait />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
