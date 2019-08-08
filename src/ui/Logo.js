import React from 'react'

import Heading from './Heading'

const Logo = () => (
  <Heading
    as="h3"
    m="0"
    p="xs"
    color="white"
    case="upper"
    fontWeight="bold"
    fontStyle="italic"
  >
    watchlist
  </Heading>
)

Logo.displayName = 'Logo'
export default Logo
