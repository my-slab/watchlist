import React, { createContext, useEffect, useState } from 'react'

import api, { pickData } from '../api'
import useLoading from '../hooks/useLoading'
import useLocalStorage from '../hooks/useLocalStorage'

export const AccountContext = createContext()

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState()
  const [sessionId] = useLocalStorage('sessionId', '')
  const { pop } = useLoading()

  useEffect(() => {
    api
      .get('/account', { params: { sessionId } })
      .then(pickData)
      .then(setAccount)
      .finally(pop)
  }, [])

  return (
    <AccountContext.Provider value={account}>
      {children}
    </AccountContext.Provider>
  )
}

AccountProvider.displayName = 'AccountProvider'
export default AccountProvider
