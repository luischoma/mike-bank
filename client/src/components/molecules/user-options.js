import React from 'react'

import {
  MenuButton
} from '../atoms'

import './user-options.scss'

export const UserOptions = () => {
  return (
    <div className='user-options'>
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


