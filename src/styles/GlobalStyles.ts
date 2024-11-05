// GlobalStyles.js
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.primary};
    line-height: 1.6;
  }

  #root {
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.header};
    color: ${({ theme }) => theme.colors.primary};
  }

  .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
  }
  .logo:hover {
      filter: drop-shadow(0 0 2em ${({ theme }) => theme.colors.accent});
  }
`

export default GlobalStyles
