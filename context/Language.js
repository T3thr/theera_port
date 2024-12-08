'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    return useContext(LanguageContext);
};

const translations_footer = {
    en: {
        portfolioTitle: 'THEERAPORT',
        description: (
            <>
                This website was created during my time at Naresuan University in the Faculty of Computer Engineering. 
                It serves as a personal archive to store and showcase my work, projects, 
                and achievements. This site will be a lifelong record of that progress. 
                Thank you for visiting and exploring this simple journey.
            </>
        )
    },
    th: {
        portfolioTitle: 'THEERAPORT',
        description: (
            <>
                เว็บไซต์นี้สร้างขึ้นในช่วงที่ผมเรียนอยู่มหาวิทยาลัยนเรศวร ณ คณะวิศวกรรมคอมพิวเตอร์ 
                มันคือเว็บไซต์ส่วนตัวสำหรับรวบรวมและแสดงผลงาน โปรเจ็กต์ และความสำเร็จต่างๆ ของผม 
                ที่เว็บไซต์แห่งนี้จะเป็นบันทึกการเดินทางตลอดชีวิตของผม 
                ขอบคุณที่แวะมาเยี่ยมชมการเดินทางที่แสนธรรมดานี้
            </>
        )
    }
};

const translations_content= {
    en: {
        portfolioTitle: 'My Work Showcase',
        description: (
            <>
                This portfolio website highlights my university work, with a focus on the Soft Skills 4 subject 
                that inspired this website. It also includes personal projects, group work, 
                and certifications I’ve earned throughout my time at university. 
                I’m grateful to my teacher for the guidance and inspiration that has helped me shape this project,
                The content of this website reflects who I am through the progress 
                I’ve made, as I continue working to become a better version of myself.
            </>
        )
    },
    th: {
        portfolioTitle: 'ผลงานของฉัน',
        description: (
            <>
                เว็บไซต์สะสมผลงานแห่งนี้จะเน้นไปที่ผลงานในมหาวิทยาลัยของผม 
                โดยเฉพาะวิชา Soft Skills 4 ที่เป็นแรงบันดาลใจให้กับเว็บไซต์นี้ 
                นอกจากนี้ยังมีโปรเจ็กต์ส่วนตัว งานกลุ่ม และเกียรติบัตรที่ผมได้รับมาตลอดการเรียนมหาวิทยาลัย
                ผมขอขอบพระคุณอาจารย์ที่ให้คำแนะนำและมอบแรงบันดาลใจที่ช่วยให้ผมทำเว็บไซต์นี้สำเร็จไปด้วยดี
                เนื้อหาในเว็บไซต์นี้นี้สะท้อนถึงตัวตนและความถนัดของผมผ่านผลงานต่างๆที่ผมทำ ทั้งนี้ผมยังคงพัฒนาตัวเองให้ดียิ่งขึ้นอย่างสม่ำเสมอ
            </>
        )
    
    }
};

const translations_about = {
    en: {
        heroTitle: "Hello, ",
        myname:"I'm Theerapat Pooraya",
        heroDescription: "I'm passionate Computer Engineering student of Naresuan University specializing in web development and user-centered design concept. Nice to meet you..",
        skillsTitle: "My Skills",
        programmingSkills: "Programming Skills",
        toolsSkills: "Tools Skills",
        contactTitle: "Contact Me",
        contactDescription: "Feel free to reach out via email or connect on social media!",
        contactButton: "Send an Email",
        connectTitle: "or follow me on",
    },
    th: {
        heroTitle: "สวัสดีครับ",
        myname:"ผมชื่อ นายธีรภัทร ภู่ระย้า",
        heroDescription: "ผมเป็นนักศึกษาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยนเรศวรที่ขณะนี้สนใจในเว็บแอปพลิเคชัน และหลักการการออกแบบที่เน้นผู้ใช้งานเป็นหลัก ยินดีที่ได้รู้จักครับ",
        skillsTitle: "ความสามารถ",
        programmingSkills: "ทักษะการเขียนโปรแกรม",
        toolsSkills: "เครื่องมือที่ใช้ได้",
        contactTitle: "ช่องทางติดต่อ",
        contactDescription: "สามารถติดต่อผมได้ทางอีเมลหรือโซเชียลมีเดีย",
        contactButton: "อีเมล",
        connectTitle: "หรือแอดช่องทางข้างล่างนี้",
    },
};


export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [isClient, setIsClient] = useState(false); // Track whether we're on the client-side

    useEffect(() => {
        // Ensure that we are on the client side before accessing localStorage
        setIsClient(true);

        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    useEffect(() => {
        // Only update localStorage on the client-side
        if (isClient) {
            localStorage.setItem('language', language);
        }
    }, [language, isClient]);

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, translations_footer ,translations_content ,translations_about }}>
            {children}
        </LanguageContext.Provider>
    );
};
