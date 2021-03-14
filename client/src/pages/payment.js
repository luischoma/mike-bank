import React from 'react'

import {
  Template,
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
      <Template className='payment__template'>
        <PageTitle className='payment__title' text='Pagamento' />
        <Form>
          <Input  textLabel='chave pix:'/>
          <Input textLabel='quantidade'/>
          <Button textButton='enviar'/>
        </Form>
      </Template>
    </div>
  )
}