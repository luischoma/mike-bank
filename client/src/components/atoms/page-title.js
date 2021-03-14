import React from 'react'

import './page-title.scss'

export const PageTitle = ({ className = '', text }) => {
  return (
    <h1 className={`page-title ${className}`}> {text} </h1>
  )
}