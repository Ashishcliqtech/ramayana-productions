import type { Service, WorkflowStep } from '../types'

const standardWorkflow = (stages: [string, string][]): WorkflowStep[] =>
  stages.map(([title, text]) => ({ title, text }))

export const services: Service[] = [
  {
    slug: 'web-series',
    number: '01',
    title: 'Web Series',
    shortTitle: 'Web Series',
    tagline: 'Immersive episodic storytelling crafted for the digital age.',
    summary:
      'We conceptualise, shoot and deliver engaging web series across diverse genres.',
    intro:
      'A web series lives or dies on its ability to bring audiences back. At Ramayana Productions we conceptualise, shoot and deliver engaging web series across diverse genres — building worlds, characters and story arcs designed for the way audiences watch today.',
    approach: [
      'Story-first development: a strong premise, memorable characters and an arc that rewards every episode.',
      'Genre-aware visual language, so a thriller looks and feels different from a romance or a comedy.',
      'Consistent production quality from the first episode to the last.',
    ],
    capabilities: [
      'Concept development and series planning',
      'Scripting and episode structuring',
      'Casting, direction and on-set production',
      'Cinematography and production design',
      'Editing, colour and sound for episodic delivery',
      'Delivery formatted for digital platforms',
    ],
    workflow: standardWorkflow([
      ['Concept', 'We shape the premise, tone, characters and the arc of the series.'],
      ['Development', 'Scripts and episode structure are written and refined.'],
      ['Production', 'Our directors and cinematographers bring the series to life on set.'],
      ['Post-production', 'Editing, colour and sound give every episode a consistent finish.'],
      ['Delivery', 'Final episodes are prepared for your chosen digital platforms.'],
    ]),
    motif: 'series',
    palette: ['#1b1712', '#3a2c18', '#C6A36B'],
    image: '/images/m.jpeg',
    layout: 'split-left',
  },
  {
    slug: 'ad-commercials',
    number: '02',
    title: 'Ad Commercials',
    shortTitle: 'Ad Commercials',
    tagline: 'Strategic brand storytelling that drives engagement and converts.',
    summary:
      'TV commercials, digital advertising and promotional films with powerful brand storytelling.',
    intro:
      'Great advertising is great storytelling with a purpose. We produce TV commercials, digital advertising and promotional films that carry a brand’s message with clarity, craft and emotional pull.',
    approach: [
      'Begin with the brand’s message, then find the story that makes it memorable.',
      'Cinematic craft applied to every format — from television spots to digital-first promotional films.',
      'Visuals and narrative designed to earn attention and encourage action.',
    ],
    capabilities: [
      'TV commercials',
      'Digital advertising films',
      'Promotional and brand films',
      'Concept, script and storyboard development',
      'Commercial cinematography and production design',
      'Editing, grading and multi-format delivery',
    ],
    workflow: standardWorkflow([
      ['Brief', 'We understand your brand, audience and the message that matters most.'],
      ['Concept', 'A creative idea and storyboard that turns the message into a story.'],
      ['Production', 'A focused shoot with the right direction, camera and design.'],
      ['Finishing', 'Edit, colour and sound refined to a polished commercial finish.'],
      ['Delivery', 'Versions prepared for television and digital placements.'],
    ]),
    motif: 'commercial',
    palette: ['#14161a', '#2a2e36', '#d8c08f'],
    image: '/images/e.jpeg',
    layout: 'full-bleed',
  },
  {
    slug: 'music-videos',
    number: '03',
    title: 'Music Videos',
    shortTitle: 'Music Videos',
    tagline: 'Visual symphonies that amplify the soul of the music.',
    summary:
      'Artistic cinematography, vibrant production design and visually engaging music videos.',
    intro:
      'A music video should deepen the song, not decorate it. We bring artistic cinematography, vibrant production design and visually engaging storytelling together to amplify the soul of the music.',
    approach: [
      'Listen first — the rhythm, mood and emotion of the track guide every visual decision.',
      'Artistic cinematography and bold production design that give the song a world of its own.',
      'Editing that moves with the music and holds attention from the first beat.',
    ],
    capabilities: [
      'Treatment and visual concept development',
      'Artistic cinematography',
      'Vibrant production design',
      'Choreography-friendly direction and coverage',
      'Music-driven editing and grading',
      'Delivery for digital and broadcast platforms',
    ],
    workflow: standardWorkflow([
      ['Listen', 'We immerse ourselves in the track and the artist’s intent.'],
      ['Treatment', 'A visual concept and look that express the music.'],
      ['Production', 'Cinematography and production design bring the treatment to life.'],
      ['Edit', 'Cuts shaped around rhythm, emotion and movement.'],
      ['Delivery', 'The finished video is prepared for release.'],
    ]),
    motif: 'music',
    palette: ['#120f14', '#2d1f33', '#C6A36B'],
    image: '/images/d.jpeg',
    layout: 'split-right',
  },
  {
    slug: 'micro-dramas',
    number: '04',
    title: 'Micro Dramas',
    shortTitle: 'Micro Dramas',
    tagline: 'Bite-sized, high-retention vertical entertainment for modern audiences.',
    summary:
      'Short-format storytelling, vertical filmmaking and digital-first entertainment.',
    intro:
      'Micro dramas bring the power of storytelling to the screen audiences hold in their hands. We specialise in short-format storytelling and vertical filmmaking — digital-first entertainment built to hold attention.',
    approach: [
      'Tight, high-retention storytelling where every second earns its place.',
      'Framing, performance and pacing designed natively for vertical screens.',
      'Digital-first thinking from the first idea to the final export.',
    ],
    capabilities: [
      'Short-format story and script development',
      'Vertical filmmaking and composition',
      'Rapid, efficient production planning',
      'Performance direction for close, intimate framing',
      'Fast-paced editing, captions and sound',
      'Delivery for mobile-first platforms',
    ],
    workflow: standardWorkflow([
      ['Idea', 'A sharp, compelling premise built for short, vertical viewing.'],
      ['Script', 'Concise scripts with hooks, momentum and emotional payoff.'],
      ['Shoot', 'Vertical-first framing and efficient, well-managed production.'],
      ['Edit', 'Pacing, captions and sound tuned for retention.'],
      ['Delivery', 'Files prepared for mobile-first platforms.'],
    ]),
    motif: 'micro',
    palette: ['#15110f', '#33241a', '#e0c28f'],
    image: '/images/h.jpeg',
    layout: 'stacked',
  },
  {
    slug: 'documentaries',
    number: '05',
    title: 'Documentaries',
    shortTitle: 'Documentaries',
    tagline: 'Real stories told with raw truth and cinematic depth.',
    summary:
      'Documentaries covering social issues, cultural heritage, corporate journeys and personal stories.',
    intro:
      'Real stories deserve cinematic respect. We produce documentaries that explore social issues, cultural heritage, corporate journeys and personal stories — told with raw truth and cinematic depth.',
    approach: [
      'Honest storytelling that respects the people and the truth at its centre.',
      'Cinematic visual treatment that gives real stories the scale they deserve.',
      'Careful structure, so a subject is understood and felt.',
    ],
    capabilities: [
      'Social-issue documentaries',
      'Cultural heritage documentaries',
      'Corporate journey and brand documentaries',
      'Personal story documentaries',
      'Research, interviews and narrative structuring',
      'Cinematic photography, editing and sound design',
    ],
    workflow: standardWorkflow([
      ['Research', 'We study the subject and find the story at its heart.'],
      ['Planning', 'Structure, access and a visual approach are defined.'],
      ['Filming', 'Interviews and cinematic coverage capture real moments.'],
      ['Edit', 'The narrative is shaped, scored and refined.'],
      ['Delivery', 'The finished film is prepared for screens and platforms.'],
    ]),
    motif: 'documentary',
    palette: ['#11161a', '#26323a', '#C6A36B'],
    image: '/images/g.jpeg',
    layout: 'offset',
  },
  {
    slug: 'feature-and-short-films',
    number: '06',
    title: 'Feature & Short Films',
    shortTitle: 'Feature & Short Films',
    tagline: 'Cinematic art that explores profound human emotions and timeless tales.',
    summary:
      'Cinematic storytelling, strong scripts, performances and world-class production values.',
    intro:
      'Cinema is where our ambition is greatest. We make feature and short films built on strong scripts, committed performances and world-class production values — cinematic art that explores profound human emotions and timeless tales.',
    approach: [
      'Begin with a script worth making and protect it through every stage.',
      'Performances and visual style that serve the emotional truth of the story.',
      'World-class production values, delivered with precision.',
    ],
    capabilities: [
      'Script development and story editing',
      'Casting and performance direction',
      'Cinematography by experienced Directors of Photography',
      'Production design and on-set management',
      'Editing, colour grading and sound design',
      'Festival and platform-ready delivery',
    ],
    workflow: standardWorkflow([
      ['Script', 'We develop and refine a story worth telling.'],
      ['Pre-production', 'Casting, design, locations and planning are brought together.'],
      ['Principal photography', 'Directors and cinematographers capture the film.'],
      ['Post-production', 'Edit, grade, score and sound shape the final film.'],
      ['Delivery', 'The finished film is prepared for audiences and platforms.'],
    ]),
    motif: 'film',
    palette: ['#0f0f12', '#262228', '#C6A36B'],
    image: '/images/p.jpeg',
    layout: 'wide',
  },
]

export const getService = (slug: string | undefined) => services.find((s) => s.slug === slug)
