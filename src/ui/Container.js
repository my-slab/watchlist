import React, { forwardRef } from 'react'

import Box from './Box'

const Container = forwardRef(({ children }, ref) => (
  <Box maxWidth="max" mx={['3%', '6%', 'auto']} my="lg" ref={ref}>
    {children}
  </Box>
))

Container.displayName = 'Container'

export default Container
