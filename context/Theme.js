'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { setCookie, getCookie } from 'cookies-next';

const ThemeContext = createContext();

export function ThemeProvider({ children, initialTheme }) {
    const [isDarkMode, setIsDarkMode] = useState(initialTheme === 'dark');

    // Check cookies for saved theme preference if no initialTheme is passed
    useEffect(() => {
        if (!initialTheme) {
            const savedTheme = getCookie('theme');
            if (savedTheme === 'dark') {
                setIsDarkMode(true);
            } else {
                setIsDarkMode(false);
            }
        }
    }, [initialTheme]);

    // Update cookies and body class when theme changes
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
            setCookie('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            setCookie('theme', 'light');
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
