'use client';
import React from "react";

import { PopupButton } from 'react-calendly';

export default function Home() {
    return (
        <div>
            {typeof window !== 'undefined' && (
                <PopupButton
                    url="https://calendly.com/gregwallner/website"
                    rootElement={document.getElementById('__next')}
                    text="Click here to schedule!"
                />
            )}
        </div>
    );
}