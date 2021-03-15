import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import {
  LoggedInTemplate,
} from '../components/templates'

import {
  PageTitle,
  Input,
  Button,
  ErrorMessage,
  SuccessMessage
} from '../components/atoms'

import {
  Form
} from '../components/organisms'

import {
  useTransaction
} from '../hooks/use-transaction'

// eslint-disable-next-line
export const Withdrawal = ({ children }) => {
  const [dataState, setDataState] = useState()
  const [errorState, setErrorState] = useState()


  const {
    data,
    error,
    executePost
  } = useTransaction()


  useEffect(() => {
    if (data) {
      setDataState(true)
      setErrorState(false)
    }

    if (error) {
      setDataState(false)
      setErrorState(true)
    }
  },[data, error])

  return (
    <div className='withdrawal'>
      <LoggedInTemplate className='withdrawal__template'>
        <PageTitle className='withdrawal__title' text='Retirar' />
        <Form onSubmit={([amount]) => executePost({
          data: {
            kind: 'WITHDRAWAL',
            amount: -Math.abs(parseInt(amount[1]))
          },
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem('mikeBankToken')}`
          }
        })}>
          <Input textLabel='quantidade'/>
          {dataState && <SuccessMessage text='você sacou seu dinheiro com sucesso' />}
          {/* TODO: Redirect automatically :( */}
          {errorState && <ErrorMessage text='não foi possível processar seu pagamento. talvez você precise logar novamente.' />}
          <Button textButton='retirar'/>
        </Form>
      </LoggedInTemplate>
    </div>
  )
}

Withdrawal.propTypes = {
  children: PropTypes.node
}