import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const Box = styled.div`
  width: 10rem;
  height: 10rem;
  background: ${({ theme }) => theme.colors.primary};
`
