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
import { pageSEO } from '../data/seo'

export default function Home() {
  useSEO(pageSEO.home)

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
