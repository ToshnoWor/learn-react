import {userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_POST = 'SET_USER_POST';
const SAVE_STATUS = 'SAVE_STATUS';
const UPDATE_NEW_STATUS = 'UPDATE_NEW_STATUS';

let initialize = {
    profile: null,
    posts: null,
    //     [
    //     {id: 1, post: 'Hi, how are you?'},
    //     {id: 2, post: 'It\'s my first post'},
    //     {id: 3, post: 'Now using arrays'},
    //     {id: 4, post: 'As well as the map function'}
    // ],
    newPostText: '',
    newStatus: ''
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
        case UPDATE_NEW_STATUS:{
            return {
                ...state,
                newStatus: action.newStatus
            }}
        case SAVE_STATUS:
        {
            let newState = {
                ...state,
                profile: {...state.profile, status: state.newStatus},
                newStatus: ''
            };
            console.log(newState);
            return newState;
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
export const updateNewStatus = (newStatus) => ({ type: UPDATE_NEW_STATUS, newStatus})
export const saveStatusSuccess = () => ({type: SAVE_STATUS})

export const getProfile = (userId) => {
    return (dispatch) => {
        if (userId)
            userAPI.getProfile(userId).then(r => {
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
        userAPI.changeStatus(auth, newStatus)
            .then(status => {
                if(status === 200)
                    dispatch(saveStatusSuccess());
            });
    }
}

export default profileReducer;