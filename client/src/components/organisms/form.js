import React from 'react'
import PropTypes from 'prop-types'

import './form.scss'



export const Form = ({ children, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault()

    const normalizedForm =  Array.from(event).filter(
      (target) => target.tagName === "INPUT"
    ).map(
      (target) => [target.id, target.value]
    )

    onSubmit(normalizedForm)
  }


  return (
    <form className='form' onSubmit={handleSubmit}>
      {children}
    </form>
  )
}


Form.propTypes = {
  children: PropTypes.node
}