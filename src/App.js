import React from 'react'

import { Router } from '@reach/router'

import AccountProvider from './shared/account/AccountProvider'
import Auth from './pages/auth'
import Footer from './ui/Footer'
import Home from './pages/search'
import LoadingProvider from './shared/loading/LoadingProvider'
import ThemeProvider from './ui/ThemeProvider'
import Watchlist from './pages/watchlist/Watchlist'
import theme from './ui/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <LoadingProvider>
      <Auth>
        <AccountProvider>
          <Router>
            <Home path="/" />
            <Watchlist path="/watchlist" />
          </Router>
        </AccountProvider>

        <Footer />
      </Auth>
    </LoadingProvider>
  </ThemeProvider>
)

App.displayName = 'App'
export default App
