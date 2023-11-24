import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { AppLink, AppLinkTheme } from 'shared/ui'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '#',
    children: 'APP LINK'
  }
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  }
}

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  }
}

PrimaryDark.decorators = [ThemeDecorator('dark')]

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  }
}

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  }
}

SecondaryDark.decorators = [ThemeDecorator('dark')]
