import React from 'react';
import s from './MyPosts.module.css'
import button from "../../cssModule/button.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength255 =  maxLength(255);

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field
            component={Textarea}
            name={'post'}
            validate={[requiredField, maxLength255]}
        />
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
        postsElements = a.map((p, number) => {
            return <Post key={number}
                         postId={number}
                         message={p}
                         removePost={props.removePost}
                         auth={props.auth}
            />
        });

	let onSubmit = (data) =>{
        props.addPost(props.auth, data.post);
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