import React, { useContext, useEffect } from 'react'

import api from '../../shared/api'
import useLoading from '../../shared/hooks/useLoading'
import { REDIRECT_URL } from '../../shared/config'

const Unauthorized = () => {
  useLoading()

  useEffect(() => {
    const handleRedirect = ({ data: { requestToken } }) => {
      const authenticationUrl = 'https://www.themoviedb.org/authenticate/'
      const redirectUrl = `?redirect_to=${REDIRECT_URL}`

      window.location.replace(
        `${authenticationUrl}${requestToken}${redirectUrl}`
      )
    }

    api
      .get('/authentication/token/new')
      .then(handleRedirect)
      .catch(console.error)
  }, [])

  return <></>
}

export default Unauthorized
