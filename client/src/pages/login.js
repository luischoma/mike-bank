import React from 'react'
import PropTypes from 'prop-types'

import {
  AnonymousTemplate,
} from '../components/templates'

import {
  PageTitle,
  Input,
  Button
} from '../components/atoms'

import {
  Form
} from '../components/organisms'


export const Login = ({ children }) => {
  return (
    <div className='login'>
      <AnonymousTemplate className='login__template'>
        <PageTitle className='login__title' text='entrar' />
        <Form onSubmit={login}>
          <Input textLabel='login'/>
          <Input textLabel='senha'/>

          <Button textButton='foi'/>
          <a href='google.com'> não tem conta? registre-se</a>
        </Form>
      </AnonymousTemplate>
    </div>
  )
}

Login.propTypes = {
  children: PropTypes.node
}