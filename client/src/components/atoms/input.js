import React from 'react'
import PropTypes from 'prop-types'

import snakeCase from 'lodash/snakeCase'

import './input.scss'

export const Input = ({ className = '', textLabel }) => {
  return (
    <div className={`input ${className}`}>
      <label htmlFor={snakeCase(textLabel)} className="input__label">
        {textLabel}
      </label>
      <input type="text" id={snakeCase(textLabel)} className="input__textfield"/>
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  textLabel: PropTypes.string.isRequired
}