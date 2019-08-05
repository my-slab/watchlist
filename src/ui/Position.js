import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import { position } from 'styled-system'

import Box from './Box'

const Position = styled(Box)(position)

Position.displayName = 'Position'

Position.propTypes = {
  ...Box.propTypes,
  ...propTypes.position
}

export default Position
