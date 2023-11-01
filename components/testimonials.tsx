'use client'
import Testimonial from '@/components/testimonial'
import TestimonialImg01 from '@/public/images/olivadis_screenshot.png'
import TestimonialImg02 from '@/public/images/berndorf_screenshot.png'
import TestimonialImg03 from '@/public/images/Blackboard_product_dt.png'
import TestimonialImg04 from '@/public/images/kas_screenshot.png'
import TestimonialImg05 from '@/public/images/ps_screenshot.png'
import TestimonialImg06 from '@/public/images/olivadis_screenshot.png'
import TestimonialImg07 from '@/public/images/berndorf_screenshot.png'
import TestimonialImg08 from '@/public/images/Blackboard_product_dt.png'

export default function Testimonials() {

    const testimonials01 = [
        {
            image: TestimonialImg01,
            name: 'Lina James',
            user: '@linaj87',
            link: '#0',
            content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
        },
        {
            image: TestimonialImg02,
            name: 'Lina James',
            user: '@linaj87',
            link: '#0',
            content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
        },
        {
            image: TestimonialImg03,
            name: 'Lina James',
            user: '@linaj87',
            link: '#0',
            content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
        },
        {
            image: TestimonialImg04,
            name: 'Mary Kahl',
            user: '@marykahl',
            link: '#0',
            content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
        },
    ]

    const testimonials02 = [
        {
            image: TestimonialImg05,
            name: 'Katy Dragán',
            user: '@katyd',
            link: '#0',
            content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
        },
        {
            image: TestimonialImg06,
            name: 'Karl Ahmed',
            user: '@karl87',
            link: '#0',
            content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
        },
        {
            image: TestimonialImg07,
            name: 'Carlotta Grech',
            user: '@carlagrech',
            link: '#0',
            content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
        },
        {
            image: TestimonialImg08,
            name: 'Alejandra Gok',
            user: '@alejandraIT',
            link: '#0',
            content: 'Extremely thoughtful approaches to business. I highly recommend this product to anyone wanting to jump into something new.',
        },
    ]

    return (
        <section id="projekte" className="bg-zinc-800">
            <div className="py-12 md:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
                        <h2 data-aos="fade-down" data-aos-delay="150" className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-200">Meine Projekte</h2>
                        <p data-aos="fade-down" data-aos-delay="150" className="text-xl text-gray-400">25+ Websites habe ich bereits erfolgreich entwickelt.
                        </p>
                    </div>
                </div>
                <div className="max-w-[94rem] mx-auto space-y-6">
                    {/* Row #1 */}
                    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
                        <div data-aos="fade-up" data-aos-delay="250" className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]">
                            {/* Items */}
                            {testimonials01.map((testimonial, index) => (
                                <Testimonial key={index} testimonial={testimonial}>
                                    {testimonial.content}
                                </Testimonial>
                            ))}
                        </div>
                        {/* Duplicated element for infinite scroll */}
                        <div data-aos="fade-up" data-aos-delay="450" className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
                            {/* Items */}
                            {testimonials01.map((testimonial, index) => (
                                <Testimonial key={index} testimonial={testimonial}>
                                    {testimonial.content}
                                </Testimonial>
                            ))}
                        </div>
                    </div>
                    {/* Row #2 */}
                    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
                        <div data-aos="fade-up" data-aos-delay="350" className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]">
                            {/* Items */}
                            {testimonials02.map((testimonial, index) => (
                                <Testimonial key={index} testimonial={testimonial}>
                                    {testimonial.content}
                                </Testimonial>
                            ))}
                        </div>
                        {/* Duplicated element for infinite scroll */}
                        <div data-aos="fade-up" data-aos-delay="150" className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]" aria-hidden="true">
                            {/* Items */}
                            {testimonials02.map((testimonial, index) => (
                                <Testimonial key={index} testimonial={testimonial}>
                                    {testimonial.content}
                                </Testimonial>
                            ))}
                        </div>
                    </div >
                </div >
            </div >
        </section >
    )
}