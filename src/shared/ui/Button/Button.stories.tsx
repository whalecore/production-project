import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Button, ButtonTheme } from 'shared/ui'
import { ButtonSize } from 'shared/ui/Button/Button'

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Texts'
  }
}

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR
  }
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  }
}

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  }
}

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  }
}

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  }
}

OutlineDark.decorators = [ThemeDecorator('dark')]

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND
  }
}

export const BackgroundThemeInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
  }
}
export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  }
}
export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  }
}
