import React, { FC, useMemo, useState } from "react";
import {
  AppTheme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from "./ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme) || "light";

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<AppTheme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
