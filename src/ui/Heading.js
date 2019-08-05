import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'

import Text from './Text'

const as = variant({
  key: 'headings',
  prop: 'as'
})

const Heading = styled(Text)(as)

Heading.displayName = 'Heading'

Heading.defaultProps = {
  ...Text.defaultProps,
  as: 'h3',
  m: 0
}

Heading.propTypes = {
  ...Text.propTypes,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

export default Heading
