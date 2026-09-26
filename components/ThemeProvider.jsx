'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

// Runs before first paint (see layout.js) so the saved or system theme applies without a flash.
export const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t;}catch(e){}})();`;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(next);
      root.style.colorScheme = next;
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
