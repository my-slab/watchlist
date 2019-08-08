import React, { useState } from 'react'

import { Link } from '@reach/router'
import { useInView } from 'react-intersection-observer'

import Avatar from '../../shared/account/Avatar'
import Box from '../../ui/Box'
import Container from '../../ui/Container'
import Flex from '../../ui/Flex'
import Logo from '../../ui/Logo'
import Nav from '../../ui/Nav'
import QueryInput from './QueryInput'
import Results from './Results'
import Text from '../../ui/Text'
import useDebounce from '../../shared/hooks/useDebounce'

const Search = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)
  const [ref, inView] = useInView()

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
            <Logo />
            <Avatar />
          </Flex>

          <Box mb="lg">
            <QueryInput query={query} onChange={setQuery} />
          </Box>
        </Container>
      ) : (
        <Nav avatar={<Avatar />}>
          <Box p="md">
            <QueryInput query={query} onChange={setQuery} />
          </Box>
        </Nav>
      )}

      <Flex width="full" justifyContent="center" mb="lg" ref={ref}>
        <Text textAlign="center" p="sm" fontSize="xl">
          Search for TV shows, then add them to your{' '}
          <Link to="/watchlist">watchlist</Link> (double click).
        </Text>
      </Flex>

      {debouncedQuery.length > 0 && <Results query={debouncedQuery} />}
    </Box>
  )
}

Search.displayName = 'Search'
export default Search
