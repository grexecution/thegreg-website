'use client';
import React from "react";

import { InlineWidget } from "react-calendly";

const CalendlyInline = () => {
    return (
        <div>

        <InlineWidget url="https://calendly.com/gregwallner/website" rootElement={document.getElementById('__next')}
                />
        </div>
    );
};

export default CalendlyInline;