import React from 'react'

import css from '@styled-system/css'
import {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle
} from 'styled-components'

const GlobalStyles = () => {
  const GlobalStyle = createGlobalStyle`
    html {
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;

      ${css({
        bg: 'background',
        color: 'textPrimary'
      })}
    }
  `

  return <GlobalStyle />
}

GlobalStyles.displayName = 'GlobalStyles'

const ThemeProvider = ({ children, theme }) => (
  <StyledComponentsThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </StyledComponentsThemeProvider>
)

ThemeProvider.displayName = 'ThemeProvider'
export default ThemeProvider
