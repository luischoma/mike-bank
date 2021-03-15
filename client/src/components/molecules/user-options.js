import React from 'react'
import PropTypes from 'prop-types'

import {
  Title,
  MenuButton
} from '../atoms'

import './user-options.scss'

export const UserOptions = ({ name }) => {
  return (
    <div className='user-options'>
      <Title name={name} text='suas opções são:'/>
      <ul>
        <li>
          <MenuButton icon='S' path='/withdrawal'>
            Sacar
          </MenuButton>
        </li>
        <li>
          <MenuButton icon='P' path='/payment'>
            Pagar
          </MenuButton>
        </li>
        <li>
          <MenuButton icon='D' path='/deposit'>
            Depositar
          </MenuButton>
        </li>
        <li>
          <MenuButton icon='E' path='/statement'>
            Extrato
          </MenuButton>
        </li>
      </ul>
    </div>
  )
}

UserOptions.propTypes = {
  name: PropTypes.string.isRequired
}