import Hero from '../sections/home/Hero'
import Intro from '../sections/home/Intro'
import Philosophy from '../sections/home/Philosophy'
import FounderPreview from '../sections/home/FounderPreview'
import ServicesShowcase from '../sections/home/ServicesShowcase'
import CapabilitiesStrip from '../sections/home/CapabilitiesStrip'
import ProductionGallery from '../sections/home/ProductionGallery'
import WhyChoose from '../sections/home/WhyChoose'
import TeamIntro from '../sections/home/TeamIntro'
import CTASection from '../components/CTASection'
import { Divider } from '../components/SectionHeading'
import { useSEO } from '../hooks/useSEO'

export default function Home() {
  useSEO({
    title: 'Ramayana Productions — Stories That Stay With You',
    description:
      'Ramayana Productions is a premium film, media and creative production house — web series, ad commercials, music videos, micro dramas, documentaries, feature and short films.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <Intro />
      <Philosophy />
      <FounderPreview />
      <Divider />
      <ServicesShowcase />
      <CapabilitiesStrip />
      <ProductionGallery />
      <WhyChoose />
      <TeamIntro />
      <CTASection />
    </>
  )
}
