'use client'
import React from 'react';
import WhatsappIcon from '@/public/images/logos/whatsapp.svg'
import Image from "next/image";

const Whatsapp = () => {
    return (
        <div>
            <button className="btn w-full text-white bg-teal-500 hover:bg-teal-400 shrink-0 gap-2" href="https://wa.me/436509405071?text=Ich%20brauche%20eine%20Website!">
                <Image src={WhatsappIcon} width={20} height={20} alt="Whatsapp Icon" />
                Auf Whatsapp schreiben
            </button>
        </div>
    );
};

export default Whatsapp;