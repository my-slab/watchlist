import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import { flexbox } from 'styled-system'

import Box from './Box'

const Flex = styled(Box)(flexbox)

Flex.defaultProps = {
  display: 'flex'
}

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...Box.propTypes,
  ...propTypes.flexbox
}

export default Flex
