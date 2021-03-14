import React from 'react'

import {
  UserOptions,
} from '../molecules'

export const Template = ({ children }) => {
  return (
    <div>
      <UserOptions />
      {children}
    </div>
  )
}


