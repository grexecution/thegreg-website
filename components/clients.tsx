import CoronaIcon from '@/public/images/logos/corona.svg'
import BerndorfLogo from '@/public/images/logos/berndorf.svg'
import UmdaschLogo from '@/public/images/logos/umdasch.svg'
import SparLogo from '@/public/images/logos/spar.png'
import RedbullLogo from '@/public/images/logos/redbull.svg'
import OlivadisLogo from '@/public/images/logos/olivadis.svg'
import HTLLogo from '@/public/images/logos/htlmoedling.svg'
import KasLogo from '@/public/images/logos/kas.svg'

import Image from "next/image";
import React from "react";
export default function Clients() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:pb-20">

          {/* Items */}
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4" data-aos-id-clients>

            {/* Item */}
            <div className="flex items-center justify-center h-24 border border-gray-200 dark:border-gray-800 p-2" data-aos="fade-up" data-aos-anchor="[data-aos-id-clients]">
              <Image src={CoronaIcon} className="max-w-full fill-current text-gray-400 dark:text-gray-500" width="123" height="30" alt="Corona Icon" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center h-24 border border-gray-200 dark:border-gray-800 p-2" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-clients]">
              <Image src={BerndorfLogo} className="max-w-full fill-current text-gray-400 dark:text-gray-500" width="123" height="30" alt="Corona Icon" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center h-24 border border-gray-200 dark:border-gray-800 p-2" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-clients]">
              <Image src={UmdaschLogo} className="max-w-full fill-current text-gray-400 dark:text-gray-500" width="123" height="30" alt="Corona Icon" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center h-24 border border-gray-200 dark:border-gray-800 p-2" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-clients]">
              <Image src={SparLogo} className="max-w-full fill-current text-gray-400 dark:text-gray-500" width="153" height="30" alt="Corona Icon" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center h-24 border border-gray-200 dark:border-gray-800 p-2" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-clients]">
              <Image src={OlivadisLogo} className="max-w-full fill-current text-gray-400 dark:text-gray-500" width="123" height="30" alt="Corona Icon" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center h-24 border border-gray-200 dark:border-gray-800 p-2" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-clients]">
              <Image src={RedbullLogo} className="max-w-full fill-current text-gray-400 dark:text-gray-500" width="100" height="30" alt="Corona Icon" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center h-24 border border-gray-200 dark:border-gray-800 p-2" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-clients]">
              <Image src={HTLLogo} className="max-w-full fill-current text-gray-400 dark:text-gray-500" width="163" height="40" alt="Corona Icon" />
            </div>

            {/* Item */}
            <div className="flex items-center justify-center h-24 border border-gray-200 dark:border-gray-800 p-2" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-clients]">
              <Image src={KasLogo} className="max-w-full fill-current text-gray-400 dark:text-gray-500" width="110" height="60" alt="Corona Icon" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}