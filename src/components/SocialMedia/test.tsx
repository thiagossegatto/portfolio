import { screen, render } from 'utils/test-utils'

import SocialMedia from './'
import mock from './mock'

describe('<SocialMedia />', () => {
  it('should render the heading', () => {
    render(<SocialMedia medias={mock} />, {})

    expect(screen.getByRole('link', { name: 'Linkedin' })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/thiagosegatto'
    )

    // expect(container.firstChild).toMatchSnapshot()
  })
})
