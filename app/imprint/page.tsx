export const metadata = {
    title: 'Contact - Appy',
    description: 'Page description',
}

import PageIllustration from '@/components/page-illustration'

export default function Contact() {
    return (
        <>
            {/*  Page illustration */}
            <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
                <PageIllustration />
            </div>

            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                        {/* Page header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                            <h1 className="h1 font-red-hat-display mb-4">Impressum</h1>
                        </div>
                        <div
                            className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                            <div className="absolute inset-0 -z-10 overflow-hidden">
                                <svg
                                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                                    aria-hidden="true">
                                    <defs>
                                        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200"
                                                 x="50%" y="-1" patternUnits="userSpaceOnUse">
                                            <path d="M100 200V.5M.5 .5H200" fill="none"/>
                                        </pattern>
                                    </defs>
                                    <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                                        <path
                                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                            />
                                    </svg>
                                    <rect width="100%" height="100%"
                                          fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"/>
                                </svg>
                            </div>
                            <div
                                className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                                <div
                                    className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                                    <div className="lg:pr-4">
                                        <div className="lg:max-w-lg">
                                            <p className="text-base font-semibold leading-7 text-teal-500">Unternehmensinformation</p>
                                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">derGreg.com</h2>
                                            <p className="mt-6 text-xl leading-8 text-gray-700">Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.</p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="lg:mx-auto  lg:w-full lg:max-w-7xl  lg:gap-x-8 lg:px-8">
                                    <div className="lg:pr-4">
                                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                            <ul role="list" className="mt-8 space-y-4 text-gray-600">
                                                <li className="flex gap-x-2">
                                                    <span><strong className="font-semibold text-gray-900">Unternehmen:</strong> Gregor Wallner EU</span>
                                                </li>
                                                <li className="flex gap-x-2">
                                                    <span><strong className="font-semibold text-gray-900">Gegenstand:</strong> IT Dienstleistungen</span>
                                                </li>
                                                <li className="flex gap-x-2">
                                                    <span><strong className="font-semibold text-gray-900">UID Nummer:</strong> ATU71544019</span>
                                                </li>
                                                <li className="flex gap-x-2">
                                                    <span><strong className="font-semibold text-gray-900">Telefon:</strong> +43 650 9405071</span>
                                                </li>
                                                <li className="flex gap-x-2">
                                                    <span><strong className="font-semibold text-gray-900">Email:</strong> office@dergreg.com</span>
                                                </li>
                                                <p>Mitglied bei: WKO</p>
                                            </ul>
                                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Cookies</h2>
                                            <p className="mt-2">Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen zu ermöglichen, verwenden wir Cookies, also kleine Textdateien, die auf Ihrem Endgerät abgelegt werden. Teilweise werden diese Cookies nach Schließen des Browsers automatisch wieder gelöscht (sog. „Session-Cookies“), teilweise verbleiben diese Cookies länger auf Ihrem Endgerät und ermöglichen das Speichern von Seiteneinstellungen (sog. „persistente Cookies“). Im letzteren Fall können Sie die Speicherdauer der Übersicht zu den Cookie-Einstellungen Ihres Webbrowsers entnehmen.

                                                Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages, gemäß Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität der Website sowie einer kundenfreundlichen und effektiven Ausgestaltung des Seitenbesuchs.

                                                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können.

                                                Bitte beachten Sie, dass bei Nichtannahme von Cookies die Funktionalität unserer Website eingeschränkt sein kann.</p>
                                        <br/>
                                            <a href="https://thegreg.io">Webdesign & Course for Web Development</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}
