import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-16 -mt-px">
          {/* Footer illustration */}
          <div className="pointer-events-none -z-1" aria-hidden="true">
            <svg
              className="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40"
              width="800"
              height="264"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fillOpacity=".4" />
              <defs>
                <radialGradient
                  id="footerglow_paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="rotate(90 0 400) scale(315.089)"
                >
                  <stop stopColor="#3ABAB4" />
                  <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-4 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-2 lg:col-span-3 flex justify-center">
              {/* Logo */}
              <Link className="inline-block md:hidden" href="/" aria-label="derGreg">
                <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7553 33.3647C7.81971 33.3647 0.549805 26.0948 0.549805 17.1592C0.549805 8.22674 7.81971 0.959961 16.7553 0.959961C23.7761 0.959961 29.9314 5.45266 32.1233 12.0283H25.6037C23.773 8.865 20.4323 6.92221 16.7553 6.92221C11.1075 6.92221 6.51206 11.5145 6.51206 17.1592C6.51206 22.807 11.1075 27.4025 16.7553 27.4025C20.0369 27.4025 23.1441 25.8084 25.0651 23.1433L26.1299 21.6644H18.8289V16.4992H32.5498C32.5498 16.5583 32.5467 16.7202 32.5467 16.7202C32.5405 17.8224 32.5062 19.2608 32.3132 20.6432C32.1451 21.845 31.8617 22.9129 31.4445 23.9061C30.2583 26.7268 28.0415 29.2394 25.2021 30.9829C22.6677 32.5397 19.7442 33.3647 16.7553 33.3647Z" fill="url(#paint0_linear_119_127)"/>
                  <defs>
                    <linearGradient id="paint0_linear_119_127" x1="23.3656" y1="0.829664" x2="8.8269" y2="36.5948" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#809CD0"/>
                      <stop offset="0.5026" stop-color="#3ABAB4"/>
                      <stop offset="1" stop-color="#16716F"/>
                    </linearGradient>
                  </defs>
                </svg>

              </Link>
            </div>

          </div>

          {/* Bottom area */}
          <div className="text-center md:flex md:items-center md:justify-between">

            {/* Copyrights note */}
            <div className="text-gray-600 dark:text-gray-400 text-sm">&copy; dergreg.com</div>
            <div className="pt-2 md-pt-0 flex gap-7 justify-center">
              <Link href="/imprint"><div className="text-gray-600 dark:text-gray-400 text-sm">Impressum</div></Link>

              <div className="text-gray-600 dark:text-gray-400 text-sm">All rights reserved</div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
