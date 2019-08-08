import React from 'react'
import { animated, useSpring } from 'react-spring'

import Text from '../../ui/Text'

const CardWatchlist = ({ isOnWatchlist }) => {
  const { x } = useSpring({
    from: { x: 0 },
    x: isOnWatchlist ? 1 : 0,
    config: { duration: 1000 }
  })

  return (
    <animated.div
      style={{
        position: 'absolute',
        top: 8,
        left: 8,
        opacity: x.interpolate({ range: [0, 1], output: [0, 1] }),
        transform: x
          .interpolate({
            range: [0, 0.35, 0.5, 0.75, 1],
            output: [1, 1.3, 1.8, 1.3, 1]
          })
          .interpolate(x => `scale(${x})`)
      }}
    >
      <Text as="span" variant="secondary" fontStyle="normal">
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </Text>
    </animated.div>
  )
}

CardWatchlist.displayName = 'CardWatchlist'
export default CardWatchlist
