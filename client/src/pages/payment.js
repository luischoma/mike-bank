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

// eslint-disable-next-line
export const Payment = ({ children }) => {
  return (
    <div className='payment'>
      <LoggedInTemplate className='payment__template'>
        <PageTitle className='payment__title' text='Pagamento' />
        <Form>
          <Input  textLabel='chave pix'/>
          <Input textLabel='quantidade'/>
          <Button textButton='enviar'/>
        </Form>
      </LoggedInTemplate>
    </div>
  )
}

Payment.propTypes = {
  children: PropTypes.node
}