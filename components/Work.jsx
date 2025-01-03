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
            title: 'Certificates',
            description: 'Showcase of my earned certifications.',
            image: 'https://res.cloudinary.com/dr0ao4k6a/image/upload/v1733686707/LINE_ALBUM_%E0%B9%81%E0%B8%A1%E0%B8%A7__241209_1_ws6egw.jpg',
            link: '/works/certificate',
        },
        {
            id: 2,
            title: 'NEXT.JS',
            description: 'Web-app Projects built using Next.js framework.',
            image: 'https://res.cloudinary.com/dr0ao4k6a/image/upload/v1733686707/LINE_ALBUM_%E0%B9%81%E0%B8%A1%E0%B8%A7__241209_1_ws6egw.jpg',
            link: '/works/dev',
        },
        {
            id: 3,
            title: 'Editor',
            description: 'Projects related to content editing tools.',
            image: 'https://res.cloudinary.com/dr0ao4k6a/image/upload/v1733686707/LINE_ALBUM_%E0%B9%81%E0%B8%A1%E0%B8%A7__241209_1_ws6egw.jpg',
            link: '/works/editor',
        },
    ];

    const softSkills = [
        {
            id: 1,
            title: language === 'en' ? 'UX Design for Coffee Cup' : 'ออกแบบ ux สำหรับแก้วกาแฟ',
            description: 'Redesigning coffee cups to enhance usability.',
            icon: '🥤',
            link: '/works/uxcoffee',
        },
    ];

    return (
        <div className="min-h-auto py-10 transition-all duration-500 bg-var-background text-var-foreground">
            {/* Header Section */}
            <header className="text-center mt-12 mb-12 justify-center px-6">
                <h1 className="text-5xl font-extrabold tracking-tight mb-4">
                    {translations_content[language].portfolioTitle}
                </h1>
                <p className="text-lg max-w-4xl w-full mx-auto">
                    {translations_content[language].description}
                </p>
            </header>

            {/* Navigation Bar */}
            <nav className={`flex justify-center mb-32 space-x-6 sticky top-0 bg-opacity-80 backdrop-blur-md py-4 z-50 transition-shadow duration-300 shadow-lg ${
                    isDarkMode
                        ? 'shadow-[var(--shadow)]'
                        : 'shadow-md' 
                }`}>
                <button
                    className="text-lg font-medium hover:text-blue-500 transition duration-300"
                    onClick={() =>
                        document.getElementById('categories').scrollIntoView({ behavior: 'smooth' })
                    }
                >
                    Categories
                </button>
                <button
                    className="text-lg font-medium hover:text-blue-500 transition duration-300"
                    onClick={() =>
                        document.getElementById('soft-skills').scrollIntoView({ behavior: 'smooth' })
                    }
                >
                    Soft Skills
                </button>
            </nav>

            {/* Categories Section */}
            <section id="categories" className="mb-16 px-6 lg:px-12">
                <h2 className="text-3xl font-bold mb-6 text-center border-b-4 border-blue-500 inline-block pb-2">
                    Categories
                </h2>
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-6">
                        {categories.map((category) => (
                            <Link key={category.id} href={category.link}>
                                <div
                                    className="ml-6 mt-6 mb-6 w-80 flex-shrink-0 rounded-lg overflow-hidden shadow-md transform transition-transform hover:text-blue-500 hover:scale-105 bg-var-container"
                                    role="link"
                                    aria-label={`View ${category.title}`}
                                >
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="p-6 min-h-32">
                                        <h3 className="text-xl font-bold mb-2 ">
                                            {category.title}
                                        </h3>
                                        <p className="text-var-muted">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Separator */}
            <div className="my-16 text-center">
                <div className="h-1 w-3/4 mx-auto rounded-full bg-var-divider" />
            </div>

            {/* Soft Skills Section */}
            <section id="soft-skills" className="mb-16 px-6 lg:px-12">
                <h2 className="text-3xl font-bold mb-6 text-center border-b-4 border-blue-500 inline-block pb-2">
                    305202 Soft Skills 4
                </h2>
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-6">
                        {softSkills.map((skill) => (
                            <Link key={skill.id} href={skill.link}>
                                <div
                                    className="ml-6 mt-6 mb-6 w-80 flex-shrink-0 flex items-center space-x-4 p-6 rounded-lg shadow-md transform transition-transform hover:text-blue-500 hover:scale-105 bg-var-container"
                                    role="link"
                                    aria-label={`View details for ${skill.title}`}
                                >
                                    <div className="text-4xl">{skill.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold ">
                                            {skill.title}
                                        </h3>
                                        <p className="text-var-muted">
                                            {skill.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
