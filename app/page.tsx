export const metadata = {
  title: 'Home - Appy',
  description: 'Page description',
}

import PageIllustration from '@/components/page-illustration'
import Hero from '@/components/hero-home'
import PricingTables from '@/components/pricing-tables'
import TestimonialsBlocks from '@/components/testimonials-blocks'
import Cta from '@/components/cta'
import Clients from '@/components/clients'
import Testimonials from "@/components/testimonials";


export default function Home() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>
        <Hero />
        <Testimonials/>
        <Clients/>
        <PricingTables />
        <TestimonialsBlocks />
        <Cta />
    </>
  )
}
