import React from 'react'

import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

import Box from './Box'
import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import Logo from './Logo'
import Sticky from './Sticky'

const Div = styled(animated.div)`
  left: 0;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 999;
  background: #4e5255;
`

const Nav = ({ children, flex }) => {
  const props = useSpring({
    to: [{ top: 0 }],
    from: { top: -50 }
  })

  return (
    <Div style={props} width="full">
      <Container>
        <Flex
          width="full"
          justifyContent="space-between"
          alignItems="center"
          height="full"
          px="md"
          color="white"
          py="sm"
        >
          <Logo />
          {flex}
        </Flex>
      </Container>
      <Container>{children}</Container>
    </Div>
  )
}

Nav.displayName = 'Nav'

export default Nav
