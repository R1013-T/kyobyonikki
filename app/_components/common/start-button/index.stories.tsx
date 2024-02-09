import type { Meta, StoryObj } from '@storybook/react'
import StartButton from '.'

const meta = {
  title: 'StartButton',
  component: StartButton,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<typeof StartButton>

export default meta

type Story = StoryObj<typeof StartButton>

export const Default: Story = {}
