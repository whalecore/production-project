import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Navbar } from 'widgets/Navbar'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar
} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

export const Dark: Story = {
  args: {}
}

Dark.decorators = [ThemeDecorator('dark')]

// export const Clear: Story = {
//   args: {
//     children: 'Text',
//     theme: ThemeButton.CLEAR
//   }
// }
//
// export const Outline: Story = {
//   args: {
//     children: 'Text',
//     theme: ThemeButton.OUTLINE
//   }
// }
//
// export const OutlineDark: Story = {
//   args: {
//     children: 'Text',
//     theme: ThemeButton.OUTLINE
//   }
// }
//
// OutlineDark.decorators = [ThemeDecorator('dark')]
