import PropTypes from 'prop-types'
import React from 'react'

import './success-message.scss'

// eslint-disable-next-line
export const SuccessMessage = ({ className = '', text}) => {
  return (
    <p className='success-message'>
      {text}
    </p>
  )
}

SuccessMessage.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
}