import React from 'react'

import { Router } from '@reach/router'

import AccountProvider from './shared/account/AccountProvider'
import Auth from './pages/auth'
import Footer from './ui/Footer'
import Home from './pages/search'
import LoadingProvider from './shared/loading/LoadingProvider'
import ThemeProvider from './ui/ThemeProvider'
import Watchlist from './pages/watchlist/Watchlist'
import WatchlistProvider from './shared/watchlist/WatchlistProvider'
import theme from './ui/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <LoadingProvider>
      <Auth>
        <AccountProvider>
          <WatchlistProvider>
            <Router>
              <Home path="/" />
              <Watchlist path="/watchlist" />
            </Router>
          </WatchlistProvider>
        </AccountProvider>

        <Footer />
      </Auth>
    </LoadingProvider>
  </ThemeProvider>
)

App.displayName = 'App'
export default App
