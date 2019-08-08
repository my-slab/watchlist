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
    line-clamp: 2;
    overflow: hidden;
  `
}

const CardDetail = ({ firstAirDate, name, originalLanguage }) => (
  <S.Absolute bottom={8} mx="sm">
    <Text fontSize="2xl" variant="secondary">
      {name}
    </Text>
    <Text fontSize="sm" variant="secondary">
      {[dateToYear(firstAirDate), isoCodeToName(originalLanguage)].join(' | ')}
    </Text>
  </S.Absolute>
)

CardDetail.displayName = 'CardDetail'
export default CardDetail
