import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}) {
  const [darkMode, setDarkMode] = useState(true);

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
