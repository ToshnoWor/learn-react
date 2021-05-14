import React from 'react';
import s from './MyPosts.module.css'
import button from "../../cssModule/button.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements;
    let a = props.posts;
    if(a!=null)
        postsElements = a.map((p, id) => <Post key={id} message={p}/>);

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
                {postsElements !== "undefined" ? postsElements : ""}
            </div>
        </div>
    )
};

export default MyPosts;