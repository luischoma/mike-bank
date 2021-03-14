import React from 'react'

import {
  Title
} from '../atoms'

import {
  UserOptions
} from '../molecules'

import './header.scss'

export const Header = () => {
  return (
    <div className='header'>
      <Title name={'Josue'} />

      <UserOptions />
    </div>
  )
}


