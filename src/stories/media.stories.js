import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'

import Box from '../ui/Box'
import Card from '../shared/media/Card'
import CardDetail from '../shared/media/CardDetail'
import CardImage from '../shared/media/CardImage'
import CardRating from '../shared/media/CardRating'
import ThemeProvider from '../ui/ThemeProvider'
import theme from '../ui/theme'

const media = {
  originalName: 'ドラゴンボール',
  genreIds: [16, 35, 10759, 10765],
  name: 'Dragon Ball',
  popularity: 263.041,
  originCountry: ['JP'],
  voteCount: 336,
  firstAirDate: '1986-02-26',
  backdropPath: '/iflq7ZJfso6WC7gk9l1tD3unWK.jpg',
  originalLanguage: 'ja',
  id: 12609,
  voteAverage: 7,
  overview:
    "Long ago in the mountains, a fighting master known as Gohan discovered a strange boy whom he named Goku. Gohan raised him and trained Goku in martial arts until he died. The young and very strong boy was on his own, but easily managed. Then one day, Goku met a teenage girl named Bulma, whose search for the dragon balls brought her to Goku's home. Together, they set off to find all seven dragon balls in an adventure.",
  posterPath: '/3wx3EAMtqnbSLhGG8NrqXriCUIQ.jpg'
}

storiesOf('media', module)
  .addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
  .add('Card', () => (
    <Box m="md">
      <Card {...media} />
    </Box>
  ))
