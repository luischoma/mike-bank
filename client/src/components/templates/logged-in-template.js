import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'

import {
  UserOptions,
} from '../molecules'


import './logged-in-template.scss'

export const LoggedInTemplate = ({ className = '', children }) => {
  const [userName, setUserName] = useState()

  // Couldn't make axios hook work properly with a GET so I used axios here instead
  useEffect(() => {
    axios.get('/user', {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem('mikeBankToken')}`
      }
    }).then((response) => {
      setUserName(response.data[0].name)
    })
  }, [])


  return (
    <div className={`logged-in-template ${className}`}>
      <UserOptions name={userName} />
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

