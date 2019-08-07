import React, { useContext } from 'react'

import get from 'lodash.get'

import Gravatar from './Gravatar'
import IconAccount from '../../ui/icons/IconAccount'
import Text from '../../ui/Text'
import { AccountContext } from './AccountProvider'

const Avatar = () => {
  const account = useContext(AccountContext)
  const hash = get(account, 'avatar.gravatar.hash', undefined)

  return hash ? (
    <Gravatar hash={hash} />
  ) : (
    <Text fontSize="4xl" color="white" bg="none">
      <IconAccount />
    </Text>
  )
}

Avatar.displayName = 'Avatar'
export default Avatar
