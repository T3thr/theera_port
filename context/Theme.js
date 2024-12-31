// context/Theme.js
'use client';

import { createContext, useContext, useEffect, useState } from 'react';


const ThemeContext = createContext();

export function ThemeProvider({ children, initialTheme }) {
    const [isDarkMode, setIsDarkMode] = useState(initialTheme === 'dark');

    // Update the theme in cookies and on the <html> element
    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            document.cookie = 'theme=dark; path=/; max-age=31536000';
        } else {
            root.classList.remove('dark');
            document.cookie = 'theme=light; path=/; max-age=31536000';
        }
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
