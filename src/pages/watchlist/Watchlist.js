import React, { useContext, useEffect, useState } from 'react'

import { Link } from '@reach/router'
import { useInView } from 'react-intersection-observer'

import Avatar from '../../shared/account/Avatar'
import Box from '../../ui/Box'
import Container from '../../ui/Container'
import Empty from './Empty'
import Flex from '../../ui/Flex'
import List from '../../shared/media/List'
import Logo from '../../ui/Logo'
import Nav from '../../ui/Nav'
import Text from '../../ui/Text'
import useGetWithPagedResults from '../../shared/hooks/useGetWithPagedResults'
import useLocalStorage from '../../shared/hooks/useLocalStorage'
import { AccountContext } from '../../shared/account/AccountProvider'
import { WatchlistContext } from '../../shared/watchlist/WatchlistProvider'

const Watchlist = () => {
  const [ref, inView, entry] = useInView()
  const [sessionId] = useLocalStorage('sessionId')
  const { id: accountId, username } = useContext(AccountContext)
  const [, setWatchlistIds] = useContext(WatchlistContext)

  const [
    { page, results, totalPages },
    handleLoadMore
  ] = useGetWithPagedResults(`/account/${accountId}/watchlist/tv`, {
    params: { sessionId }
  })

  useEffect(() => {
    setWatchlistIds(results.reduce((acc, { id }) => acc.add(id), new Set([])))
  }, [results])

  return (
    <Box my="lg">
      {inView ? (
        <Container mb="lg">
          <Flex
            width="full"
            justifyContent="space-between"
            alignItems="center"
            mb="lg"
          >
            <Logo />
            <Avatar />
          </Flex>
        </Container>
      ) : (
        <Nav flex={<Avatar />} />
      )}

      <Flex width="full" justifyContent="center" mb="lg" ref={ref}>
        <Box width={['full', 1 / 2]}>
          {results.length > 0 ? (
            <>
              <Text
                p="sm"
                fontSize="xl"
                fontStyle="italic"
                fontWeight="bold"
                case="upper"
                textAlign="center"
                color="white"
              >
                {username}, your watchlist.
              </Text>
              <Text
                p="sm"
                fontSize="xl"
                fontStyle="italic"
                fontWeight="bold"
                case="upper"
                textAlign="center"
                color="white"
              >
                double click to remove items, or <Link to="/">search</Link> for
                more titles.
              </Text>
            </>
          ) : (
            <>
              <Text
                p="sm"
                fontSize="xl"
                fontStyle="italic"
                fontWeight="bold"
                case="upper"
                textAlign="center"
                color="white"
              >
                {username}, your watchlist is empty.
              </Text>
              <Text
                p="sm"
                fontSize="xl"
                fontStyle="italic"
                fontWeight="bold"
                case="upper"
                textAlign="center"
                color="white"
              >
                here are some popular shows, or <Link to="/">search</Link> for
                more titles.
              </Text>
            </>
          )}
        </Box>
      </Flex>

      {results.length > 0 ? (
        <List
          media={results}
          onLoadMore={handleLoadMore}
          page={page}
          totalPages={totalPages}
        />
      ) : (
        <Empty />
      )}
    </Box>
  )
}

Watchlist.displayName = 'Watchlist'
export default Watchlist
