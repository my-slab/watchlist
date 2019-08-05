import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import { border, color, compose, layout, space } from 'styled-system'

const Base = styled('div')(
  compose(
    border,
    color,
    layout,
    space
  )
)

const Box = styled(Base)`
  box-sizing: border-box;
`

Box.displayName = 'Box'

Box.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.space
}

export default Box
