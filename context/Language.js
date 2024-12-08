'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    return useContext(LanguageContext);
};

const translations_footer = {
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
        portfolioTitle: 'MyPortfolio',
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

const translations_content= {
    en: {
        portfolioTitle: 'My Work Showcase',
        description: (
            <>
                Most of the work featured here comes from my time at university,  
                It includes projects from subject 305202 Soft Skills 4, along with some certificates and personal work I’ve done along the way. 
                These experiences have helped me grow both technically and personally.
            </>
        )
    },
    th: {
        portfolioTitle: 'ผลงานของฉัน',
        description: (
            <>
                ผลงานส่วนใหญ่ของผมมาจากช่วงเรียนมหาวิทยาลัย ซึ่งประกอบไปด้วยโปรเจคในรายวิชา 305202 Soft Skills 4 
                ทั้งยังมีเเกียรติบัตรและงานส่วนตัวของผมที่ทำระหว่างเรียนไปด้วย
                ผลงานเหล่านี้ช่วยส่งเสริมทักษะทางเทคนิคและทักษะส่วนตัว
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
        <LanguageContext.Provider value={{ language, changeLanguage, translations_footer ,translations_content }}>
            {children}
        </LanguageContext.Provider>
    );
};
