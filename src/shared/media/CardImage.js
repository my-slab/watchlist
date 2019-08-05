import React from 'react'

import BackgroundImage from '../../ui/BackgroundImage'

function imgWithPath(img) {
  const path = 'https://image.tmdb.org/t/p/w500'
  return `${path}${img}`
}

const placeholder =
  'https://i.pinimg.com/originals/e1/71/b1/e171b118e48e278b35026f5966d7a6ff.gif'

const CardImage = ({ backdropPath, posterPath }) => {
  const imageOrPlaceholder = backdropPath
    ? imgWithPath(backdropPath)
    : posterPath
    ? imgWithPath(posterPath)
    : placeholder

  return (
    <BackgroundImage
      borderRadius="sm"
      height="full"
      image={imageOrPlaceholder}
      width="full"
    />
  )
}

CardImage.displayName = 'CardImage'
export default CardImage
