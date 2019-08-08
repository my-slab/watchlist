import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'

import Box from '../ui/Box'
import Gravatar from '../shared/account/Gravatar'
import ThemeProvider from '../ui/ThemeProvider'
import theme from '../ui/theme'

storiesOf('account', module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add('Avatar', () => (
    <Box m="md">
      <Gravatar hash="00000000000000000000000000000000" />
    </Box>
  ))
