import VideoThumb from '@/public/images/mockup-image-01.jpg'
import ModalVideoIphone from '@/components/modal-video-iphone'
import Whatsapp from "@/components/whatsapp";

export default function HeroHome() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-0 md:pt-40 md:pb-16">

          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 lg:text-6xl mb-4 font-red-hat-display font-black" data-aos="fade-down">Ein neuer Anstrich für dein Business</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-down" data-aos-delay="150">Jeder Mausklick hat sein Echo. Ich forme deine Online-Identität zu einem unvergesslichen Erlebnis, das Technik und Emotion vereint.
              </p>
                <div className="mt-6 gap-4 flex flex-col sm:flex-row justify-center md:justify-start max-w-md md:max-w-full mx-auto sm:max-w-md md:mx-0">
                  <Whatsapp/>
                  <a className="btn text-teal-500 bg-white hover:bg-teal-100 shrink-0" href="#projekte">Website Projekte ansehen</a>
                </div>
              <div className="pt-1"><span>Fertige Website in 4 Wochen | ab €1190,-</span></div>
            </div>

            {/* Mobile mockup */}
            <div className="hidden md:block md:col-span-5 lg:col-span-5 text-center md:text-right" data-aos="fade-up" data-aos-delay="450">

              <ModalVideoIphone
                thumb={VideoThumb}
                thumbWidth={290}
                thumbHeight={624}
                thumbAlt="Modal video thumbnail"
                video="/videos/video.mp4"
                videoWidth={1920}
                videoHeight={1080} />

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}