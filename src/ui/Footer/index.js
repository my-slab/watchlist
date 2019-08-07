import React from 'react'

import Flex from '../Flex'
import Image from '../Image'
import logo from './logo.png'

const Footer = () => (
  <Flex width="full" justifyContent="center" m="lg">
    <Image src={logo} width={128} />
  </Flex>
)

Footer.displayName = 'Footer'
export default Footer
