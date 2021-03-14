import React from 'react'

import './form.scss'

export const Form = ({ children }) => {
  return (
    <form className='form'>
      {children}
    </form>
  )
}


