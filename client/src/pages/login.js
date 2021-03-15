import React from 'react'
import PropTypes from 'prop-types'

import useAxios from 'axios-hooks'

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

// eslint-disable-next-line
export const Login = ({ children }) => {
  const [
    ,
    executePost
  ] = useAxios(
    {
      url: '/user/login',
      method: 'POST'
    },
    { manual: true}
  )

  return (
    <div className='login'>
      <AnonymousTemplate className='login__template'>
        <PageTitle className='login__title' text='entrar' />
        <Form onSubmit={([login, password]) => executePost({data: {
          name: login[1],
          password: password[1]
        }})}>
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