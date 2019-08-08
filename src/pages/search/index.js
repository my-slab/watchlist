import React, { useEffect, useState } from 'react'

import { Link } from '@reach/router'
import { useInView } from 'react-intersection-observer'

import Avatar from '../../shared/account/Avatar'
import Box from '../../ui/Box'
import Container from '../../ui/Container'
import Flex from '../../ui/Flex'
import Nav from '../../ui/Nav'
import QueryInput from './QueryInput'
import Text from '../../ui/Text'
import api, { pickData } from '../../shared/api'
import useDebounce from '../../shared/hooks/useDebounce'
import useGetWithPagedResults from '../../shared/hooks/useGetWithPagedResults'
import useLoading from '../../shared/hooks/useLoading'

import Results from './Results'

const Search = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)
  const [ref, inView, entry] = useInView()

  return (
    <Box my="lg">
      {inView ? (
        <Container>
          <Flex
            width="full"
            justifyContent="space-between"
            alignItems="center"
            mb="lg"
          >
            <span>Watchlist</span>
            <Avatar />
          </Flex>

          <Box mb="lg">
            <QueryInput query={query} onChange={setQuery} />
          </Box>
        </Container>
      ) : (
        <Nav flex={<Avatar />}>
          <Box p="md">
            <QueryInput query={query} onChange={setQuery} />
          </Box>
        </Nav>
      )}

      <Flex width="full" justifyContent="center" mb="lg" ref={ref}>
        <Text
          width={['full', 1 / 2]}
          p="sm"
          fontSize="xl"
          fontStyle="italic"
          fontWeight="bold"
          case="upper"
          textAlign="center"
          color="white"
        >
          Search for TV shows, then add them to your{' '}
          <Link to="/watchlist">watchlist</Link> (double click).
        </Text>
      </Flex>

      {debouncedQuery.length > 0 && <Results query={debouncedQuery} />}
    </Box>
  )

  // const [ref, inView, entry] = useInView()
  // const [{ results, page, totalPages }, setResults] = useState(initialState)
  // const { pop, push } = useLoading()
  // const [isLoading, setIsLoading] = useState(false)

  // console.log('debouncedQuery', debouncedQuery)

  // ;[{ page, results, totalPages }] = useGetWithPagedResults('/search/tv', {
  //   params: { page: 1, query: debouncedQuery }
  // })

  // useEffect(() => {
  //   if (debouncedQuery) {
  //     ;[{ page, results, totalPages }] = useGetWithPagedResults('/search/tv', {
  //       params: { page: 1, query: debouncedQuery }
  //     })
  //   }
  // }, [debouncedQuery])

  // useEffect(() => {
  //   // if (debouncedQuery) {
  //   const [{ page, results, totalPages }] = useGetWithPagedResults(
  //     '/search/tv',
  //     {
  //       params: { page: 1, query: debouncedQuery }
  //     }
  //   )
  // }, [debouncedQuery])

  // useEffect(() => {
  //   if (debouncedQuery) {
  //     push()
  //     setIsLoading(true)

  //     api
  //       .get('/search/tv', { params: { page: 1, query: debouncedQuery } })
  //       .then(pickData)
  //       .then(setResults)
  //       .finally(pop)
  //       .finally(() => setIsLoading(false))
  //   } else {
  //     setResults(initialState)
  //   }
  // }, [debouncedQuery])

  // useEffect(() => {
  //   if (page > 1) {
  //     push()
  //     setIsLoading(true)

  //     api
  //       .get('/search/tv', { params: { page, query: debouncedQuery } })
  //       .then(pickData)
  //       .then(({ results: r, ...pageInfo }) => {
  //         setResults({ results: [...results, ...r], ...pageInfo })
  //       })
  //       .finally(pop)
  //       .finally(() => setIsLoading(false))
  //   }
  // }, [page])

  // const handleLoadMore = () => {}
  // page < totalPages && setResults({ results, totalPages, page: page + 1 })

  // console.log('inView', inView)
}

Search.displayName = 'Search'
export default Search
