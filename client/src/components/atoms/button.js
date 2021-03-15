import PropTypes from 'prop-types'
import React from 'react'

import './button.scss'

export const Button = ({ className = '', textButton, onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {textButton}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  textButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}