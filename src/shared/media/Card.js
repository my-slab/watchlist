import React, { useEffect, useContext, useState } from 'react'

import styled from 'styled-components'

import CardDetail from './CardDetail'
import CardImage from './CardImage'
import CardRating from './CardRating'
import CardWatchlist from './CardWatchlist'
import Relative from '../../ui/Relative'
import api from '../../shared/api'
import useLoading from '../hooks/useLoading'
import useLocalStorage from '../hooks/useLocalStorage'
import { AccountContext } from '../../shared/account/AccountProvider'
import { WatchlistContext } from '../../shared/watchlist/WatchlistProvider'

const S = {
  Relative: styled(Relative)`
    cursor: pointer;

    :hover {
      transform: scale(1.06);
      transition: transform 0.4s;
    }
  `
}

const Card = ({
  backdropPath,
  firstAirDate,
  id,
  name,
  originalLanguage,
  posterPath,
  voteAverage
}) => {
  const [sessionId] = useLocalStorage('sessionId', '')
  const { id: accountId } = useContext(AccountContext)
  const { start, stop } = useLoading()
  const [watchlistIds, setWatchlistIds] = useContext(WatchlistContext)
  const [isOnWatchlist, setIsOnWatchlist] = useState(watchlistIds.has(id))

  useEffect(() => {
    setIsOnWatchlist(watchlistIds.has(id))
  }, [watchlistIds])

  const handleOnDoubleClick = () => {
    const toggled = !isOnWatchlist
    setIsOnWatchlist(toggled)

    start()

    api
      .post(
        `/account/${accountId}/watchlist`,
        {
          mediaId: id,
          mediaType: 'tv',
          watchlist: toggled
        },
        {
          params: {
            sessionId
          }
        }
      )
      .then(() => (toggled ? watchlistIds.add(id) : watchlistIds.delete(id)))
      .finally(stop)
  }

  return (
    <S.Relative
      borderRadius="sm"
      height={200}
      mx={[0, 'sm']}
      my="sm"
      onDoubleClick={handleOnDoubleClick}
      width={360}
    >
      <CardWatchlist isOnWatchlist={isOnWatchlist} />
      <CardImage backdropPath={backdropPath} posterPath={posterPath} />
      <CardDetail
        firstAirDate={firstAirDate}
        name={name}
        originalLanguage={originalLanguage}
      />
      <CardRating voteAverage={voteAverage} />
    </S.Relative>
  )
}

Card.displayName = 'Card'
export default Card
