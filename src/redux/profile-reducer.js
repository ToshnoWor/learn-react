import {profileAPI} from "../api/api";
import {reset} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_POST = 'SET_USER_POST';
const SAVE_STATUS = 'SAVE_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialize = {
    profile: null,
    posts: null,
    //     [
    //     {id: 1, post: 'Hi, how are you?'},
    //     {id: 2, post: 'It\'s my first post'},
    //     {id: 3, post: 'Now using arrays'},
    //     {id: 4, post: 'As well as the map function'}
    // ],
};

const profileReducer = (state = initialize, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.newPost]
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_POST:
            return {
                ...state,
                posts: action.posts,
                nextId: action.posts ? action.posts.length : 0
            }
        case SAVE_STATUS:
        {
            return {
                ...state,
                profile: {...state.profile, status: action.status},
                newStatus: ''
            };
        }
        case DELETE_POST:
        {
            state.posts.splice(action.postId, 1);
            return {
                ...state,
                posts: [...state.posts]
            };
        }
        default :
            return state;
    }
}

export const createPost = (newPost) => ({type: ADD_POST, newPost})
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})
export const setUserPosts = (posts) =>({ type: SET_USER_POST, posts: posts})
export const saveStatusSuccess = (status) => ({type: SAVE_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getProfile = (userId) => {
    return (dispatch) => {
        if (userId)
            profileAPI.getProfile(userId).then(r => {
                dispatch(setUserProfile(r.data[0]));
                dispatch(setUserPosts(r.data[0].posts));
            });
        if (userId!==null) {
            dispatch(setUserProfile(null));
            dispatch(setUserPosts(null));
        }
    }
}

export const saveStatus = (auth, newStatus) => {
    return (dispatch) => {
        let data = null;
        if (auth.isAuth){
            data = {
                auth: auth,
                content: {
                    status: newStatus
                },
                config:{
                    headers: {
                        'auth-token': auth.token
                    }
                }
            }
            profileAPI.changeStatus(data)
                .then(status => {
                    if(status === 200)
                        dispatch(saveStatusSuccess(newStatus));
                });
        }
    }
}

export const addPost = (auth, post) => {
    return (dispatch) => {
        if (auth.isAuth){
            profileAPI.addPost({
                config: {
                    headers: {
                        'auth-token': auth.token
                    }
                },
                content: {
                    post
                }
            })
                .then(resultCode => {
                    if (resultCode === 0){
                        dispatch(createPost(post));
                        dispatch(reset('post'));
                    }
                });
        }
    }
}
export const removePost = (auth, postId) =>{
    return (dispatch) => {
        if (auth.isAuth){
            profileAPI.removePost({
                config: {
                    headers: {
                        'auth-token': auth.token
                    }
                },
                id: postId
            })
                .then(resultCode => {
                    if (resultCode === 0){
                        dispatch(deletePost(postId));
                    }
                })
        }
    }
}

export default profileReducer;