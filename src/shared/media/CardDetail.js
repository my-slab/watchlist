import React from 'react'

import ISO6391 from 'iso-639-1'
import styled from 'styled-components'

import Absolute from '../../ui/Absolute'
import Text from '../../ui/Text'

function dateToYear(date) {
  return new Date(date).getFullYear()
}

function isoCodeToName(code) {
  return ISO6391.getName(code)
}

const S = {
  Absolute: styled(Absolute)`
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
  `
}

const CardDetail = ({
  firstAirDate = '',
  name = '',
  originalLanguage = ''
}) => (
  <S.Absolute bottom={8} mx="sm">
    <Text fontSize="2xl" variant="secondary" px="sm" pt="sm">
      {name}
    </Text>
    <Text fontSize="sm" variant="secondary" px="sm" pb="sm">
      {[
        firstAirDate.length > 0 && dateToYear(firstAirDate),
        originalLanguage.length > 0 && isoCodeToName(originalLanguage)
      ]
        .filter(e => e !== false)
        .join(' | ')}
    </Text>
  </S.Absolute>
)

CardDetail.displayName = 'CardDetail'
export default CardDetail
