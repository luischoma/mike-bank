import React from 'react'

import './menu-button.scss'

export const MenuButton = ({ Icon, children }) => {
  return (  
    <div className="menu-button">
        <button className="menu-button__option">
            A
        </button>
        <p className="menu-button__description">
            {children}
        </p>
    </div>
    )
}