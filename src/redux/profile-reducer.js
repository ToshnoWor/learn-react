import {profileAPI} from "../api/api";
import {reset} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_DATA = 'profile/SET_USER_DATA';
//const SET_USER_POST = 'SET_USER_POST';
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
        case SET_USER_DATA:
            let {profile, posts} = action.data;
            return {
                ...state,
                profile: profile,
                posts: posts,
                nextId: posts
                    ? posts.length
                    : 0
            };
        /*case SET_USER_POST:
            return {
                ...state,
                posts: action.posts,
                nextId: action.posts ? action.posts.length : 0
            }*/
        case SAVE_STATUS: {
            return {
                ...state,
                profile: {...state.profile, status: action.status}
            };
        }
        case SAVE_AGE: {
            return {
                ...state,
                profile: {...state.profile, age: action.age}
            };
        }
        case SAVE_TYPE: {
            return {
                ...state,
                profile: {...state.profile, type: action.typeValue}
            };
        }
        case SAVE_CITY: {
            return {
                ...state,
                profile: {...state.profile, city: action.city}
            };
        }
        case SAVE_USER_NAME: {
            return {
                ...state,
                profile: {...state.profile, name: action.name}
            };
        }
        case DELETE_POST: {
            let newPosts = [...state.posts];
            newPosts.splice(action.postId, 1);
            return {
                ...state,
                posts: newPosts
            };
        }
        default :
            return state;
    }
}

export const createPost = (newPost) => ({type: ADD_POST, newPost})
export const setUserData = (data) =>
    ({type: SET_USER_DATA, data})
/*export const setUserPosts = (posts) =>({ type: SET_USER_POST, posts: posts})*/
export const saveStatusSuccess = (status) => ({type: SAVE_STATUS, status})
const saveAgeSuccess = (age) => ({type: SAVE_AGE, age})
const saveTypeSuccess = (typeValue) => ({type: SAVE_TYPE, typeValue})
const saveCitySuccess = (city) => ({type: SAVE_TYPE, city})
const saveNameSuccess = (name) => ({type: SAVE_TYPE, name})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getProfile = (userId) => async (dispatch) => {
    let r = {};

    if (userId)
        r = await profileAPI.getProfile(userId);

    dispatch(setUserData({profile: r.data.profile, posts: r.data.posts}));
}

export const saveStatus = (auth, newStatus) => async (dispatch) => {
    let data = null;
    let status = null;
    if (auth.isAuth) {
        data = {
            auth: auth,
            content: {
                status: newStatus
            },
            config: {
                headers: {
                    'auth-token': auth.token
                }
            }
        }
        status = await profileAPI.changeStatus(data);
        if (status === 200)
            dispatch(saveStatusSuccess(newStatus));
    }
}

export const saveAge = (auth, newAge) => async (dispatch) => {
    let data = null;
    let status = null;
    if (auth.isAuth) {
        data = {
            auth: auth,
            content: {
                age: newAge
            },
            config: {
                headers: {
                    'auth-token': auth.token
                }
            }
        }
        status = await profileAPI.changeAge(data);
        if (status === 0) {
            dispatch(saveAgeSuccess(newAge));
        }
    }
}

export const saveType = (auth, newType) => async (dispatch) => {
    let data = null;
    let status = null;
    if (auth.isAuth) {
        data = {
            auth: auth,
            value: 'type',
            content: {
                type: newType
            },
            config: {
                headers: {
                    'auth-token': auth.token
                }
            }
        }
        status = await profileAPI.changeValue(data);
        if (status === 0) {
            dispatch(saveTypeSuccess(newType));
        }
    }
}

export const saveCity = (auth, newCity) => async (dispatch) => {
    let data = null;
    let status = null;
    if (auth.isAuth) {
        data = {
            auth: auth,
            value: 'city',
            content: {
                city: newCity
            },
            config: {
                headers: {
                    'auth-token': auth.token
                }
            }
        }
        status = await profileAPI.changeValue(data);
        if (status === 0) {
            dispatch(saveCitySuccess(newCity));
        }
    }
}

export const saveName = (auth, newName) => async (dispatch) => {
    let data = null;
    let status = null;
    if (auth.isAuth) {
        data = {
            auth: auth,
            value: 'name',
            content: {
                name: newName
            },
            config: {
                headers: {
                    'auth-token': auth.token
                }
            }
        }
        status = await profileAPI.changeValue(data);
        if (status === 0) {
            dispatch(saveNameSuccess(newName));
        }
    }
}

export const addPost = (auth, post) => async (dispatch) => {
    let resultCode = null;
    if (auth.isAuth) {
        resultCode = await profileAPI.addPost({
            config: {
                headers: {
                    'auth-token': auth.token
                }
            },
            content: {
                post
            }
        })
        if (resultCode === 0) {
            dispatch(createPost(post));
            dispatch(reset('post'));
        }
    }
}
export const removePost = (auth, postId) => async (dispatch) => {
    let resultCode = null;
    if (auth.isAuth) {
        resultCode = await profileAPI.removePost({
            config: {
                headers: {
                    'auth-token': auth.token
                }
            },
            id: postId
        });
        if (resultCode === 0) {
            dispatch(deletePost(postId));
        }
    }
}

export default profileReducer;