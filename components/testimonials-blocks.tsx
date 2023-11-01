import Image from 'next/image'
import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function TestimonialsBlocks() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-800">

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">

            {/* 1st testimonial */}
            <div data-aos="fade-up" data-aos-delay="150" className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage01} width={56} height={56} alt="Testimonial 01" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-purple-500" d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z" />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">“ Unsere Produkte leben von Emotionen und genau das spiegelt unsere neue Website wider. “</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—David Krammer</cite>, <a className="text-teal-500 transition duration-150 ease-in-out" href="">Olivadis</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div data-aos="fade-up" data-aos-delay="350" className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage02} width={56} height={56} alt="Testimonial 02" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-purple-500" d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z" />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">“ Unser Ticket Buchungssystem ist nicht nur optisch ein Highlight, sondern auch in puncto Bedienfreundlichkeit und Performance. “</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Florian Röhlich</cite>, <a className="text-teal-500 transition duration-150 ease-in-out" href="">Kabarett Am See</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div data-aos="fade-up" data-aos-delay="550" className="text-center">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage03} width={56} height={56} alt="Testimonial 03" />
                <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-purple-500" d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z" />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-600 dark:text-gray-400">“ Die Kombination aus kreativem Design und technischer Exzellenz hat uns begeistert. “</blockquote>
              <div className="font-red-hat-display font-bold mt-2">
                <cite className="not-italic">—Amina Kern</cite>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}