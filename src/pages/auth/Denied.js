import React from 'react'

import css from '@styled-system/css'
import { createGlobalStyle } from 'styled-components'

const loadingUrl =
  'https://66.media.tumblr.com/tumblr_m2ds4zGJe01qg6rkio1_500.gif'

const DeniedGlobalStyle = () => {
  const GlobalStyle = createGlobalStyle`
    body {
      ${css({
        height: 'full',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${loadingUrl})`
      })}
    }
  `

  return <GlobalStyle />
}

DeniedGlobalStyle.displayName = 'DeniedGlobalStyle'

const Denied = () => <DeniedGlobalStyle />

Denied.displayName = 'Denied'
export default Denied
