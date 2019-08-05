import styled from 'styled-components'

import Position from './Position'

const Sticky = styled(Position)``

Sticky.defaultProps = {
  position: 'sticky'
}

Sticky.displayName = 'Sticky'

Sticky.propTypes = {
  ...Position.propTypes
}

export default Sticky
