import React from 'react'

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


export const Register = ({ children }) => {
  return (
    <div className='login'>
      <AnonymousTemplate className='login__template'>
        <PageTitle className='login__title' text='cadastro' />
        <Form>
          <Input textLabel=' seu login'/>
          <Input textLabel='sua senha'/>
          <Input textLabel='quanto de dinheiro vc quer ter de início'/>

          <Button textButton='cadastrar!'/>
        </Form>
      </AnonymousTemplate>
    </div>
  )
}