import React from 'react'
import PropTypes from 'prop-types'

import {
  LogoHeader,
} from '../atoms'

import './anonymous-template.scss'

export const AnonymousTemplate = ({ className = '', children }) => {
  return (
    <div className={`anonymous-template ${className}`}>
      <LogoHeader />
      <div className='anonymous-template__body'>
        {children}
      </div>
    </div>
  )
}

AnonymousTemplate.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

