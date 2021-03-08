import { Meta, Story } from '@storybook/react/types-6-0'

import Landing from '.'

export default {
  title: 'Landing',
  component: Landing,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = (args) => <Landing {...args} />
