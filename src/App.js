import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import store from "./Redux/state";

const App = (props) => {
	return (
		<div className='app_wrapper'>
			<Header/>
			<Nav/>
			<div className='app_wrapper-content'>
				<Route path='/profile'
				       render={() => <Profile
					       profilePage={props.state.profilePage}
					       addPost={props.addPost}
					       updateNewPostText={props.updateNewPostText}/>  }/>
				<Route path='/dialogs'
				       render={() => <Dialogs
					       state={props.state.messagesPage}
					       addMessage={props.addMessage}/>}/>
			</div>
		</div>
	);
};

export default App;