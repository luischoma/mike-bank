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


export const Withdrawal = ({ children }) => {
  return (
    <div className='withdrawal'>
      <LoggedInTemplate className='withdrawal__template'>
        <PageTitle className='withdrawal__title' text='Retirar' />
        <Form>
          <Input textLabel='quantidade'/>
          <Button textButton='retirar'/>
        </Form>
      </LoggedInTemplate>
    </div>
  )
}