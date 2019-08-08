import React from 'react'

import Absolute from '../../ui/Absolute'
import Text from '../../ui/Text'

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
      <Absolute top={8} right={0} mx="sm">
        <Text fontSize="sm" variant="secondary">
          <Text as="span" fontStyle="initial" variant="secondary">
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
