import React from 'react'

import './menu-button.scss'

export const MenuButton = ({ Icon, children, onClick }) => {
  return (  
    <div className="menu-button">
      <button onClick={onClick} className="menu-button__option">
            A
      </button>
      <p className="menu-button__description">
        {children}
      </p>
    </div>
  )
}