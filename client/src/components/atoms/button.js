import PropTypes from 'prop-types'
import React from 'react'

import './button.scss'

export const Button = ({ className = '', textButton }) => {
  return (
    <button className={`button ${className}`}>
      {textButton}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  textButton: PropTypes.string.isRequired
}