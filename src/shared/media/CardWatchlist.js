import React from 'react'
import { animated, useSpring } from 'react-spring'

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
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.5, 0.9, 1.5, 1.3, 1]
          })
          .interpolate(x => `scale(${x})`)
      }}
    >
      ❤️
    </animated.div>
  )
}

CardWatchlist.displayName = 'CardWatchlist'
export default CardWatchlist
