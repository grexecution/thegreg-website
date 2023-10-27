'use client'

import { useState } from 'react'

import Accordion from '@/components/accordion'

export default function Faq() {
    const [isAnnual, setIsAnnual] = useState<boolean>(true)

    const faqs = [
        {
            title: 'Bietest du auch laufendes Service?',
            text: 'Ja! Wenn du meine laufendes Service in Anspruch nehmen willst, kümmer ich mich um deine Domain, Hosting, Emails, etc. ',
            active: false,
        },
        {
            title: 'Wie läuft das Projekt normalerweise ab?',
            text: 'Wir starten mit einem Video-Meeting wo wir gemeinsam das Konzept ausarbeiten. Danach designe ich die Website und bitte dich um Feedback.',
            active: false,
        },
        {
            title: 'Welche Zahlungsmethoden bietest du an?',
            text: 'Ich nehme Zahlungen bei Projektstart in Form von Überweisung oder Kreditkartenzahlung.',
            active: false,
        },

    ]

    return (
        <section>
            <div className="py-12 md:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    {/* FAQs */}
                    <div className="max-w-2xl mx-auto">
                        <div className="space-y-2">
                            {faqs.map((faq, index) => (
                                <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
                                    {faq.text}
                                </Accordion>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}