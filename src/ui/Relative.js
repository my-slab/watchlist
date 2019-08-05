import styled from 'styled-components'

import Position from './Position'

const Relative = styled(Position)``

Relative.defaultProps = {
  position: 'relative'
}

Relative.displayName = 'Relative'

Relative.propTypes = {
  ...Position.propTypes
}

export default Relative
