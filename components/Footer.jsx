// components/Footer.jsx
'use client';

import React from 'react';
import Link from 'next/link';
import ChangeLanguage from './ChangeLanguage'; // Import ChangeLanguage component
import { useLanguage } from '@/context/language';  // Import the language hook

export default function Footer() {
    const { language, translations } = useLanguage();  // Access the language and translations

    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-16 mt-20">
            <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left">
                {/* Top Section: Brand and Description */}
                <div className="lg:flex lg:justify-between mb-12">
                    {/* Left Side: Brand Name */}
                    <div className="mb-8 lg:mb-0">
                        <h3 className="text-4xl font-extrabold text-blue-500 tracking-wider">
                            {translations[language].portfolioTitle} {/* Dynamically render title */}
                        </h3>
                        <p className="text-gray-400 mt-2 max-w-lg mx-auto lg:mx-0">
                            {translations[language].description} {/* Dynamically render description */}
                        </p>
                    </div>

                    {/* Right Side: Quick Links and Socials */}
                    <div className="lg:flex lg:space-x-16">
                        {/* Quick Links */}
                        <div className="mb-8 lg:mb-0">
                            <h4 className="text-xl font-semibold text-gray-300 mb-4">Quick Links</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <h4 className="text-xl font-semibold text-gray-300 mb-4">Follow Me</h4>
                            <div className="flex justify-center lg:justify-start space-x-8 mt-4">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-all duration-300">
                                    <i className="fab fa-twitter fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright and Legal Links */}
                <div className="border-t border-gray-600 pt-8 mt-12">
                    <div className="flex flex-col items-center lg:flex-row justify-between space-y-4 lg:space-y-0">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Theera-Port. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link 
                                href="https://ecpe.nu.ac.th/" 
                                className="text-gray-400 hover:text-blue-500 transition-all duration-300" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Faculty of Engineering
                            </Link>
                            <Link 
                                href="https://www.nu.ac.th/" 
                                className="text-gray-400 hover:text-blue-500 transition-all duration-300" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Naresuan University
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    {/* Language Toggle Button */}
                    <ChangeLanguage /> {/* Add ChangeLanguage button here */}
                </div>
            </div>
        </footer>
    );
}
