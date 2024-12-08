'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ChangeTheme from './ChangeTheme';  // Import the ChangeTheme component
import { useTheme } from '@/context/Theme';  // Import the ThemeProvider hook
import { useLanguage } from '@/context/Language';

export default function NavBar() {
    const { language } = useLanguage();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDarkMode, setIsDarkMode } = useTheme();  // Get the theme state from the provider

    const styles = {
        active: 'text-blue-500 font-bold border-b-4 border-blue-500 transition-all duration-300',
        nonSelected: 'text-gray-400 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-all duration-200',
    };

    return (
        <nav className="top-0 left-0 w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-lg z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Hamburger Menu for Mobile */}
                <button
                    className="lg:hidden text-blue-500 text-2xl focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>

                {/* Logo */}
                <div className="text-3xl font-extrabold text-blue-500">
                    <Link href="/">
                        <span>THEEPAPORT</span>
                    </Link>
                </div>

                {/* Theme Toggle Button */}
                <div className="lg:flex lg:justify-between lg:mr-24 content-center">
                <ChangeTheme isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                </div>
                {/* Navigation Links */}
                <div
                    className={`${
                        isMenuOpen ? 'block' : 'hidden'
                    } lg:flex lg:space-x-8 absolute lg:static top-16 left-0 w-full lg:w-auto  from-gray-800 via-gray-900 to-black text-white shadow-md lg:shadow-none lg:bg-transparent py-4 lg:py-0 z-50`}
                >
                    {[ 
                        { href: '/', label: language === 'en' ? 'Work' : 'ผลงาน' },
                        { href: '/about', label: language === 'en' ? 'About' : 'เกี่ยวกับฉัน'  },


                    ].map((navItem) => (
                        <Link
                            key={navItem.href}
                            href={navItem.href}
                            className={`block px-6 py-2 lg:p-0 z-50 ${
                                pathname === navItem.href ? styles.active : styles.nonSelected
                            } relative group`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {navItem.label}
                            {/* Span Animation for Non-Active Tabs */}
                            {pathname !== navItem.href && (
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
