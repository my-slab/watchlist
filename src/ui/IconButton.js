import React from 'react'

import { css } from '@styled-system/css'
import styled from 'styled-components'

import Button from './Button'

const S = {
  Button: styled(Button)`
    ${css({
      borderRadius: 'full',
      height: 48,
      width: 48,
      p: 0
    })}
  `
}

const IconButton = ({ icon, ...props }) => {
  const Icon = icon

  return (
    <S.Button {...props}>
      <Icon />
    </S.Button>
  )
}

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  ...Button.propTypes
}

export default IconButton
