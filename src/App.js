import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
	return (
		<div className='app_wrapper'>
			<Header/>
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
			</div>
		</div>
	);
};

export default App;