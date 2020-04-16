import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator}
	from "../../../../redux/profile-reducer";
import CreatePost from "./CreatePost";





const CreatePostContainer = (props) => {
	let state = props.store.getState();

	let onCreatePost = () => {
		props.store.dispatch(addPostActionCreator());
	};

	let onPostChange = (text) =>{
		let action = updateNewPostTextActionCreator(text);
		props.store.dispatch(action);
	};

	return (
		<CreatePost
			updateNewPostText={onPostChange}
			createPost={onCreatePost}
			newPostText={state.profilePage.newPostText}
		/>
	)
};

export default CreatePostContainer;