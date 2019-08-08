import React, { createContext, useEffect, useState } from 'react'

import api, { pickData } from '../api'
import useLoading from '../hooks/useLoading'
import useLocalStorage from '../hooks/useLocalStorage'

export const AccountContext = createContext()

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState()
  const [sessionId] = useLocalStorage('sessionId', '')
  const { start, stop } = useLoading()

  useEffect(() => {
    start()

    api
      .get('/account', { params: { sessionId } })
      .then(pickData)
      .then(setAccount)
      .finally(stop)
  }, [])

  return (
    <AccountContext.Provider value={account}>
      {account && children}
    </AccountContext.Provider>
  )
}

AccountProvider.displayName = 'AccountProvider'
export default AccountProvider
