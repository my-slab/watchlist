import React from 'react'

import BackgroundImage from '../../ui/BackgroundImage'

function ratingToUpOrDown(rating) {
  return rating >= 6 ? '👍' : '👎'
}

function toRatio(rating) {
  const ratio = Math.round((rating / 10) * 100)
  return `${ratio}%`
}

const CardRating = ({ voteAverage }) => (
  <>
    {voteAverage > 0 && (
      <Absolute top={8} right={0}>
        <Text fontSize="sm">
          <Text as="span" fontStyle="initial">
            {ratingToUpOrDown(voteAverage)}
          </Text>{' '}
          {toRatio(voteAverage)}
        </Text>
      </Absolute>
    )}
  </>
)

CardRating.displayName = 'CardRating'
export default CardRating
