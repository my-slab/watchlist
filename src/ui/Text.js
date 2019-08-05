import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import { color, compose, layout, space, typography } from 'styled-system'

const letterCase = props => {
  switch (props.case) {
    case 'lower': {
      return { textTransform: 'lowercase' }
    }
    case 'title': {
      return { textTransform: 'capitalize' }
    }
    case 'upper': {
      return { textTransform: 'uppercase' }
    }
    default: {
      return { textTransform: 'none' }
    }
  }
}

const Text = styled('div')`
  @import url('https://fonts.googleapis.com/css?family=Exo+2:900i&display=swap');

  @import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');

  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:700i&display=swap');

  @import url('https://fonts.googleapis.com/css?family=Poppins:400,900i&display=swap');

  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700i&display=swap');

  ${compose(
    color,
    layout,
    space,
    typography
  )}
  ${letterCase}
`

Text.defaultProps = {
  color: '#DA304C',
  bg: '#C9A2D2',
  // fontFamily: "'Exo 2', sans-serif;",
  fontFamily: "'Poppins', sans-serif;",
  // fontFamily: "'Titillium Web', sans-serif;",
  // fontFamily: "'IBM Plex Sans', sans-serif",
  fontSize: 'md',
  fontWeight: 'normal'
}

Text.propTypes = {
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.typography,
  as: PropTypes.string
}

export default Text
