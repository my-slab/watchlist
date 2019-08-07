import React, { useEffect } from 'react'

import { useInView } from 'react-intersection-observer'

import Flex from '../../ui/Flex'
import Card from './Card'
import Heading from '../../ui/Heading'

const MediaList = ({ media, onLoadMore, page, totalPages, cardList }) => {
  const [ref, inView] = useInView()
  const isNotExhausted = media.length > 0 && page < totalPages

  useEffect(() => {
    inView && onLoadMore()
  }, [inView])

  return (
    <>
      {media.length > 0 ? (
        <>
          <Flex flexWrap="wrap" justifyContent="center" mb="xl">
            {media.map((m, i) => (
              <Card key={`${m.id}_${i}`} {...m} />
            ))}
          </Flex>

          {isNotExhausted ? (
            <Flex flexWrap="wrap" justifyContent="center" mb="2xl">
              <Heading
                as="span"
                bg="surface"
                color="textSecondary"
                fontStyle="italic"
                fontWeight="bold"
                mx="sm"
                opacity={0.9}
                p="sm"
                ref={ref}
              >
                Loading more shows...
              </Heading>
            </Flex>
          ) : (
            <Flex flexWrap="wrap" justifyContent="center" mb="2xl">
              <Heading
                as="span"
                bg="surface"
                color="textSecondary"
                fontStyle="italic"
                fontWeight="bold"
                mx="sm"
                opacity={0.9}
                p="sm"
              >
                No more shows
              </Heading>
            </Flex>
          )}
        </>
      ) : (
        <div>no results</div>
      )}
    </>
  )
}

MediaList.displayName = 'MediaList'
export default MediaList
