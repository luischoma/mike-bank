import React from 'react'

import './title.scss'

export const Title = ({ name, text }) => {
  return (
    <div className="title">
      <p className="title__name">
        {`${name},`}
      </p>
      <p className="title__description">
        {text}
      </p>
    </div>
  )
}