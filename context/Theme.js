'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check cookies for saved theme preference
    useEffect(() => {
        const savedTheme = Cookies.get('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);

    // Update cookies and body class when theme changes
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
            Cookies.set('theme', 'dark', { expires: 30 });
        } else {
            document.body.classList.remove('dark');
            Cookies.set('theme', 'light', { expires: 30 });
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
