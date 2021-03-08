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
    font-size: 3rem;
    opacity: 0;
    animation: showSlogan 1s 2s ease-in-out forwards;

    @keyframes showSlogan {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    /* animation: blinkCursor 500ms 9 normal, typing 3s steps(50) 1s normal both;
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
    } */
  `}
`
