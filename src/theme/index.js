import { useMemo, useState, createContext, useContext } from 'react';
import darkTheme from './darkThemeOptions';
import lightTheme from './lightThemeOptions';

const ThemeModeContext = createContext();

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState('dark'); // Comienza en modo oscuro

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };
  
  const value = useMemo(
    () => ({
      mode,
      toggleTheme,
      theme: mode === 'dark' ? darkTheme : lightTheme,
    }),
    [mode]
  );

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
}

export function useThemeMode() {
  return useContext(ThemeModeContext);
}
