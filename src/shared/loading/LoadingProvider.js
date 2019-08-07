import React, { createContext, useState } from 'react'

import Loading from './Loading'

export const LoadingContext = createContext()

const LoadingProvider = ({ children }) => {
  const [state, set] = useState([])

  const pop = () => {
    const [, ...rest] = state
    set(rest)
  }

  const push = () => {
    set([true, ...state])
  }

  return (
    <LoadingContext.Provider value={[state, { pop, push }]}>
      {state.length > 0 && <Loading />}
      {children}
    </LoadingContext.Provider>
  )
}

LoadingProvider.displayName = 'LoadingProvider'
export default LoadingProvider
