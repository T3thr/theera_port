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
            image: '/images/ai-category.jpg',
            link: '/works/certificate',
        },
        {
            id: 2,
            title: 'NEXT.JS',
            description: 'Web-app Projects built using Next.js framework.',
            image: '/images/web-dev-category.jpg',
            link: '/works/dev',
        },
        {
            id: 3,
            title: 'Editor',
            description: 'Projects related to content editing tools.',
            image: '/images/mobile-category.jpg',
            link: '/works/editor',
        },
    ];

    const softSkills = [
        {
            id: 1,
            title: 'UX Design for Coffee Cup',
            description: 'Redesigning coffee cups to enhance usability.',
            icon: '🥤',
            link: '/works/uxcoffee',
        },
    ];

    return (
        <div className="min-h-screen py-10 transition-all duration-500 bg-var-background text-var-foreground">
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
            <nav                 className={`flex justify-center mb-16 space-x-6 sticky top-0 bg-opacity-80 backdrop-blur-md py-4 z-50 transition-shadow duration-300 shadow-lg ${
                    isDarkMode
                        ? 'shadow-[var(--shadow)]' // Apply shadow from the dark theme variable
                        : 'shadow-md' // Default shadow for light theme
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
                <div className="flex overflow-x-visible space-x-6 scrollbar-hide">
                    {categories.map((category) => (
                        <Link key={category.id} href={category.link}>
                            <div
                                className="flex-shrink-0 w-80 rounded-lg overflow-hidden shadow-md transform transition-transform hover:text-blue-500 hover:scale-105"
                                role="link"
                                aria-label={`View ${category.title}`}
                            >
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-6 bg-var-container min-h-32">
                                    <h3 className="text-xl font-bold mb-2 ">
                                        {category.title}
                                    </h3>
                                    <p className="text-var-muted h-auto">{category.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
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
                <div className="flex overflow-x-visible space-x-6 scrollbar-hide">
                    {softSkills.map((skill) => (
                        <Link key={skill.id} href={skill.link}>
                            <div
                                className="flex-shrink-0 w-80 flex items-center space-x-4 p-6 rounded-lg shadow-md transform transition-transform hover:text-blue-500 hover:scale-105 bg-var-container"
                                role="link"
                                aria-label={`View details for ${skill.title}`}
                            >
                                <div className="text-4xl">{skill.icon}</div>
                                <div>
                                    <h3 className="text-xl font-bold ">
                                        {skill.title}
                                    </h3>
                                    <p className="text-var-muted">{skill.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
