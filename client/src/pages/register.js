import React from 'react'
import PropTypes from 'prop-types'

import {
  AnonymousTemplate,
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
  useRegister
} from '../hooks/use-register'

// eslint-disable-next-line
export const Register = ({ children }) => {
  const {
    error,
    executePost
  } = useRegister()

  return (
    <div className='register'>
      <AnonymousTemplate className='register__template'>
        <PageTitle className='register__title' text='cadastro' />
        <Form onSubmit={([login, password, balance]) => executePost({
          data: {
            name: login[1],
            password: password[1],
            balance: balance[1]
          }
        })}>
          <Input textLabel=' seu login'/>
          <Input textLabel='sua senha'/>
          <Input textLabel='quanto de dinheiro vc quer ter de início'/>

          {error && <ErrorMessage text='não sei dizer qual, mas algum campo é inválido' />}

          <Button textButton='cadastrar!'/>

        </Form>
      </AnonymousTemplate>
    </div>
  )
}

Register.propTypes = {
  children: PropTypes.node
}