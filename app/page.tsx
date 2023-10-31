export const metadata = {
  title: 'derGreg.com – Websites, die verkaufen, überzeugen und verzaubern!',
  description: 'Warum sich zwischen Funktionalität und Flair entscheiden? Ich biete Websites, die nicht nur hübsch anzusehen sind, sondern auch die Kasse klingeln lassen. Schau vorbei und bringe dein Online-Geschäft auf die Überholspur!',
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
