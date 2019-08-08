import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'

import Absolute from '../ui/Absolute'
import BackgroundImage from '../ui/BackgroundImage'
import Box from '../ui/Box'
import Flex from '../ui/Flex'
import Heading from '../ui/Heading'
import Input from '../ui/Input'
// import Nav from '../ui/Nav'
import Container from '../ui/Container'
import Relative from '../ui/Relative'
import Text from '../ui/Text'
import ThemeProvider from '../ui/ThemeProvider'
import theme from '../ui/theme'

storiesOf('ui components', module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add('Box', () => <Box bg="surface" height={200} m="md" width={200} />)
  .add('Flex', () => (
    <Flex justifyContent="space-between" m="md">
      <Box bg="surface" height={200} width={200} />
      <Box bg="textSecondary" height={200} width={200} />
      <Box bg="textBackgroundPrimary" height={200} width={200} />
    </Flex>
  ))
  .add('BackgroundImage', () => (
    <BackgroundImage
      height={200}
      image="https://image.tmdb.org/t/p/w500/iflq7ZJfso6WC7gk9l1tD3unWK.jpg"
      m="md"
      width={200}
    />
  ))
  .add('Container', () => (
    <Container bg="surface">
      <Text p="lg">ドラゴンボール</Text>
    </Container>
  ))
  .add('Text', () => (
    <Box p="md">
      <Text>ドラゴンボール</Text>
      <Text variant="secondary">ドラゴンボール</Text>
    </Box>
  ))
  .add('Heading', () => (
    <Box p="md">
      <Heading as="h1">ドラゴンボール</Heading>
      <Heading as="h2">ドラゴンボール</Heading>
      <Heading as="h3">ドラゴンボール</Heading>
      <Heading as="h4">ドラゴンボール</Heading>
      <Heading as="h5">ドラゴンボール</Heading>
      <Heading as="h6">ドラゴンボール</Heading>
    </Box>
  ))
  .add('Position - Relative, Absolute', () => (
    <Box p="md">
      <Relative bg="surface" height={200} width={200}>
        <Absolute top={16} left={16} p="md" bg="peachpuff" />
        <Absolute top={16} right={16} p="md" bg="peachpuff" />
        <Absolute bottom={16} right={16} p="md" bg="peachpuff" />
        <Absolute bottom={16} left={16} p="md" bg="peachpuff" />
      </Relative>
    </Box>
  ))
  // .add('Nav', () => (
  //   <Box p="md">
  //     <Nav />
  //   </Box>
  // ))
  .add('Input', () => (
    <Box p="md">
      <Input type="search" width={1 / 2} />
    </Box>
  ))
