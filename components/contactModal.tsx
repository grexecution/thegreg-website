'use client'

import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from "next/image";
import MessageIcon from '@/public/images/logos/messageIcon.svg'
import WhatsappIcon from "@/public/images/logos/whatsapp.svg";

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
                        <div className="fixed inset-0 bg-black/75" />
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
                                    <h2 className="h2 text-2xl lg:text2xl mb-0 font-red-hat-display font-black text-gray-900">
                                        Wie möchtest du kontaktiert werden?
                                    </h2>
                                    <div className="mt-0">
                                        <p className="text-sm text-gray-500">
                                            Ich melde mich innerhalb von 24 Stunden!
                                        </p>
                                    </div>

                                    <div className="mt-4 flex flex-col gap-4">
                                        <button
                                            type="button"
                                            onClick={function(event){ closeModal(); contactWhatsapp()}}
                                            className="btn w-full text-white bg-teal-500 hover:bg-teal-400 shrink-0 gap-2">
                                            <Image src={WhatsappIcon} width={20} height={20} alt="Whatsapp Icon" />
                                            Auf Whatsapp schreiben
                                        </button>
                                        <button
                                            type="button"
                                            className="btn text-teal-500 bg-white hover:bg-teal-100 shrink-0 border-teal-500 border-2"
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
