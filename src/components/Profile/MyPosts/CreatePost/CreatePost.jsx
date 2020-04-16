import React from 'react';
import s from './CreatePost.module.css';
import button from '../../../cssModule/button.module.css';





const CreatePost = (props) => {
	let newPostElement = React.createRef();

	let onCreatePost = () => {
		props.createPost();
	};

	let onPostChange = () =>{
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};

	return (
		<div className={s.Create_post}>
			<textarea onChange={onPostChange}
			          ref={newPostElement}
			          placeholder='Your new post'
			          value={props.newPostText} />
			<button onClick={onCreatePost}>Send
			</button>
		</div>
	)
};

export default CreatePost;