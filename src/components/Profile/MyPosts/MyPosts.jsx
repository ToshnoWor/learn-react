import React from 'react';
import s from './MyPosts.module.css'
import button from "../../cssModule/button.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={'textarea'}
                  name={'post'}
                  placeholder='Your new post'/>
        <button>Add post</button>
    </form>
}

const PostReduxForm = reduxForm({
    form: 'post'
})(PostForm)

const MyPosts = (props) => {
    let postsElements;
    let a = props.posts;
    if(a!=null && a!== 'undefined')
        postsElements = a.map((p, id) => <Post key={id} message={p}/>);

	let onSubmit = (data) =>{
        props.createPost(data.post);
    }
    return (
        <div className={s.my_posts}>
            Posts
            {props.isAuth
                ? <div className={s.Create_post}>
                    <PostReduxForm onSubmit={onSubmit}/>
                </div>
                : <></>}
            <div className={s.posts}>
                {postsElements !== "undefined" ? postsElements : ""}
            </div>
        </div>
    )
};

export default MyPosts;