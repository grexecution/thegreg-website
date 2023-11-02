export const metadata = {
  title: 'derGreg.com – Websites, die verkaufen, überzeugen und verzaubern!',
  description: 'Warum sich zwischen Funktionalität und Flair entscheiden? Ich biete Websites, die nicht nur hübsch anzusehen sind, sondern auch die Kasse klingeln lassen. Schau vorbei und bringe dein Online-Geschäft auf die Überholspur!',
  openGraph: {
    title: 'derGreg.com – Websites, die verkaufen, überzeugen und verzaubern!',
    description: 'Warum sich zwischen Funktionalität und Flair entscheiden? Ich biete Websites, die nicht nur hübsch anzusehen sind, sondern auch die Kasse klingeln lassen. Schau vorbei und bringe dein Online-Geschäft auf die Überholspur!',
    url: 'https://dergreg.com',
    images: [
      {
        url: '/images/OG/og_facebook.png',
        width: 1200,
        height: 630,
        type: 'image/png'
      },
      {
        url: '/images/OG/og_whatsapp.png',
        width: 400,
        height: 400,
        type: 'image/png',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
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
