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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.div<LogoProps>`
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

export const Slogan = styled.h1`
  ${({ theme }) => css`
    border-right: 2px solid transparent;
    color: ${theme.colors.white};
    white-space: nowrap;
    font-size: 3rem;
    animation: blinkCursor 500ms 11 normal, typing 4s steps(50) 1s normal both;
    overflow: hidden;

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 38rem;
      }
    }

    @keyframes blinkCursor {
      0% {
        border-right-color: rgba(255, 255, 255, 0.75);
      }
      50% {
        border-right-color: transparent;
      }
    }
  `}
`
