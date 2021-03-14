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


export const Payment = ({ children }) => {
  return (
    <div className='payment'>
      <LoggedInTemplate className='payment__template'>
        <PageTitle className='payment__title' text='Pagamento' />
        <Form>
          <Input  textLabel='chave pix:'/>
          <Input textLabel='quantidade'/>
          <Button textButton='enviar'/>
        </Form>
      </LoggedInTemplate>
    </div>
  )
}