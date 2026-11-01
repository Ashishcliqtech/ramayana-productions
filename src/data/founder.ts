/**
 * Founder details — EDIT THIS FILE.
 * Only the philosophy below comes from the supplied Founder's Vision document.
 * The name, designation and photograph are intentionally left as placeholders.
 */
export const founder = {
  /** PLACEHOLDER — replace with the founder's approved name */
  name: '[Founder Name]',
  /** PLACEHOLDER — replace with the founder's approved designation */
  designation: '[Founder & Creative Director]',
  /**
   * Photograph: copy the portrait to /public/images/founder.jpg and set photo to '/images/founder.jpg'.
   * While empty, an elegant placeholder frame is displayed.
   */
  photo: '' as string,
  photoAlt: 'Portrait of the founder of Ramayana Productions',

  heading: "Founder's Vision: Redefining the Art of Storytelling",
  quote: "We don't just create films—we create emotional experiences that live far beyond the screen.",

  preview:
    'Ramayana Productions is a forward-thinking film production house driven by a passion for storytelling — transforming imagination into cinematic reality.',

  /** The full vision statement, built from the ideas in the supplied document. */
  vision: [
    'Ramayana Productions is a forward-thinking film production house driven by a passion for storytelling. Our purpose is simple and demanding: to transform imagination into cinematic reality.',
    'We believe every story deserves to be told with heart, depth and visual poetry. That belief shapes every script we develop, every frame we compose and every cut we make.',
    'Behind the work stands a dynamic creative team of filmmakers, writers, cinematographers, editors and designers. Together they combine creativity with technical precision, so that imagination is never compromised by execution.',
  ],

  philosophy: [
    {
      title: 'Excellence in storytelling',
      text: 'We hold ourselves to the highest standard in storytelling, visual aesthetics and emotional impact — in every format, at every scale.',
    },
    {
      title: 'Narrative meets visual style',
      text: 'Strong narratives deserve impactful visual styles. We pair the two so that a story is felt as much as it is watched.',
    },
    {
      title: 'Stories that connect',
      text: 'We create stories that bridge cultures, spark conversations and evoke emotion — stories that matter beyond the moment.',
    },
  ],

  leadership:
    'Creative leadership at Ramayana Productions means protecting the story at every stage — from first idea to final delivery — and giving filmmakers, writers, cinematographers, editors and designers the room to do their finest work.',

  commitment:
    'Our commitment is to quality, innovation and authenticity. Every project, from short-form digital content to grand cinematic storytelling, is treated as a story worth telling well.',

  future:
    'The future of filmmaking belongs to those who can unite imagination with precision — who can move between vertical micro dramas and feature-length cinema without losing the emotional truth of the story. That is the path Ramayana Productions is committed to walking.',

  values: ['Quality', 'Innovation', 'Authenticity'],
} as const
