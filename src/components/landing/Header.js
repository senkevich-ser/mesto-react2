import React from 'react';
import Logo from '../../images/logo_russia.svg'

export default function Header() {
   return (
      <header className="header wrapper">
         <img src={Logo} alt="логотип" className="header__logo" />
      </header>
   )
}