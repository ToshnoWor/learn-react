import React from 'react';
import s from './CreatePost.module.css'
import button from '../../../cssModule/button.module.css'


const CreatePost = (props) => {

	let newPostElement = React.createRef();

	let createPost = () => {
		debugger;
		let text = newPostElement.current.value;
		props.addPost(text);
	};

	return (
		<div className={s.Create_post}>
			<textarea ref={newPostElement} placeholder='Your new post' />
			<button onClick={createPost}>Send
			</button>
		</div>
	)
};

export default CreatePost;