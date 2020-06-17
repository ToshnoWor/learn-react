import React from 'react';
import Post from './Post/Post';
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let postsElements =
                    state.profilePage.posts.map(
                        p => <Post message={p.post}/>
                    );

                let onCreatePost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };

                return <MyPosts postsElements={postsElements}
                                createPost={onCreatePost}
                                updateNewPostText={onPostChange}
                                newPostText={state.profilePage.newPostText}
                />
            }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;