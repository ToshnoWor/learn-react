import {profileAPI} from "../api/api";
import {reset} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_POST = 'SET_USER_POST';
const SAVE_STATUS = 'SAVE_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_AGE = 'SAVE_AGE';
const SAVE_TYPE = 'SAVE_TYPE';
const SAVE_CITY = 'SAVE_CITY';
const SAVE_USER_NAME = 'SAVE_USER_NAME';

let initialize = {
    profile: null,
    posts: null
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
                profile: {...state.profile, status: action.status}
            };
        }
        case SAVE_AGE:
        {
            return {
                ...state,
                profile: {...state.profile, age: action.age}
            };
        }
        case SAVE_TYPE:
        {
            return {
                ...state,
                profile: {...state.profile, type: action.typeValue}
            };
        }
        case SAVE_CITY:
        {
            return {
                ...state,
                profile: {...state.profile, city: action.city}
            };
        }
        case SAVE_USER_NAME:
        {
            return {
                ...state,
                profile: {...state.profile, name: action.name}
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
const saveAgeSuccess = (age) => ({type: SAVE_AGE, age})
const saveTypeSuccess = (typeValue) => ({type: SAVE_TYPE, typeValue})
const saveCitySuccess = (city) => ({type: SAVE_TYPE, city})
const saveNameSuccess = (name) => ({type: SAVE_TYPE, name})
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

export const saveAge = (auth, newAge) => {
    return (dispatch) => {
        let data = null;
        if (auth.isAuth){
            data = {
                auth: auth,
                content: {
                    age: newAge
                },
                config:{
                    headers: {
                        'auth-token': auth.token
                    }
                }
            }
            profileAPI.changeAge(data).then(
                status => {
                    if (status===0){
                        dispatch(saveAgeSuccess(newAge));
                    }
                }
            )
        }
    }
}

export const saveType = (auth, newType) => {
    return (dispatch) => {
        let data = null;
        if (auth.isAuth){
            data = {
                auth: auth,
                value: 'type',
                content: {
                    type: newType
                },
                config:{
                    headers: {
                        'auth-token': auth.token
                    }
                }
            }
            profileAPI.changeValue(data).then(
                status => {
                    if (status===0){
                        dispatch(saveTypeSuccess(newType));
                    }
                }
            )
        }
    }
}

export const saveCity = (auth, newCity) => {
    return (dispatch) => {
        let data = null;
        if (auth.isAuth){
            data = {
                auth: auth,
                value: 'city',
                content: {
                    city: newCity
                },
                config:{
                    headers: {
                        'auth-token': auth.token
                    }
                }
            }
            profileAPI.changeValue(data).then(
                status => {
                    if (status===0){
                        dispatch(saveCitySuccess(newCity));
                    }
                }
            )
        }
    }
}

export const saveName = (auth, newName) => {
    return (dispatch) => {
        let data = null;
        if (auth.isAuth){
            data = {
                auth: auth,
                value: 'name',
                content: {
                    name: newName
                },
                config:{
                    headers: {
                        'auth-token': auth.token
                    }
                }
            }
            profileAPI.changeValue(data).then(
                status => {
                    if (status===0){
                        dispatch(saveNameSuccess(newName));
                    }
                }
            )
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