import { useContext, useEffect } from 'react'

import { LoadingContext } from '../loading/LoadingProvider'

export default function useLoading() {
  const [, { push, pop }] = useContext(LoadingContext)

  useEffect(() => {
    push()
    return () => pop()
  }, [])

  return { start: push, stop: pop }
}
