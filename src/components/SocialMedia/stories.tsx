import { Meta, Story } from '@storybook/react/types-6-0'

import SocialMedia, { SocialMediaProps } from '.'
import mock from './mock'

export default {
  title: 'SocialMedia',
  component: SocialMedia,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<SocialMediaProps> = (args) => (
  <SocialMedia {...args} />
)

Default.args = {
  medias: mock
}
