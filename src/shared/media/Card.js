import React from 'react'

import styled from 'styled-components'

import CardDetail from './CardDetail'
import CardImage from './CardImage'
import CardRating from './CardRating'
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

const Card = () => {
  return (
    <S.Relative
      borderRadius="sm"
      height={200}
      mx={[0, 'sm']}
      my="sm"
      onDoubleClick={console.log}
      width={360}
    >
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
