'use client';

import React from 'react';
import { useTheme } from '@/context/Theme';
import { useLanguage } from '@/context/Language';
import {
    FaGithub,
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaLinkedin,
    FaReact,
    FaNodeJs,
    FaDatabase,
} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiNextdotjs,
    SiMongodb,
    SiJavascript,
    SiAdobepremierepro,
    SiAdobephotoshop,
    SiAdobeaftereffects,
} from 'react-icons/si';

export default function AboutPage() {
    const { isDarkMode } = useTheme();
    const { language, translations_about } = useLanguage();

    const text = translations_about[language];

    const programmingSkills = [
        { 
            id: 1, 
            name: 'JavaScript' , 
            icon: <SiJavascript className="text-yellow-500" />, 
            description: language === 'en' 
                ? 'Advanced knowledge of modern JavaScript and frameworks.' 
                : 'ความรู้ขั้นสูงเกี่ยวกับจาวาสคริปต์สมัยใหม่และเฟรมเวิร์กต่าง ๆ' 
        },
        { 
            id: 2, 
            name: 'React.js' , 
            icon: <FaReact className="text-blue-500" />, 
            description: language === 'en' 
                ? 'Building interactive UIs with React and React Native.' 
                : 'สร้าง UI ที่โต้ตอบได้ด้วย React และ React Native' 
        },
        { 
            id: 3, 
            name: 'Next.js', 
            icon: <SiNextdotjs className="text-black" />, 
            description: language === 'en' 
                ? 'Expertise in building responsive web applications with Next.js.' 
                : 'ถนัดออกแบบเว็บไซต์ responsive ด้วย Next.js' 
        },
        { 
            id: 4, 
            name: 'Node.js' , 
            icon: <FaNodeJs className="text-green-500" />, 
            description: language === 'en' 
                ? 'Developing and build a API with Node.js.' 
                : 'พัฒนาระบบและสร้าง API ด้วย Node.js' 
        },
        { 
            id: 5, 
            name: 'MongoDB' , 
            icon: <SiMongodb className="text-green-600" />, 
            description: language === 'en' 
                ? 'Managing and integrating data with MongoDB.' 
                : 'จัดการข้อมูลหลังบ้านด้วย MongoDB ' 
        },
    ];

    const toolsSkills = [
        { 
            id: 1, 
            name: 'Tailwind CSS' , 
            icon: <SiTailwindcss className="text-blue-400" />, 
            description: language === 'en' 
                ? 'Creating stunning, responsive designs with Tailwind CSS.' 
                : 'ออกแบบหน้าเว็บด้วย Tailwind CSS' 
        },
        { 
            id: 2, 
            name: 'Git & GitHub' , 
            icon: <FaGithub className="text-gray-700" />, 
            description: language === 'en' 
                ? 'Version control and collaboration using Git and GitHub.' 
                : 'ควบคุมเวอร์ชันและทำงานร่วมกันด้วย Git และ GitHub' 
        },
        { 
            id: 3, 
            name: 'Database Management' , 
            icon: <FaDatabase className="text-orange-400" />, 
            description: language === 'en' 
                ? 'Efficient database design and management.' 
                : 'ออกแบบและจัดการฐานข้อมูลอย่างมีประสิทธิภาพ' 
        },
        { 
            id: 4, 
            name: 'Adobe Premiere Pro' , 
            icon: <SiAdobepremierepro className="text-red-500" />, 
            description: language === 'en' 
                ? 'Creating and editing high-quality video content such as short film ' 
                : 'สามารถตัดต่อวิดีโอคุณภาพสูง เช่น ตัดต่อหนังสั้น' 
        },
        { 
            id: 5, 
            name: 'Adobe Photoshop' , 
            icon: <SiAdobephotoshop className="text-blue-500" />, 
            description: language === 'en' 
                ? 'Designing and enhancing visual content with Photoshop.' 
                : 'ออกแบบและแต่งภาพด้วย Photoshop' 
        },
        { 
            id: 6, 
            name: 'Adobe After Effects' , 
            icon: <SiAdobeaftereffects className="text-purple-500" />, 
            description: language === 'en' 
                ? 'Crafting stunning animations and visual effects from footage.' 
                : 'สามารถสร้างแอนิเมชันและเอฟเฟกต์สามมิติจากวิดีโอฟุตเทจ' 
        },
    ];
    
    const socialLinks = [
        { id: 1, name: 'GitHub', url: 'https://github.com/T3thr/', icon: <FaGithub /> },
        { id: 2, name: 'Instagram', url: 'https://www.instagram.com/3._rapat/', icon: <FaInstagram /> },
        { id: 3, name: 'Facebook', url: 'https://www.facebook.com/t3rapat/', icon: <FaFacebook /> },
        { id: 4, name: 'YouTube', url: 'https://www.youtube.com/@TheerapatPo', icon: <FaYoutube /> },
    ];

    return (
        <div className="min-h-screen py-10 transition-all duration-500 bg-var-background text-var-foreground">
            {/* Hero Section */}
            <section className="mb-16 px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl font-extrabold mb-4">{text.heroTitle}</h1>
                    <h1 className="text-4xl text-blue-700 font-extrabold mb-4">{text.myname}</h1>
                    <p className="text-lg leading-relaxed">{text.heroDescription}</p>
                </div>
                <div className="flex-1">
                    <img
                        src="/image/profile.jpg"
                        alt="Theerapat Pooraya"
                        className="w-96 h-80px rounded-full mx-auto border-4 border-blue-500 shadow-lg"
                    />
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-16 px-6 lg:px-12">
                <h2 className="text-3xl font-bold mb-6 text-center border-b-4 border-blue-500 inline-block pb-2">
                    {text.skillsTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">{text.programmingSkills}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {programmingSkills.map((skill) => (
                                <div key={skill.id} className="p-6 bg-var-container rounded-lg shadow-md flex items-center gap-4">
                                    <div className="text-3xl">{skill.icon}</div>
                                    <div>
                                        <h4 className="text-xl font-bold">{skill.name}</h4>
                                        <p className="text-var-muted text-sm">{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">{text.toolsSkills}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {toolsSkills.map((skill) => (
                                <div key={skill.id} className="p-6 bg-var-container rounded-lg shadow-md flex items-center gap-4">
                                    <div className="text-3xl">{skill.icon}</div>
                                    <div>
                                        <h4 className="text-xl font-bold">{skill.name}</h4>
                                        <p className="text-var-muted text-sm">{skill.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="mb-16 px-6 lg:px-12">
                <h2 className="text-3xl font-bold mb-6 text-center border-b-4 border-blue-500 inline-block pb-2">
                    {text.contactTitle}
                </h2>
                <div className="text-center mb-8">
                    <p className="text-lg mb-4 mt-8">{text.contactDescription}</p>
                    <a
                        href="theerapatpo66@nu.ac.th"
                        className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                    >
                        {text.contactButton}
                    </a>
                </div>

                {/* Social Links Section */}
                <section className="mb-16 px-6 lg:px-12 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-center inline-block pb-2">{text.connectTitle}</h2>
                    <div className="flex justify-center gap-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-blue-500 hover:text-blue-700 transition duration-300"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </section>
            </section>
        </div>
    );
}
