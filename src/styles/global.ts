import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: ${theme.font.family.primary};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }

    ::-webkit-scrollbar-track {
      background-color: ${theme.colors.gray};
    }
    ::-webkit-scrollbar {
      width: 0.5rem;
      background: ${theme.colors.gray};
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5rem;
      background: ${theme.colors.primary};
      opacity: 0.9;
    }

    html,
    body,
    #__next {
      height: 100vh;
      width: 100vw;
    }

    html {
      font-size: 62.5%;
    }
  `}
`
