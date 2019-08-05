import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import { border, color, compose, layout, space } from 'styled-system'

import Text from './Text'

export const Table = styled('table')`
  ${compose(
    border,
    color,
    layout,
    space
  )}

  border-collapse: collapse;
`

Table.displayName = 'Table'

Table.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.space
}

export const Tr = styled('tr')`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`

Tr.defaultProps = {
  as: 'tr'
}

Tr.displayName = 'Tr'

export const Td = styled(Text)`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`

Td.defaultProps = {
  as: 'td',
  p: 'md'
}

Td.displayName = 'Td'
