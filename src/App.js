import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {
	return (
		<div className='app_wrapper'>
			<Header/>
			<Nav/>
			<div className='app_wrapper-content'>
				<Route path='/profile'
				       render={() => <Profile
					       state={props.state.profilePage}
					       addPost={props.addPost}/>}/>
				<Route path='/dialogs'
				       render={() => <Dialogs
					       state={props.state.messagesPage}/>}/>
			</div>
		</div>
	);
};

export default App;