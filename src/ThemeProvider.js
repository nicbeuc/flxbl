import { useState, useEffect, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}) {
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem('darkMode') !== undefined) {
      return localStorage.getItem('darkMode') === 'true';
    } else {
      return true;
    }
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  const value = {
    darkMode,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };
