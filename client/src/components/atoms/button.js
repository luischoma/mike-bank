import React from 'react'

import './button.scss'

export const Button = ({ className = '', textButton, onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {textButton}
    </button>
  )
}
