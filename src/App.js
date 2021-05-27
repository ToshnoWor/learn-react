import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import NavContainer from "./components/Navbar/NavContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = () => {
	return (
		<div className='app_wrapper'>
			<HeaderContainer />
			<NavContainer/>
			<div className='app_wrapper-content'>
				<Route path='/profile/:userId?'
				       render={() => <ProfileContainer /> } />
				<Route path='/dialogs'
				       render={() => <DialogsContainer /> } />
				<Route path='/users'
					   render={() => <UsersContainer /> } />
				<Route path='/friends'
					   render={() => <FriendsContainer /> } />
				<Route path='/login'
					   render={() => <LoginContainer /> } />
			</div>
		</div>
	);
};

export default App;