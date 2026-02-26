import { Hero } from '@/components/sections/hero'
import { TrustBar } from '@/components/sections/trust-bar'
import { ServicesOverview } from '@/components/sections/services-overview'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { RealisationsPreview } from '@/components/sections/realisations-preview'
import { Testimonials } from '@/components/sections/testimonials'
import { EmergencyCTA } from '@/components/sections/emergency-cta'
import { FAQ } from '@/components/sections/faq'
import { FinalCTA } from '@/components/sections/final-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <RealisationsPreview />
      <Testimonials />
      <EmergencyCTA />
      <FAQ />
      <FinalCTA />
    </>
  )
}
