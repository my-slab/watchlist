import { useState, useRef } from 'react'

import isEqual from 'lodash.isequal'
import merge from 'lodash.merge'
import useDeepCompareEffect from 'use-deep-compare-effect'

import api, { pickData } from '../api'
import useLoading from './useLoading'

// super leaky abstraction, but it saves us a bunch of code for now.
export default function useGetWithPagedResults(url, config = {}) {
  const initialState = { results: [], page: 1, totalPage: undefined }
  const [{ page, results, totalPages }, setResults] = useState(initialState)
  const { start, stop } = useLoading()
  const oldDeps = useRef()

  const handleLoadMore = () =>
    page < totalPages && setResults({ results, totalPages, page: page + 1 })

  const concat = ({ results: r, ...pageInfo }) => {
    setResults({ results: [...results, ...r], ...pageInfo })
  }

  useDeepCompareEffect(() => {
    let setStrategy = setResults
    let p = page

    if (oldDeps.current) {
      const [oldPage, oldConfig] = oldDeps.current

      if (isEqual(oldConfig, config)) {
        setStrategy = concat
      }

      if (oldPage === page) {
        p = 1
      }
    }

    start()

    api
      .get(url, merge({ params: { page: p } }, config))
      .then(pickData)
      .then(setStrategy)
      .finally(stop)
      .finally(() => {
        oldDeps.current = [page, config]
      })
  }, [page, config])

  return [{ page, results, totalPages }, handleLoadMore]
}
