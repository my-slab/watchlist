import React from 'react'

import Image from '../../ui/Image'

const Gravatar = ({ hash, size }) => {
  const gravatarUrl = 'https://www.gravatar.com/avatar/'

  return (
    <>
      <Image
        borderRadius="full"
        src={`${gravatarUrl}${hash}?s=${size}`}
        width={size}
        height={size}
      />
    </>
  )
}

Gravatar.defaultProps = {
  size: 64
}

Gravatar.displayName = 'Gravatar'
export default Gravatar
