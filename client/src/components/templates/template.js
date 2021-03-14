import React from 'react'

import {
  UserOptions,
} from '../molecules'

import './template.scss'

export const Template = ({ className = '', children }) => {
  return (
    <div className={`template ${className}`}>
      <UserOptions />
      {children}
    </div>
  )
}


