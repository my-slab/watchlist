import styled from 'styled-components'

import Box from './Box'

const Image = styled(Box)`
  display: block;
  max-width: 100%;
  height: auto;
`

Image.defaultProps = {
  as: 'img'
}

Image.displayName = 'Image'

export default Image
