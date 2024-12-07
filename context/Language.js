'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    return useContext(LanguageContext);
};

const translations = {
    en: {
        portfolioTitle: 'MyPortfolio',
        description: (
            <>
                This website was created during my university years as I embarked on my journey 
                in Computer Engineering. It serves as a personal archive to store and showcase my work, projects, 
                and achievements. My passion for the tech world drives me to constantly learn and grow, 
                and this site will be a lifelong record of that progress. Thank you for visiting and exploring this simple journey.
            </>
        )
    },
    th: {
        portfolioTitle: 'ผลงานของฉัน',
        description: (
            <>
                เว็บไซต์นี้สร้างขึ้นในช่วงที่ผมเรียนอยู่มหาวิทยาลัย ณ คณะวิศวกรรมคอมพิวเตอร์ 
                มันคือเว็บไซต์ส่วนตัวสำหรับรวบรวมและแสดงผลงาน โปรเจ็กต์ และความสำเร็จต่างๆ ของผม 
                ผมหลงไหลในโลกเทคโนโลยี มันทำให้ผมไม่หยุดที่จะเรียนรู้และเติบโตไปกับมัน ที่เว็บไซต์แห่งนี้จะเป็นบันทึกการเดินทางตลอดชีวิตของผม 
                ขอบคุณที่แวะมาเยี่ยมชมเเรื่องราวที่แสนเรียบง่ายนี้
            </>
        )
    }
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
        <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};
