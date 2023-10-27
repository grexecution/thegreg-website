'use client'

import { useState } from 'react'

import Image from 'next/image'
import PricingDecoration from '@/public/images/pricing-decoration.png'
import Tooltip from '@/components/tooltip'
import Accordion from '@/components/accordion'

export default function PricingTabs() {
    return (
        <section>
            <div className="py-12 md:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12">
                        <h2 className="h2 font-red-hat-display mb-4 text-gray-100">Meine Preise</h2>
                        <p className="text-xl text-gray-400">Ein beeindruckender Webauftritt muss nicht dein Budget sprengen. Entdecke meine fairen Pakete, die Qualität und Wert vereinen.
                        </p>
                    </div>

                    {/* Pricing tabs component */}
                    <div className="pb-0 md:pb-10">
                        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">

                            {/* Pricing tab 1 */}
                            <div className="h-full">
                                <div className="relative flex flex-col h-full p-6 rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">
                                    <div className="mb-4">
                                        <div className="text-lg text-zinc-900 font-semibold mb-1">Website Light</div>
                                        <div className="font-inter-tight inline-flex items-baseline mb-2">
                                            <span className="text-zinc-900 font-bold text-2xl">€</span>
                                            <span className="text-zinc-900 font-bold text-3xl">1.190</span>
                                            <span className="ml-2 text-zinc-500 font-medium text-xs">exkl. MwSt</span>
                                        </div>
                                        <div className="text-zinc-500">Für aufstrebende Projekte mit modernem Anspruch</div>
                                    </div>
                                    <div className="grow">
                                        <div className="text-sm text-zinc-900 font-medium mb-2">Beinhaltet:</div>
                                        <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 grow">
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="01" content="Lorem Ipsum is simply dummy text of the printing.">
                                                    One-pager mit unlimitierten Sektionen
                                                </Tooltip>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="02" content="Lorem Ipsum is simply dummy text of the printing.">
                                                    Konzeption, Design & Entwicklung
                                                </Tooltip>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="03" content="Lorem Ipsum is simply dummy text of the printing.">
                                                    Optimiert für Smartphone, Tablet & PC
                                                </Tooltip>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="04" content="Lorem Ipsum is simply dummy text of the printing.">
                                                    Rasend schnelle Ladezeit
                                                </Tooltip>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="05" content="Lorem Ipsum is simply dummy text of the printing.">
                                                    Google SEO optimiert
                                                </Tooltip>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="01" content="Keine hat Lust auf langjährige Verzögerungen. In nur 4 Wochen geht die Website Live!">
                                                    Von Start bis Live in 4 Wochen
                                                </Tooltip>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-8">
                                        <a className="btn text-zinc-100 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900 w-full shadow" href="https://wa.me/436509405071?text=Ich%20brauche%20eine%20Website-Light!">
                                            Jetzt Anfragen
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing tab 2 */}
                            <div className="h-full">
                                <div className="relative flex flex-col h-full p-6 rounded-lg bg-zinc-800">
                                    <Image className="absolute right-6 -top-5 mix-blend-exclusion" src={PricingDecoration} alt="Pricing decoration" width={76} height={74} aria-hidden="true" />
                                    <div className="mb-4">
                                        <div className="text-lg text-zinc-200 font-semibold mb-1">Website Premium</div>
                                        <div className="font-inter-tight inline-flex items-baseline mb-2">
                                            <span className="text-zinc-200 font-bold text-2xl">€</span>
                                            <span className="text-zinc-200 font-bold text-3xl">2.990</span>
                                            <span className="ml-2 text-zinc-500 font-medium text-xs">exkl. MwSt</span>
                                        </div>
                                        <div className="text-zinc-500">Für vielversprechende Unternehmen und Betriebe</div>
                                    </div>
                                    <div className="grow">
                                        <div className="text-sm text-zinc-200 font-medium mb-2">Beinhaltet:</div>
                                        <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 grow">
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="08" content="Website Premium beinhaltet alle Features von Website Light" dark>
                                                    Alles von Website Light
                                                </Tooltip>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="07" content="Design & Entwicklung von 6 unterschiedlichen Seiten wie zB. Home, Über uns, Kontakt, uvm." dark>
                                                    Bis zu 6 verschiedene Seiten
                                                </Tooltip>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="08" content="Ich binde alle Tools ein, die gebraucht werden." dark>
                                                    Einbindung von Termin-Buchung, Whatsapp & Kontaktformular
                                                </Tooltip>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="09" content="Automatische Erkennung des Landes & Sprachauswahl. Achtung, die Übersetzung ist nicht inklusive." dark>
                                                    Mehrsprachigkeit
                                                </Tooltip>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-8">
                                        <a className="btn text-zinc-600 bg-white hover:text-zinc-900 w-full shadow" href="https://wa.me/436509405071?text=Ich%20brauche%20eine%20Website-Premium!">
                                            Jetzt Anfragen
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Pricing tab 3 */}
                            <div className="h-full">
                                <div className="relative flex flex-col h-full p-6 rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">
                                    <div className="mb-4">
                                        <div className="text-lg text-zinc-900 font-semibold mb-1">Maßgeschneidert</div>
                                        <div className="font-inter-tight inline-flex items-baseline mb-2">
                                            <span className="text-zinc-900 font-bold text-2xl">Preis auf Anfrage</span>
                                        </div>
                                        <div className="text-zinc-500">Für alle, die etwas Maßgeschneidertes im Sinn haben.</div>
                                    </div>
                                    <div className="grow">
                                        <div className="text-sm text-zinc-900 font-medium mb-2">Möglichkeiten:</div>
                                        <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-3 grow">
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="13" content="Entwicklung von Online Shops für deine Produkte">
                                                    eCommerce Shops
                                                </Tooltip>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="14" content="Entwicklung von Reservierungen und Buchungssystemen">
                                                    Ticketbuchung
                                                </Tooltip>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="15" content="Entwicklung von Dashboards um beispielsweise Kunden zu verwalten oder Daten zu analysieren">
                                                    Dashboards
                                                </Tooltip>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                </svg>
                                                <Tooltip id="16" content="Hast du eine Idee? Melde dich!">
                                                    Diverse Webapps
                                                </Tooltip>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-8">
                                        <a className="btn text-zinc-100 bg-gradient-to-r from-zinc-700 to-zinc-900 hover:from-zinc-900 hover:to-zinc-900 w-full shadow" href="https://wa.me/436509405071?text=Ich%20brauche%20eine%20Website-Maßgeschneidert!">
                                            Jetzt Anfragen
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}