export const metadata = {
  title: 'Home - Appy',
  description: 'Page description',
}

import PageIllustration from '@/components/page-illustration'
import Hero from '@/components/hero-home'
import PricingTabs from "@/components/pricingtabs";
import Faq from "@/components/faq"
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
        <Clients/>
        <Testimonials/>
        <PricingTabs/>
        <Faq/>
        <TestimonialsBlocks />
        <Cta />
    </>
  )
}
