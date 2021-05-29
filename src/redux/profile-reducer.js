import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_POST = 'SET_USER_POST';
const SAVE_STATUS = 'SAVE_STATUS';

let initialize = {
    profile: null,
    posts: null,
    //     [
    //     {id: 1, post: 'Hi, how are you?'},
    //     {id: 2, post: 'It\'s my first post'},
    //     {id: 3, post: 'Now using arrays'},
    //     {id: 4, post: 'As well as the map function'}
    // ],
    newPostText: ''
};

const profileReducer = (state = initialize, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, state.newPostText],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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
        default :
            return state;
    }
}

export const createPost = () => ({type: ADD_POST})
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})
export const updateNewPostText = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserPosts = (posts) =>({ type: SET_USER_POST, posts: posts})
export const saveStatusSuccess = (status) => ({type: SAVE_STATUS, status})

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
                        'auth-token': auth.accessToken
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

export default profileReducer;