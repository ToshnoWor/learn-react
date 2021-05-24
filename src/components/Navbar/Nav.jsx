import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const  Nav = (props) => {
	return (
		<nav className={s.nav}>
			{props.auth.isAuth ?
				<div className={s.item}>
					<NavLink
						to={"/profile/" + props.auth.userId}
						activeClassName={s.activeLink}> Profile
					</NavLink>
				</div>
			:<></>
			}
			<div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Massages</NavLink></div>
			<div className={s.item}><NavLink to="/#" >News</NavLink></div>
			<div className={s.item}><NavLink to="/#" >Music</NavLink></div>
			<div className={s.item}><NavLink to="/users" >Users</NavLink></div>
			<div className={s.item}>
				<NavLink to="/friends" >My Friends</NavLink>
				<div className={s.divFriends}>
					<div className="MyFriends">One</div>
					<div className="MyFriends">Two</div>
					<div className="MyFriends">Three</div>
				</div>
			</div>
			<div className={s.item}><NavLink to="/#" >Settings</NavLink></div>
		</nav>
	)
};

export default Nav;