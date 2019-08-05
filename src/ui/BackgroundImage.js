import PropTypes from 'prop-types'
import propTypes from '@styled-system/prop-types'
import styled from 'styled-components'
import { background } from 'styled-system'

import Box from './Box'

const image = props =>
  props.image ? { backgroundImage: `url(${props.image})` } : {}

const BackgroundImage = styled(Box)(background, image)

BackgroundImage.defaultProps = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden'
}

BackgroundImage.displayName = 'BackgroundImage'

BackgroundImage.propTypes = {
  ...Box.propTypes,
  ...propTypes.background,
  image: PropTypes.string
}

export default BackgroundImage
