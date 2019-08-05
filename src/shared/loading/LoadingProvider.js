import React, { createContext, useEffect, useState } from 'react'

import Loading from './Loading'

export const LoadingContext = createContext()

const LoadingProvider = ({ children }) => {
  const [loadingStack, setLoadingStack] = useState()

  const push = () => {
    setLoadingStack([true, ...loadingState])
  }

  const pop = () => {
    const [, rest] = loadingStack
    setLoadingStack(rest)
  }

  return (
    <LoadingContext.Provider value={[loadingStack, { pop, push }]}>
      {loadingStack.length > 0 && <Loading />}
      {children}
    </LoadingContext.Provider>
  )
}

LoadingProvider.displayName = 'LoadingProvider'
export default LoadingProvider
