import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import {
  border,
  color,
  compose,
  layout,
  space,
  typography
} from 'styled-system'

const Base = styled('input')(
  compose(
    border,
    color,
    layout,
    space,
    typography
  )
)

const Box = styled(Base)`
  border: 1px solid #ccc;
  display: inline-block;
`

Box.defaultProps = {
  bg: 'background',
  borderRadius: 'md',
  color: 'white',
  px: 'sm',
  py: 'md',
  fontSize: '2xl',
  borderColor: 'borderColor'
}

Box.displayName = 'Input'

Box.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.space
}

export default Box
