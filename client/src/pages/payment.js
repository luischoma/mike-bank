import React from 'react'
import PropTypes from 'prop-types'

import {
  LoggedInTemplate,
} from '../components/templates'

import {
  PageTitle,
  Input,
  Button,
  ErrorMessage
} from '../components/atoms'

import {
  Form
} from '../components/organisms'

import {
  useTransaction
} from '../hooks/use-transaction'

// eslint-disable-next-line
export const Payment = ({ children }) => {
  const {
    error,
    executePost
  } = useTransaction()

  return (
    <div className='payment'>
      <LoggedInTemplate className='payment__template'>
        <PageTitle className='payment__title' text='Pagamento' />
        <Form onSubmit={([amount]) => executePost({
          data: {
            amount: -Math.abs(parseInt(amount[1]))
          },
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem('mikeBankToken')}`
          }
        })}>
          <Input textLabel='quantidade'/>

          {/* TODO: Redirect automatically :( */}
          {error && <ErrorMessage text='não foi possível processar seu pagamento. talvez você precise logar novamente.' />}

          <Button textButton='pagar'/>
        </Form>
      </LoggedInTemplate>
    </div>
  )
}

Payment.propTypes = {
  children: PropTypes.node
}