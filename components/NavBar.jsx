'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();

    const styles = {
        active: 'text-blue-600 font-bold border-b-4 border-blue-600 transition-all duration-300',
        nonSelected: 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-all duration-200',
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    <Link href="/">
                        <span>MyPortfolio</span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link
                        href="/"
                        className={pathname === '/' ? styles.active : styles.nonSelected}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={pathname === '/about' ? styles.active : styles.nonSelected}
                    >
                        About
                    </Link>
                    <Link
                        href="/portfolio"
                        className={pathname === '/portfolio' ? styles.active : styles.nonSelected}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/blog"
                        className={pathname === '/blog' ? styles.active : styles.nonSelected}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/resume"
                        className={pathname === '/resume' ? styles.active : styles.nonSelected}
                    >
                        Resume
                    </Link>
                    <Link
                        href="/contact"
                        className={pathname === '/contact' ? styles.active : styles.nonSelected}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
