import React from 'react'

import MikeLogo from '../../components/assets/logo.svg'

import './logo-header.scss'

export const LogoHeader = () => {
  return (
    <div className='logo-header'>
      <div className='logo-header__name'>M I K E</div>
      <img alt= 'Mike Logo' src={MikeLogo} className='logo-header__logo'></img>
    </div>
  )
}


