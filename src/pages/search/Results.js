import React from 'react'

import Flex from '../../ui/Flex'
import List from '../../shared/media/List'
import Text from '../../ui/Text'
import useGetWithPagedResults from '../../shared/hooks/useGetWithPagedResults'

const Results = ({ query }) => {
  const [
    { page, results, totalPages },
    handleLoadMore
  ] = useGetWithPagedResults('/search/tv', {
    params: { query }
  })

  if (results.length > 0) {
    return (
      <List
        media={results}
        onLoadMore={handleLoadMore}
        page={page}
        totalPages={totalPages}
      />
    )
  }

  if (query.length > 0) {
    return (
      <Flex width="full" justifyContent="center" mb="lg">
        <Text
          case="upper"
          color="white"
          fontSize="xl"
          fontStyle="italic"
          fontWeight="bold"
          p="sm"
          textAlign="center"
          width={['full', 1 / 2]}
        >
          No results for "{query}"
        </Text>
      </Flex>
    )
  }

  return null
}

Results.displayName = 'Results'
export default Results
