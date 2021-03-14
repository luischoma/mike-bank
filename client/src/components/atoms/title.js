import React from 'react'

import './title.scss'

export const Title = ({ name }) => {
  return (  
    <div className="title">
        <p className="title__name">
            {name}
        </p>
        <p className="title__description">
            suas opções são:
        </p>
    </div>
    )
}