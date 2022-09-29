import React from 'react';
import s from './Header.module.css';
import logo from '../../img/Logo.png'

const Header: React.FC = () =>{


    return (
      <header className={s.header}>
      <div className={s.header_wrapper}>
      <div className={s.wrapper_logo}>
      <img className={s.logo} src={logo} alt="logo" />
      </div>
      </div>
    </header>
    )
}

export default Header;