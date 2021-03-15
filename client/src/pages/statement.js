import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'

import {
  LoggedInTemplate,
} from '../components/templates'

import {
  PageTitle,
  Statement as StatementList
} from '../components/atoms'

import './statement.scss'

// eslint-disable-next-line
export const Statement = ({ children }) => {
  const [userBalance, setUserBalance] = useState()
  const [userStatements, setUserStatements] = useState()

  // Couldn't make axios hook work properly with a GET so I used axios here instead
  useEffect(() => {
    axios.get('/user', {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem('mikeBankToken')}`
      }
    }).then((response) => {
      setUserBalance(response.data[0].balance)
    })

    axios.get('/transaction/user', {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem('mikeBankToken')}`
      }
    }).then((response) => {
      setUserStatements(response.data)
    })
  }, [])

  return (
    <div className='statement'>
      <LoggedInTemplate className='statement__template'>
        <PageTitle className='statement__title' text='Extrato' />
        {/* TODO: This should be an atom */}
        <p className='statement__description'>seu saldo é</p>
        <p className={`statement__balance statement__balance${userBalance > 0 ? '--positive' : '--negative' }`}>
          {`R$${userBalance}`}
        </p>
        {userStatements && <StatementList statements={userStatements} />}
      </LoggedInTemplate>
    </div>
  )
}

Statement.propTypes = {
  children: PropTypes.node
}