import React from 'react'
import PropTypes from 'prop-types'

import {
  LoggedInTemplate,
} from '../components/templates'

import {
  PageTitle,
  Input,
  Button
} from '../components/atoms'

import {
  Form
} from '../components/organisms'


export const Deposit = ({ children }) => {
  return (
    <div className='deposit'>
      <LoggedInTemplate className='deposit__template'>
        <PageTitle className='deposit__title' text='Depósito' />
        <Form>
          <Input textLabel='quantidade'/>
          <Button textButton='depositar'/>
        </Form>
      </LoggedInTemplate>
    </div>
  )
}

Deposit.propTypes = {
  children: PropTypes.node
}