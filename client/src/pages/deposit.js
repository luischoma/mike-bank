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
export const Deposit = ({ children }) => {
  const {
    error,
    executePost
  } = useTransaction()

  return (
    <div className='deposit'>
      <LoggedInTemplate className='deposit__template'>
        <PageTitle className='deposit__title' text='Depósito' />
        <Form onSubmit={([amount]) => executePost({
          data: {
            kind: 'DEPOSIT',
            amount: Math.abs(parseInt(amount[1]))
          },
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem('mikeBankToken')}`
          }
        })}>
          <Input textLabel='quantidade'/>

          {error && <ErrorMessage text='não foi possível processar seu pagamento. talvez você precise logar novamente.' />}
          <Button textButton='depositar'/>
        </Form>
      </LoggedInTemplate>
    </div>
  )
}

Deposit.propTypes = {
  children: PropTypes.node
}