import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewPostText} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

/*addPost('New Message from state');*/

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state}
			     addPost={addPost}
			     addMessage={addMessage}
			     updateNewPostText={updateNewPostText}/>
		</BrowserRouter>, document.getElementById('root'));
};

