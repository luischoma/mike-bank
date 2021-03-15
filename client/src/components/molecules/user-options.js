import React from 'react'
import PropTypes from 'prop-types'

import {
  Title,
  MenuButton
} from '../atoms'

import './user-options.scss'

export const UserOptions = ({ name = 'Josue' }) => {
  return (
    <div className='user-options'>
      <Title name={name} text='suas opções são:'/>

      <ul>
        <li>
          <MenuButton >
            Sacar
          </MenuButton>
        </li>
        <li>
          <MenuButton >
            Pagar
          </MenuButton>
        </li>
        <li>
          <MenuButton >
            Depositar
          </MenuButton>
        </li>
        <li>
          <MenuButton >
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