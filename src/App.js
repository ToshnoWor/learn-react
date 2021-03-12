import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
	return (
		<div className='app_wrapper'>
			<Header/>
			<Nav/>
			<div className='app_wrapper-content'>
				<Route path='/profile'
				       render={() =>
						   <Profile />
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