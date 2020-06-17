import React from 'react';
import s from './MyPosts.module.css'
import button from "../../cssModule/button.module.css";

const MyPosts = (props) => {
    let newPostElement = React.createRef();

	let onCreatePost = () => {
		props.createPost();
	};

	let onPostChange = () =>{
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};

    return (
        <div className={s.my_posts}>
            My posts
            <div className={s.Create_post}>
			<textarea onChange={onPostChange}
                      ref={newPostElement}
                      placeholder='Your new post'
                      value={props.newPostText}/>
                <button onClick={onCreatePost}>Send
                </button>
            </div>
            <div className={s.posts}>
                {props.postsElements}
            </div>
        </div>
    )
};

export default MyPosts;