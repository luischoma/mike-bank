import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

import './menu-button.scss'

// eslint-disable-next-line
export const MenuButton = ({ icon, path, children, onClick }) => {
  return (
    <div className="menu-button">
      <Link onClick={onClick} to={path} className="menu-button__option">
        {icon}
      </Link>
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