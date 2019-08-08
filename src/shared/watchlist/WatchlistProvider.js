import React, { createContext, useState } from 'react'

export const WatchlistContext = createContext()

const WatchlistProvider = ({ children }) => (
  <WatchlistContext.Provider value={useState(new Set([]))}>
    {children}
  </WatchlistContext.Provider>
)

WatchlistProvider.displayName = 'WatchlistProvider'
export default WatchlistProvider
