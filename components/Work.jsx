'use client';

import React from 'react';
import { useTheme } from '@/context/Theme';
import { useLanguage } from '@/context/Language';
import Link from 'next/link';

export default function WorkPage() {
    const { isDarkMode } = useTheme();
    const { language, translations_content } = useLanguage();

    const categories = [
        {
            id: 1,
            title: 'Cerificattes',
            description: '',
            image: '/images/ai-category.jpg',
            link: '/works/certificate',
        },
        {
            id: 2,
            title: 'NEXT.JS',
            description: '',
            image: '/images/web-dev-category.jpg',
            link: '/works/dev',
        },
        {
            id: 3,
            title: 'Editor',
            description: '',
            image: '/images/mobile-category.jpg',
            link: '/works/editor',
        },
    ];

    const softSkills = [
        {
            id: 1,
            title: 'UX Design for Coffee Cup',
            description: 'This is a personal work to redesign or improve the current coffee cup to enhance its user experience. ',
            icon: '🥤',
            link: '/works/uxcoffee',
        },

    ];

    return (
        <div
            className={`min-h-screen px-6 lg:px-12 py-10 transition-all duration-500 ${
                isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
            }`}
        >
            {/* Header Section */}
            <header className="text-center mt-12 mb-12">
                <h1 className="text-5xl font-extrabold tracking-tight mb-4">
                    {translations_content[language].portfolioTitle}
                </h1>
                <p className="text-lg max-w-4xl w-full mx-auto">
                    {translations_content[language].description}
                </p>
            </header>

            {/* Navigation Bar */}
            <nav className="flex justify-center mb-96 space-x-6 sticky top-0 bg-opacity-80 backdrop-blur-md py-4 z-50">
                <button
                    className="text-lg font-medium hover:text-blue-500"
                    onClick={() =>
                        document.getElementById('categories').scrollIntoView({ behavior: 'smooth' })
                    }
                >
                    Categories
                </button>
                <button
                    className="text-lg font-medium hover:text-blue-500"
                    onClick={() =>
                        document.getElementById('soft-skills').scrollIntoView({ behavior: 'smooth' })
                    }
                >
                    Soft Skills
                </button>
            </nav>

            {/* Categories Section */}
            <section id="categories" className="mb-24">
                <h2 className="text-3xl font-bold mb-6 text-center">Categories</h2>
                <div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-x-scroll scrollbar-hide"
                    style={{ display: 'flex', flexWrap: 'nowrap' }}
                >
                    {categories.map((category) => (
                        <Link key={category.id} href={category.link} className="flex-shrink-0 w-80">
                            <div
                                className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                            >

                                <div
                                    className={`p-6 ${
                                        isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
                                    }`}
                                >
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500">
                                        {category.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Soft Skills Section */}
            <section id="soft-skills" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-center">305202 Soft Skills 4</h2>
                <div
                    className="flex items-center overflow-x-scroll scrollbar-hide space-x-4"
                    style={{ display: 'flex', flexWrap: 'nowrap' }}
                >
                    {softSkills.map((skill) => (
                        <Link key={skill.id} href={skill.link}>
                            <div
                                className="flex-shrink-0 w-80 flex items-center space-x-4 p-6 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                                style={{
                                    backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb',
                                }}
                            >
                                <div className="text-4xl">{skill.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold group-hover:text-blue-500">
                                        {skill.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {skill.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
