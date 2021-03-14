import React from 'react'

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