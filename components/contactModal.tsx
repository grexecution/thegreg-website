'use client'

import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from "next/image";
import MessageIcon from '@/public/images/logos/messageIcon.svg'
import WhatsappIcon from "@/public/images/logos/whatsapp.svg";
import TestimonialImage01 from '@/public/images/team-greg.png'


export default function MyModal() {
    let [isOpen, setIsOpen] = useState(false)

    function contactWhatsapp() {
        window.open('https://wa.me/436509405071?text=Ich%20brauche%20eine%20Website!')
    }

    function contactMail() {
        window.open('mailto:office@dergreg.com')
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="">
                <button
                    type="button"
                    onClick={openModal}
                    className="btn w-full text-white bg-teal-500 hover:bg-teal-400 shrink-0 gap-2"
                >
                    <Image src={MessageIcon} width={20} height={20} alt="Whatsapp Icon" />
                    Kontakt aufnehmen
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/90" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-end md:items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex gap-5 items-center">
                                        <div className="relative flex flex-col w-3/12 items-center">
                                            <svg className="absolute top-0 left-16 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill-current text-teal-500" d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z" />
                                            </svg>
                                            <Image className="rounded-full" src={TestimonialImage01} width={80} height={80} alt="Testimonial 01" />
                                            <p className="text-xs text-gray-500 text-center">
                                                Gregor W.
                                            </p>
                                        </div>
                                        <div className="w-9/12">
                                            <h2 className="h2 text-[23px] lg:text-2xl mb-0 font-red-hat-display font-black text-gray-900">
                                                Wie möchtest du mich kontaktieren?
                                            </h2>
                                            <div className="mt-0">
                                                <p className="text-sm text-gray-500">
                                                    Antwortzeit: ~ 6-12h
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="mt-4 flex flex-col gap-2">
                                        <button
                                            type="button"
                                            onClick={function(event){ closeModal(); contactWhatsapp()}}
                                            className="btn w-full text-white bg-black hover:bg-gray-900 shrink-0 gap-2 border-2">
                                            <Image src={WhatsappIcon} width={20} height={20} alt="Whatsapp Icon" />
                                            Auf Whatsapp schreiben
                                        </button>
                                        <button
                                            type="button"
                                            className="btn text-black bg-white hover:bg-gray-100 shrink-0 border-black border-2 border-inset"
                                            onClick={function(event){ closeModal(); contactMail()}}
                                        >
                                            Email schreiben
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
