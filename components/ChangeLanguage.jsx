// components/ChangeLanguage.jsx
'use client';

import React from 'react';
import { useLanguage } from '@/context/language'; // Import the language context

export default function ChangeLanguage() {
    const { language, changeLanguage } = useLanguage();

    return (
        <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <button
                onClick={() => changeLanguage('en')}
                className={`p-2 rounded-full ${language === 'en' ? 'border-2 border-blue-500' : ''}`}
            >
                <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" alt="English" className="w-8 h-8" />
            </button>
            <button
                onClick={() => changeLanguage('th')}
                className={`p-2 rounded-full ${language === 'th' ? 'border-2 border-blue-500' : ''}`}
            >
                <img src="http://purecatamphetamine.github.io/country-flag-icons/3x2/TH.svg" alt="Thai" className="w-8 h-8" />
            </button>
        </div>
    );
}
