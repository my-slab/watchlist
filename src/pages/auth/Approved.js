import React, { useContext, useEffect } from 'react'

import api, { pickData } from '../../shared/api'
import useLoading from '../../shared/hooks/useLoading'
import useLocalStorage from '../../shared/hooks/useLocalStorage'

const Approved = ({ onStatusChange, requestToken }) => {
  const [, setSessionId] = useLocalStorage('sessionId', '')

  useLoading()

  useEffect(() => {
    requestToken &&
      api
        .post('/authentication/session/new', { requestToken })
        .then(pickData)
        .then(({ sessionId }) => setSessionId(sessionId))
        .then(onStatusChange)
        .catch(console.error)
  }, [])

  return null
}

export default Approved
