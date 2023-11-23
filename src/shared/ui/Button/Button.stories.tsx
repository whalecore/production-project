import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import Button, { ThemeButton } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    // @ts-ignore
    backgroundColor: { control: 'color' }
  }
} satisfies ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'TEXT'
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Button',
  theme: ThemeButton.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Button',
  theme: ThemeButton.OUTLINE
}

// import type { Meta, StoryObj } from '@storybook/react'
//
// import { Button, ThemeButton } from 'shared/ui'
//
// import 'app/styles/index.scss'
//
// const meta = {
//   title: 'shared/Button',
//   component: Button,
//   parameters: {
//     layout: 'centered'
//   }
// } satisfies Meta<typeof Button>
//
// export default meta
//
// type Story = StoryObj<typeof meta>
//
// export const Primary: Story = {
//   args: {
//     children: 'Text'
//   }
// }
//
// export const Clear: Story = {
//   args: {
//     children: 'Text',
//     theme: ThemeButton.CLEAR
//   }
// }
// export const Outline: Story = {
//   args: {
//     children: 'Text',
//     theme: ThemeButton.OUTLINE
//   }
// }
