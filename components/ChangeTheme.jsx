// components/ChangeTheme.jsx
'use client';

import React, { useState, useEffect } from 'react';

export default function ChangeTheme({ isDarkMode, setIsDarkMode }) {
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size to toggle between mobile and desktop view
    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth <= 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        window.addEventListener('resize', checkMobile);
        checkMobile(); // Initialize on load
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <>
            {isMobile ? (
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`lg:block text-xl text-blue-500 ml-4 rounded-full ${
                        isDarkMode ? 'bg-fuchsia-700' : 'bg-yellow-200'
                    }`}
                >
                    {isDarkMode ? '🌙' : '🌞'}
                </button>
            ) : (
                <div
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="lg:flex hidden items-center justify-center space-x-2 cursor-pointer"
                >
                    <div
                        className={`relative flex items-center justify-center w-16 h-8 rounded-full transition-all duration-300 ease-in-out ${
                            isDarkMode ? 'bg-fuchsia-700' : 'bg-yellow-200'
                        }`}
                    >
                        <div
                            className={`absolute left-1 transition-all duration-300 ease-in-out transform ${
                                isDarkMode ? 'translate-x-8' : 'translate-x-0'
                            }`}
                        >
                            {isDarkMode ? '🌙' : '🌞'}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
