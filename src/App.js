import React from 'react';
import './App.css';
import Nav from './components/Navbar/Nav';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";

const App = () => {
	return (
		<div className='app_wrapper'>
			<HeaderContainer />
			<Nav/>
			<div className='app_wrapper-content'>
				<Route path='/profile/:userId?'
				       render={() =>
						   <ProfileContainer />
				       }
				/>
				<Route path='/dialogs'
				       render={() =>
						   <DialogsContainer />
				       }
				/>
				<Route path='/users'
					   render={() =>
						   <UsersContainer />
					   }
				/>
				<Route path='/friends'
					   render={() =>
						   <FriendsContainer />
					   }
				/>
			</div>
		</div>
	);
};

export default App;