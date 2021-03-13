import React from 'react'

import './button.scss'

export const Button = ({ children, onClick }) => {
 return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
 )
}
