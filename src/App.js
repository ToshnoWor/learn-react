import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import store from "./redux/state";

const App = (props) => {
	return (
		<div className='app_wrapper'>
			<Header/>
			<Nav/>
			<div className='app_wrapper-content'>
				<Route path='/profile'
				       render={() =>
						   <Profile
							   profilePage={props.state.profilePage}
							   dispatch={props.dispatch}
						   />  }/>
				<Route path='/dialogs'
				       render={() =>
						   <Dialogs
					       	state={props.state.messagesPage}
						   	dispatch={props.dispatch}
						   />}/>
			</div>
		</div>
	);
};

export default App;