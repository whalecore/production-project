import { useCallback, useContext } from "react";
import {
  AppTheme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: AppTheme;
}

export function useTheme(): UseThemeResult {
  const { setTheme, theme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }, [setTheme]);

  return { theme, toggleTheme };
}
