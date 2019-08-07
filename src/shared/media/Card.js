import React, { useState } from 'react'

import styled from 'styled-components'

import CardDetail from './CardDetail'
import CardImage from './CardImage'
import CardRating from './CardRating'
import CardWatchlist from './CardWatchlist'
import Relative from '../../ui/Relative'

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
  const [isOnWatchlist, setIsOnWatchlist] = useState(false)

  const handleOnDoubleClick = () => {
    // call outer fn
    setIsOnWatchlist(!isOnWatchlist)
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
