import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import { shadow } from 'styled-system'

import Box from './Box'

const Card = styled(Box)(shadow)

Card.defaultProps = {
  bg: 'surface',
  borderRadius: 'lg',
  boxShadow: 2,
  width: 300
}

Card.displayName = 'Card'

Card.propTypes = {
  ...Box.propTypes,
  ...propTypes.shadow
}

export default Card
