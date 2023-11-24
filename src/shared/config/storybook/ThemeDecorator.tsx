import { type StoryFn } from '@storybook/react'
import { type AppTheme } from 'app/providers/ThemeProvider/lib/ThemeContext'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: AppTheme) => (Story: StoryFn) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  )
}
