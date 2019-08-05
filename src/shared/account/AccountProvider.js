import React, { createContext, useEffect, useState } from 'react'

import api from '../api'
import useLocalStorage from '../hooks/useLocalStorage'

export const AccountContext = createContext()

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState()
  const [sessionId] = useLocalStorage('sessionId', '')

  useEffect(() => {
    api.get('/account', { sessionId }).then(setAccount)
  }, [])

  return (
    <AccountContext.Provider value={account}>
      {children}
    </AccountContext.Provider>
  )
}

AccountProvider.displayName = 'AccountProvider'
export default AccountProvider
