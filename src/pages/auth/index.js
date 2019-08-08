import React, { useEffect, useState } from 'react'

import Approved from './Approved'
import Denied from './Denied'
import Unauthorized from './Unauthorized'
import useLocalStorage from '../../shared/hooks/useLocalStorage'

const Auth = ({ children }) => {
  const [sessionId] = useLocalStorage('sessionId', '')
  const [requestToken, setRequestToken] = useState()
  const [status, setStatus] = useState()

  useEffect(() => {
    if (sessionId) {
      setStatus('AUTHORIZED')
    } else {
      const urlParams = new URLSearchParams(window.location.search)

      if (
        (urlParams.has('request_token') && urlParams.has('approved')) ||
        urlParams.has('denied')
      ) {
        if (urlParams.get('approved')) {
          setStatus('APPROVED')
          setRequestToken(urlParams.get('request_token'))
        }

        if (urlParams.get('denied')) {
          setStatus('DENIED')
        }
      } else {
        setStatus('UNAUTHORIZED')
      }
    }
  }, [])

  const handleOnStatusChange = () => setStatus('AUTHORIZED')

  switch (status) {
    case 'UNAUTHORIZED': {
      return <Unauthorized />
    }

    case 'APPROVED': {
      return (
        <Approved
          onStatusChange={handleOnStatusChange}
          requestToken={requestToken}
        />
      )
    }

    case 'DENIED': {
      return <Denied />
    }

    case 'AUTHORIZED': {
      return <>{children}</>
    }

    default: {
      return null
    }
  }
}

Auth.displayName = 'Auth'
export default Auth
