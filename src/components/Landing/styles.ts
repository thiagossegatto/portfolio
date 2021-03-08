import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.mainBg};

    svg {
      stroke-dasharray: 800;
      animation: dash 2s linear forwards;
      stroke-dashoffset: 0;
    }

    @keyframes dash {
      from {
        stroke-dashoffset: 800;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
  `}
`
