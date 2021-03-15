import PropTypes from 'prop-types'
import React from 'react'

import './error-message.scss'

// eslint-disable-next-line
export const ErrorMessage = ({ className = '', text}) => {
  return (
    <p className='error-message'>
      {text}
    </p>
  )
}

ErrorMessage.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
}