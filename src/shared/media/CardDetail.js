import React from 'react'

import ISO6391 from 'iso-639-1'

import Absolute from '../../ui/Absolute'
import Text from '../../ui/Text'

function dateToYear(date = new Date()) {
  return new Date(date).getFullYear()
}

function isoCodeToName(code) {
  return ISO6391.getName(code)
}

const S = {
  Absolute: styled(Absolute)`
    -webkit-box-orient: vertical;
    display: -webkit-box;
    line-clamp: 2;
    overflow: hidden;
  `
}

const CardDetail = ({ firstAirDate, name, originalLanguage }) => (
  <S.Absolute bottom={8}>
    <Text fontSize="2xl">{name}</Text>
    <Text fontSize="sm">
      {[dateToYear(firstAirDate), isoCodeToName(originalLanguage)].join(' | ')}
    </Text>
  </S.Absolute>
)

CardDetail.displayName = 'CardDetail'
export default CardDetail
