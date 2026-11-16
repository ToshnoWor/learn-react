import {profileAPI} from "../api/api";
import {reset} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_DATA = 'profile/SET_USER_DATA';
const SAVE_STATUS = 'SAVE_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_AGE = 'SAVE_AGE';
const SAVE_TYPE = 'SAVE_TYPE';
const SAVE_CITY = 'SAVE_CITY';
const SAVE_USER_NAME = 'SAVE_USER_NAME';

const initialize = {
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
        case SET_USER_DATA: {
            const {profile, posts} = action.data;
            return {
                ...state,
                profile,
                posts,
                nextId: posts ? posts.length : 0
            };
        }
        case SAVE_STATUS:
            return {
                ...state,
                profile: {...state.profile, status: action.status}
            };
        case SAVE_AGE:
            return {
                ...state,
                profile: {...state.profile, age: action.age}
            };
        case SAVE_TYPE:
            return {
                ...state,
                profile: {...state.profile, type: action.typeValue}
            };
        case SAVE_CITY:
            return {
                ...state,
                profile: {...state.profile, city: action.city}
            };
        case SAVE_USER_NAME:
            return {
                ...state,
                profile: {...state.profile, name: action.name}
            };
        case DELETE_POST: {
            const posts = [...state.posts];
            posts.splice(action.postId, 1);
            return {
                ...state,
                posts
            };
        }
        default:
            return state;
    }
};

export const createPost = (newPost) => ({type: ADD_POST, newPost});
export const setUserData = (data) => ({type: SET_USER_DATA, data});
export const saveStatusSuccess = (status) => ({type: SAVE_STATUS, status});
export const saveAgeSuccess = (age) => ({type: SAVE_AGE, age});
export const saveTypeSuccess = (typeValue) => ({type: SAVE_TYPE, typeValue});
export const saveCitySuccess = (city) => ({type: SAVE_CITY, city});
export const saveNameSuccess = (name) => ({type: SAVE_USER_NAME, name});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getProfile = (userId) => async (dispatch) => {
    if (!userId) {
        dispatch(setUserData({profile: null, posts: null}));
        return;
    }

    const response = await profileAPI.getProfile(userId);
    dispatch(setUserData({
        profile: response?.data?.profile,
        posts: response?.data?.posts
    }));
};

export const saveStatus = (auth, newStatus) => async (dispatch) => {
    if (!auth.isAuth) {
        return;
    }

    const status = await profileAPI.changeStatus({
        content: {status: newStatus},
        config: {
            headers: {
                'auth-token': auth.token
            }
        }
    });

    if (status === 200) {
        dispatch(saveStatusSuccess(newStatus));
    }
};

export const saveAge = (auth, newAge) => async (dispatch) => {
    if (!auth.isAuth) {
        return;
    }

    const resultCode = await profileAPI.changeAge({
        content: {age: newAge},
        config: {
            headers: {
                'auth-token': auth.token
            }
        }
    });

    if (resultCode === 0) {
        dispatch(saveAgeSuccess(newAge));
    }
};

export const saveType = (auth, newType) => async (dispatch) => {
    if (!auth.isAuth) {
        return;
    }

    const resultCode = await profileAPI.changeValue({
        value: 'type',
        content: {type: newType},
        config: {
            headers: {
                'auth-token': auth.token
            }
        }
    });

    if (resultCode === 0) {
        dispatch(saveTypeSuccess(newType));
    }
};

export const saveCity = (auth, newCity) => async (dispatch) => {
    if (!auth.isAuth) {
        return;
    }

    const resultCode = await profileAPI.changeValue({
        value: 'city',
        content: {city: newCity},
        config: {
            headers: {
                'auth-token': auth.token
            }
        }
    });

    if (resultCode === 0) {
        dispatch(saveCitySuccess(newCity));
    }
};

export const saveName = (auth, newName) => async (dispatch) => {
    if (!auth.isAuth) {
        return;
    }

    const resultCode = await profileAPI.changeValue({
        value: 'name',
        content: {name: newName},
        config: {
            headers: {
                'auth-token': auth.token
            }
        }
    });

    if (resultCode === 0) {
        dispatch(saveNameSuccess(newName));
    }
};

export const addPost = (auth, post) => async (dispatch) => {
    if (!auth.isAuth) {
        return;
    }

    const resultCode = await profileAPI.addPost({
        config: {
            headers: {
                'auth-token': auth.token
            }
        },
        content: {
            post
        }
    });

    if (resultCode === 0) {
        dispatch(createPost(post));
        dispatch(reset('post'));
    }
};

export const removePost = (auth, postId) => async (dispatch) => {
    if (!auth.isAuth) {
        return;
    }

    const resultCode = await profileAPI.removePost({
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
};

export default profileReducer;
