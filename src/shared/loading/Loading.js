import React from 'react'

import css from '@styled-system/css'
import { createGlobalStyle } from 'styled-components'

const loadingUrl = 'https://media3.giphy.com/media/Yqn9tE2E00k4U/giphy.gif'

const LoadingGlobalStyles = () => {
  const GlobalStyle = createGlobalStyle`
    body {
      ${css({
        height: 'full',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-y',
        backgroundImage: `url(${loadingUrl})`
      })}
    }
  `

  return <GlobalStyle />
}

LoadingGlobalStyles.displayName = 'LoadingGlobalStyles'

const Loading = () => <LoadingGlobalStyles />

Loading.displayName = 'Loading'
export default Loading
