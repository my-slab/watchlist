import React from 'react'

import Box from '../../ui/Box'
import List from '../../shared/media/List'
import useGetWithPagedResults from '../../shared/hooks/useGetWithPagedResults'

const Empty = () => {
  const [
    { page, results, totalPages },
    handleLoadMore
  ] = useGetWithPagedResults('/tv/popular')

  return (
    <>
      {results.length > 0 && (
        <Box>
          <List
            media={results}
            onLoadMore={handleLoadMore}
            page={page}
            totalPages={totalPages}
          />
        </Box>
      )}
    </>
  )
}

Empty.displayName = 'Empty'
export default Empty
