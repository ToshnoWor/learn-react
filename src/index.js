import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Data Storage---------------------------------------------------------
let posts = [
	{id: 1, post: 'Hi, how are you?'},
	{id: 2, post: 'It\'s my first post'},
	{id: 3, post: 'Now using arrays'},
	{id: 4, post: 'As well as the map function'}
];
let dialogs = [
	{id: 1, name: 'one'},
	{id: 2, name: 'two'},
	{id: 3, name: 'three'},
	{id: 4, name: 'for'}
];
let messages = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'How is u feeling'},
	{id: 3, message: 'yo, how are you man'},
	{id: 4, message: 'fine'},
	{id: 5, message: 'cool'}
];
//---------------------------------------------------------------------
//FunctionElements-----------------------------------------------------
/*let postsElements = posts.map( p => <MyPost message={p.post} /> );*/
//---------------------------------------------------------------------

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
