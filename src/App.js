import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app_wrapper'>
				<Header/>
				<Nav/>
				<div className='app_wrapper-content'>
					<Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
					<Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;