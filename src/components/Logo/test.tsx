import { screen, render } from 'utils/test-utils'

import Logo from './'

describe('<Logo />', () => {
  it('should render logo', () => {
    const { container } = render(<Logo />, {})

    expect(
      screen.getByRole('img', { name: /segatto.dev/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
