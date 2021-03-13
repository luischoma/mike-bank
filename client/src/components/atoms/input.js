import React from 'react'

import './input.scss'

export const Input = ({ textLabel }) => {
  return (  
    <div className="input">
        <label for={textLabel} className="input__label">
            {textLabel}
        </label>
        <input type="text" id={textLabel} className="input__textfield"/>
    </div>
    )
}