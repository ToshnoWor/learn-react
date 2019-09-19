import React from 'react';
import s from './Header.module.css';
import logo from './img/site_logo.png'

const Header = () =>{
    return <header className={s.header}>
    <img src={logo} alt="" />
    <div>Site name</div>
  </header>
}

export default Header;