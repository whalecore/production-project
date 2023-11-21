import { useTheme } from 'app/providers/ThemeProvider'
import React from 'react'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui'

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === 'light' ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}

export default ThemeSwitcher
