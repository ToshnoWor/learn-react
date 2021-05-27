import React from 'react';
import s from './Header.module.css';
import logo from './img/site_logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return <header className={s.header}>
        <img src={logo} alt="=(" />
        <div className={s.siteName}>Site name</div>
        <div className={s.loginBlock}>
            { props.isAuth ? props.login :
            <NavLink to={'/login'}>Login</NavLink> }
        </div>
  </header>
}

export default Header;