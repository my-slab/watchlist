import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import { color, compose, layout, space, typography } from 'styled-system'
import { css } from '@styled-system/css'

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

const variant = props =>
  props.variant === 'secondary' &&
  css({
    bg: 'textBackgroundSecondary',
    color: 'textSecondary',
    opacity: 0.85
  })

const Text = styled('div')`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,900i&display=swap');

  ${compose(
    color,
    layout,
    space,
    typography
  )}
  ${letterCase}
  ${variant}
`

Text.defaultProps = {
  bg: 'textBackgroundPrimary',
  case: 'upper',
  color: 'textPrimary',
  fontFamily: "'Poppins', sans-serif;",
  fontSize: 'md',
  fontStyle: 'italic',
  fontWeight: 'bold'
}

Text.propTypes = {
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.space,
  ...propTypes.typography,
  as: PropTypes.string
}

export default Text
