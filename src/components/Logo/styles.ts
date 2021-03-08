import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 15rem;
    height: 8rem;
  `,

  large: () => css`
    width: 18rem;
    height: 20rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size]}

    svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  `}
`
