import React from 'react';
import s from './Header.module.css';
import logo from './img/site_logo.png'
import {NavLink} from "react-router-dom";

class Header extends React.Component{
    Logout = () =>{
        this.props.logout();
    }
    render(){
        return <header className={s.header}>
            <img src={logo} alt="=(" />
            <div className={s.siteName}>Site name</div>
            <div className={s.loginBlock}>
                { this.props.isAuth
                    ? (<>
                        <div>{this.props.login}</div>
                        <button onClick={this.Logout}>Log out</button>
                    </> )
                    :<div>
                        <NavLink to={'/login'}>Login</NavLink>
                        <NavLink to={'/sing-up'}>Sing Up</NavLink>
                </div>
                }
            </div>
        </header>
    }
}

export default Header;