export const metadata = {
  title: 'derGreg.com – Websites, die verkaufen, überzeugen und verzaubern!',
  description: 'Warum sich zwischen Funktionalität und Flair entscheiden? Ich biete Websites, die nicht nur hübsch anzusehen sind, sondern auch die Kasse klingeln lassen. Schau vorbei und bringe dein Online-Geschäft auf die Überholspur!',
}

import Head from "next/head";
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
      <Head>
        <meta name="description" content="Warum sich zwischen Funktionalität und Flair entscheiden? Ich biete Websites, die nicht nur hübsch anzusehen sind, sondern auch die Kasse klingeln lassen. Schau vorbei und bringe dein Online-Geschäft auf die Überholspur!" key="desc" />
        <meta property="og:title" content="derGreg.com – Websites, die verkaufen, überzeugen und verzaubern!" />
        <meta property="og:description" content="Warum sich zwischen Funktionalität und Flair entscheiden? Ich biete Websites, die nicht nur hübsch anzusehen sind, sondern auch die Kasse klingeln lassen. Schau vorbei und bringe dein Online-Geschäft auf die Überholspur!" />
        <meta property="og:type" content="Website" />
        <meta property="og:url" content="www.dergreg.com" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:image" content='@/public/images/OG/og_facebook.png' />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="og:image" content='@/public/images/OG/og_whatsapp.png'/>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />

      </Head>
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
