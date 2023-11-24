import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import PageError from 'widgets/PageError'

const meta = {
  title: 'widgets/PageError',
  component: PageError
} satisfies Meta<typeof PageError>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {}
}

Dark.decorators = [ThemeDecorator('dark')]
