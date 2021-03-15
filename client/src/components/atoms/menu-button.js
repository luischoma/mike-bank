import React from 'react'
import PropTypes from 'prop-types'

import './menu-button.scss'

export const MenuButton = ({ Icon, children, onClick }) => {
  return (
    <div className="menu-button">
      <button onClick={onClick} className="menu-button__option">
      </button>
      <p className="menu-button__description">
        {children}
      </p>
    </div>
  )
}

MenuButton.propTypes = {
  Icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}