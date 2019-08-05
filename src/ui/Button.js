import styled from 'styled-components'
import { color } from 'styled-system'
import { css } from '@styled-system/css'

import Box from './Box'

const variant = ({ variant }) => {
  const primary = css({ bg: 'orcaBlue', color: 'white' })
  const secondary = css({ bg: 'transparent', color: 'orcaBlue' })
  const link = css({
    bg: 'transparent',
    color: 'orcaBlue',
    textDecoration: 'underline'
  })

  switch (variant) {
    case 'primary': {
      return primary
    }

    case 'secondary': {
      return secondary
    }

    case 'link': {
      return link
    }

    default: {
      return primary
    }
  }
}

const Button = styled(Box)`
  ${variant}

  ${css({
    border: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: 'md',
    fontWeight: 'bold',
    px: 'md',
    py: 'sm'
  })}

  ${color}
`

Button.defaultProps = {
  as: 'button',
  borderRadius: 'md'
}

Button.displayName = 'Button'

Button.propTypes = {
  ...Box.propTypes
}

export default Button
