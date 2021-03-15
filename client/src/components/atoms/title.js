import React from 'react'
import PropTypes from 'prop-types'

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

Title.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}