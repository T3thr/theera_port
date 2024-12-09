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
        ),
        shortcut: 'Shortcuts',
        home:'Home',
        about: 'About Me',
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
        ),
        shortcut: 'ทางลัด',
        home:'หน้าหลัก',
        about: 'เกี่ยวกับฉัน',
    }
};

const translations_content= {
    en: {
        portfolioTitle: 'My Portfolio',
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
        portfolioTitle: 'ผลงานของข้าพเจ้า',
        description: (
            <>
                เว็บไซต์สะสมผลงานของผมนั้น จะเน้นไปที่ผลงานภายในมหาวิทยาลัย 
                โดยเฉพาะวิชา Soft Skills 4 ซึ่งเป็นเป็นแรงบันดาลใจในการสร้างเว็บไซต์นี้ 
                นอกจากนี้ยังมีโปรเจ็กต์ส่วนตัว งานกลุ่ม และเกียรติบัตรที่ผมได้รับมาตลอดการเรียนมหาวิทยาลัย
                ผมขอขอบพระคุณอาจารย์ที่ให้คำแนะนำและมอบแรงบันดาลใจที่ช่วยให้ผมทำเว็บไซต์และงานต่างๆสำเร็จไปได้ด้วยดี
                เนื้อหาภายในเว็บไซต์นี้สะท้อนถึงตัวตนและความถนัดของผมผ่านผลงานต่างๆที่ผมได้ทำ ขณะเดียวกันผมก็ยังคงพัฒนาตัวเองให้ดียิ่งขึ้นไปอย่างไม่หยุดหย่อน
            </>
        )
    
    }
};

const translations_about = {
    en: {
        heroTitle: "Hello, ",
        myname:"I'm Theerapat Pooraya",
        heroDescription: "I'm passionate Computer Engineering student at Naresuan University, interested in web-app development and user-centered design concept. Nice to meet you..",
        skillsTitle: "My Skills",
        programmingSkills: "Programming Skills",
        toolsSkills: "Tools",
        contactTitle: "Contact Me",
        contactDescription: "Feel free to reach out via email ",
        contactButton: "Send an Email",
        connectTitle: "or follow me on social media!",
    },
    th: {
        heroTitle: "สวัสดีครับ",
        myname:"ผมชื่อ นายธีรภัทร ภู่ระย้า",
        heroDescription: "ผมเป็นนักศึกษาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยนเรศวร ขณะนี้สนใจเกี่ยวกับการพัฒนาเว็บแอปพลิเคชัน และหลักการการออกแบบที่เน้นผู้ใช้งานเป็นหลัก ยินดีที่ได้รู้จักครับ",
        skillsTitle: "ความสามารถ",
        programmingSkills: "ทักษะการเขียนโปรแกรม",
        toolsSkills: "เครื่องมือที่ใช้ได้",
        contactTitle: "ช่องทางติดต่อ",
        contactDescription: "สามารถติดต่อผมได้ทางอีเมล",
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
