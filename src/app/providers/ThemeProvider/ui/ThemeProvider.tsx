import React, { type FC, useMemo, useState } from 'react'
import {
  type AppTheme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext
} from 'app/providers/ThemeProvider/lib/ThemeContext'

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme) || 'light'

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<AppTheme>(defaultTheme)

  const defaultProps = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
