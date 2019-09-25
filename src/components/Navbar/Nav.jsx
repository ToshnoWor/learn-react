import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
			<div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Massages</NavLink></div>
			<div className={s.item}><NavLink>News</NavLink></div>
			<div className={s.item}><NavLink>Music</NavLink></div>
			<div className={s.item}>
				<NavLink >My Friends</NavLink>
				<div className={s.divFriends}>
					<div className="MyFriends">One</div>
					<div className="MyFriends">Two</div>
					<div className="MyFriends">Three</div>
				</div>
			</div>
			<div className={s.item}><NavLink>Settings</NavLink></div>
		</nav>
	)
};

export default Nav;