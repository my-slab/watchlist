const getOrThrow = val => {
  const errorMsg = val => `App not properly configured, missing ${val}`

  if (process.env[val]) {
    return process.env[val]
  }

  throw new Error(errorMsg(val))
}

export const API_KEY = getOrThrow('REACT_APP_API_KEY')
export const REDIRECT_URL = getOrThrow('REACT_APP_REDIRECT_URL')
