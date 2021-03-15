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

// eslint-disable-next-line
export const Register = ({ children }) => {
  return (
    <div className='register'>
      <AnonymousTemplate className='register__template'>
        <PageTitle className='register__title' text='cadastro' />
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

Register.propTypes = {
  children: PropTypes.node
}