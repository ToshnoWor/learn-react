import React from 'react';
import s from './MyPosts.module.css'
import MyPost from './Post/MyPost';
import CreatePost from './CreatePost/CreatePost';
import store from "../../../redux/state";

const MyPosts = (props) => {

	let postsElements = props.posts.map(p => <MyPost message={p.post}/>);

	return (
		<div className={s.my_posts}>
			My posts
			<CreatePost
			            newPostText={props.newPostText}
						dispatch={props.dispatch}
			/>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
};

export default MyPosts;