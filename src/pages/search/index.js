import React, { useEffect, useState } from 'react'

import { Link } from '@reach/router'
import { useInView } from 'react-intersection-observer'

import Avatar from '../../shared/account/Avatar'
import Box from '../../ui/Box'
import Container from '../../ui/Container'
import Flex from '../../ui/Flex'
import List from '../../shared/media/List'
import Nav from '../../ui/Nav'
import QueryInput from './QueryInput'
import Text from '../../ui/Text'
import api, { pickData } from '../../shared/api'
import useDebounce from '../../shared/hooks/useDebounce'
import useLoading from '../../shared/hooks/useLoading'

const initialState = { results: [], page: 1, totalPage: undefined }

const Search = () => {
  const [query, setQuery] = useState('')
  const [ref, inView, entry] = useInView()
  const [{ results, page, totalPages }, setResults] = useState(initialState)
  const debouncedQuery = useDebounce(query, 300)
  const { pop, push } = useLoading()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (debouncedQuery) {
      push()
      setIsLoading(true)

      api
        .get('/search/tv', { params: { page: 1, query: debouncedQuery } })
        .then(pickData)
        .then(setResults)
        .finally(pop)
        .finally(() => setIsLoading(false))
    } else {
      setResults(initialState)
    }
  }, [debouncedQuery])

  useEffect(() => {
    if (page > 1) {
      push()
      setIsLoading(true)

      api
        .get('/search/tv', { params: { page, query: debouncedQuery } })
        .then(pickData)
        .then(({ results: r, ...pageInfo }) => {
          setResults({ results: [...results, ...r], ...pageInfo })
        })
        .finally(pop)
        .finally(() => setIsLoading(false))
    }
  }, [page])

  const handleLoadMore = () =>
    page < totalPages && setResults({ results, totalPages, page: page + 1 })

  console.log('inView', inView)

  return (
    <Box my="lg">
      {inView && (
        <Container>
          <Box mb="lg">
            <Nav flex={<Avatar />} />
          </Box>
          <Box mb="lg">
            <QueryInput query={query} onChange={setQuery} />
          </Box>
        </Container>
      )}

      {!inView && (
        <>
          <Nav flex={<Avatar />}>
            <Box p="md">
              <QueryInput query={query} onChange={setQuery} />
            </Box>
          </Nav>
        </>
      )}

      <Flex width="full" justifyContent="center" mb="lg" ref={ref}>
        <Text
          width={['full', 1 / 2]}
          p="sm"
          fontSize="xl"
          // bg="purple"
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

      {results.length > 0 ? (
        <Box>
          <List
            media={results}
            onLoadMore={handleLoadMore}
            page={page}
            totalPages={totalPages}
          />
        </Box>
      ) : (
        <>
          {!isLoading && debouncedQuery.length > 0 && (
            <Flex width="full" justifyContent="center" mb="lg">
              <Text
                width={['full', 1 / 2]}
                p="sm"
                fontSize="xl"
                // bg="purple"
                fontStyle="italic"
                fontWeight="bold"
                case="upper"
                textAlign="center"
                color="white"
              >
                No results for "{query}"
              </Text>
            </Flex>
          )}
        </>
      )}
    </Box>
  )
}

Search.displayName = 'Search'
export default Search
