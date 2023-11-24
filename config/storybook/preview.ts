import 'app/styles/index.scss'
import { type Preview } from '@storybook/react'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    ThemeDecorator('light'),
    RouterDecorator
  ]
}

export default preview
