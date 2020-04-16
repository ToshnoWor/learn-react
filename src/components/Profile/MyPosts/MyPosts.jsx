import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import CreatePostContainer from "./CreatePost/CreatePostContainer";

const MyPosts = (props) => {
	debugger
	let postsElements =
		props.store.getState().profilePage.posts.map(
			p => <Post message={p.post}/>
			)
	;

	return (
		<div className={s.my_posts}>
			My posts
			<CreatePostContainer
				store={props.store}
			/>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
};

export default MyPosts;