import Image, { StaticImageData } from 'next/image'

interface TestimonialProps {
    testimonial: {
        image: StaticImageData
        name: string
        user: string
        link: string
        content: string
    }
    children: React.ReactNode
}

export default function Testimonial({ testimonial, children }: TestimonialProps) {
    return (
        <div className="rounded h-max w-[18rem] border border-transparent [background:linear-gradient(#323237,#323237)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700),theme(colors.zinc.700))_border-box] p-5rounded h-full w-[22rem] border border-transparent [background:linear-gradient(#323237,#323237)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700),theme(colors.zinc.700))_border-box] p-2">
                <Image className="rounded" src={testimonial.image} width={350} height={1} alt="Website Screenshot" />
        </div>
    )
}