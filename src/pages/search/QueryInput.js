import React from 'react'

import Input from '../../ui/Input'

const QueryInput = ({ query, onChange }) => (
  <Input
    type="search"
    name="query"
    width="full"
    placeholder="Search TV shows"
    value={query}
    onChange={({ target: { value } }) => onChange(value)}
  />
)

QueryInput.displayName = 'QueryInput'
export default QueryInput
