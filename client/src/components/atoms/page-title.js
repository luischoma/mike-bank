import React from 'react'
import PropTypes from 'prop-types'

import './page-title.scss'

export const PageTitle = ({ className = '', text }) => {
  return (
    <h1 className={`page-title ${className}`}> {text} </h1>
  )
}

PageTitle.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
}