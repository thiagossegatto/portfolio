import theme from 'styles/theme'
import { screen, render } from 'utils/test-utils'

import Landing from './'

describe('<Landing />', () => {
  it('should render the heading', () => {
    render(<Landing />, {})

    expect(
      screen.getByRole('img', { name: /segatto.dev/i }).parentElement
        ?.parentElement?.parentElement
    ).toHaveStyle({ backgroundColor: theme.colors.mainBg })
  })
})
