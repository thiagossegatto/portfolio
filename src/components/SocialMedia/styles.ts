import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 0;
    left: ${theme.spacings.large};
    align-items: center;
    opacity: 0;
    animation: showMedias 2s 2s forwards;

    @keyframes showMedias {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    ::after {
      content: '';
      height: 120px;
      width: 1px;
      background-color: ${theme.colors.white};
    }
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    width: 25px;
    height: 25px;
    margin-bottom: ${theme.spacings.xsmall};
    color: ${theme.colors.white};
  `}
`
