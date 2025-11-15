import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage and update document class
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark ? {
      // Dark Mode Colors
      primary: {
        from: '#06b6d4', // Cyan
        to: '#3b82f6',   // Blue
      },
      secondary: '#0ea5e9', // Sky Blue
      accent: '#22d3ee',    // Bright Cyan
      background: {
        primary: '#0f172a',   // Slate Dark
        secondary: '#1e293b', // Lighter Slate
        card: 'rgba(255, 255, 255, 0.05)',
      },
      text: {
        primary: '#ffffff',
        secondary: '#cbd5e1',
        muted: '#64748b',
      },
      border: 'rgba(255, 255, 255, 0.1)',
    } : {
      // Light Mode Colors
      primary: {
        from: '#06b6d4', // Cyan
        to: '#3b82f6',   // Blue
      },
      secondary: '#0ea5e9', // Sky Blue
      accent: '#0891b2',    // Darker Cyan for light mode
      background: {
        primary: '#ffffff',   // White
        secondary: '#f8fafc', // Very Light Slate
        card: 'rgba(15, 23, 42, 0.03)',
      },
      text: {
        primary: '#0f172a',
        secondary: '#334155',
        muted: '#64748b',
      },
      border: 'rgba(15, 23, 42, 0.1)',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
