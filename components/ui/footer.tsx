import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 -mt-px">
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
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-2 lg:col-span-3">
              {/* Logo */}
              <Link className="inline-block" href="/" aria-label="Cruip">
                <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="flogo_a">
                      <stop stopColor="#3ABAB4" offset="0%" />
                      <stop stopColor="#7F9CF5" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="flogo_b">
                      <stop stopColor="#3ABAB4" offset="0%" />
                      <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#flogo_a)" />
                  <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#flogo_b)" />
                </svg>
              </Link>
            </div>

            {/* 2nd, 3rd, 4th and 5th blocks */}
            <div className="md:col-span-10 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">Products</h6>
                <ul>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Drag And Drop
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Visual Studio X
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Easy Content
                    </a>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Industries and tools
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Use cases
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Blog
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Online events
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Nostrud exercitation
                    </a>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">Company</h6>
                <ul>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Diversity & inclusion
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      About us
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Press
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Customer stories
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Online communities
                    </a>
                  </li>
                </ul>
              </div>

              {/* 5th block */}
              <div className="text-sm">
                <h6 className="font-medium uppercase mb-2">Support</h6>
                <ul>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Documentation
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Tutorials & guides
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Webinars
                    </a>
                  </li>
                  <li className="mb-1">
                    <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                      Open-source
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="text-center md:flex md:items-center md:justify-between">

            {/* Middle links */}
            <div className="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
              <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                Terms
              </a>{' '}
              ·{' '}
              <a className="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" href="#0">
                Privacy Policy
              </a>
            </div>

            {/* Copyrights note */}
            <div className="text-gray-600 dark:text-gray-400 text-sm mr-4">&copy; thegreg.at</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm mr-4">All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
