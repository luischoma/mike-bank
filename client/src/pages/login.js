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
        {/* This is done this way due to the fact that I look at the DOM to get exactly name and password
        and doing so I return an array of arrays, which contains [<fieldname>, <fieldvalue>] */}
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