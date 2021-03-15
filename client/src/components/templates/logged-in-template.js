import React from 'react'
import PropTypes from 'prop-types'

import {
  UserOptions,
} from '../molecules'

import './logged-in-template.scss'

export const LoggedInTemplate = ({ className = '', children }) => {
  return (
    <div className={`logged-in-template ${className}`}>
      <UserOptions />
      <div className='logged-in-template__body'>
        {children}
      </div>
    </div>
  )
}

LoggedInTemplate.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

