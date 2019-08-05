import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'

import Absolute from '../ui/Absolute'
import BackgroundImage from '../ui/BackgroundImage'
import Box from '../ui/Box'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Flex from '../ui/Flex'
import Heading from '../ui/Heading'
import Input from '../ui/Input'
// import Nav from '../ui/Nav'
import Relative from '../ui/Relative'
import Text from '../ui/Text'
import ThemeProvider from '../ui/ThemeProvider'
import theme from '../ui/theme'

storiesOf('ui components', module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add('Box', () => <Box bg="orcaBlue" height={200} m="md" width={200} />)
  .add('Flex', () => (
    <Flex justifyContent="space-between" m="md">
      <Box bg="surface" height={200} width={200} />
      <Box bg="orcaBlue" height={200} width={200} />
      <Box bg="peachpuff" height={200} width={200} />
    </Flex>
  ))
  .add('Card', () => <Card height={400} m="md" />)
  .add('BackgroundImage', () => (
    <BackgroundImage
      height={200}
      image="https://pmcvariety.files.wordpress.com/2018/06/the-last-of-us-part-2.jpg?w=1000&h=563&crop=1"
      m="md"
      width={200}
    />
  ))
  .add('Button', () => (
    <Box m="md">
      <Box mb="md">
        <Button>Add to cart</Button>
      </Box>
      <Box>
        <Button variant="secondary">Add to wishlist</Button>
      </Box>
    </Box>
  ))
  .add('Text', () => (
    <Box p="md">
      <Text>The Last of Us</Text>
      <Text fontWeight="bold">The Last of Us</Text>
      <Text color="textSecondary">The Last of Us</Text>
      <Text color="orcaBlue">The Last of Us</Text>
      <Text color="white" bg="orcaBlue" as="span">
        The Last of Us
      </Text>
    </Box>
  ))
  .add('Heading', () => (
    <Box p="md">
      <Heading as="h1">The Last of Us</Heading>
      <Heading as="h2">The Last of Us</Heading>
      <Heading as="h3">The Last of Us</Heading>
      <Heading as="h4">The Last of Us</Heading>
      <Heading as="h5">The Last of Us</Heading>
      <Heading as="h6">The Last of Us</Heading>
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
      <Input type="number" width={64} />
    </Box>
  ))
