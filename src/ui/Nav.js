import React from 'react'

import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

import Flex from './Flex'
import Heading from './Heading'
import Sticky from './Sticky'
import Container from './Container'
import IconTv from './icons/IconTv'
import Box from './Box'

const Div = styled(animated.div)`
  left: 0;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 999;
  background: #4e5255;
`

const Nav = ({ children }) => {
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
          <Flex>
            <Heading
              as="h3"
              m="0"
              p="xs"
              color="white"
              case="upper"
              fontWeight="bold"
              fontStyle="italic"
              width={32}
            >
              <IconTv />{' '}
            </Heading>
            <Heading
              as="h3"
              m="0"
              p="xs"
              color="white"
              case="upper"
              fontWeight="bold"
              fontStyle="italic"
              display={['none', 'initial']}
            >
              watchlist
            </Heading>
          </Flex>

          {children}
        </Flex>
      </Container>
    </Div>
  )
}

Nav.displayName = 'Nav'

export default Nav
