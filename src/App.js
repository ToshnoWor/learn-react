import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
	return (
		<div className='app_wrapper'>
			<Header/>
			<Nav/>
			<div className='app_wrapper-content'>
				<Route path='/profile'
				       render={() =>
						   <Profile
							   postsElements={props.postsElements}
							   /*store={props.store}*/
						   />
				       }
				/>
				<Route path='/dialogs'
				       render={() =>
						   <DialogsContainer
							/*store={props.store}*/
						   />
				       }
				/>
			</div>
		</div>
	);
};

export default App;