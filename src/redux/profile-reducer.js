const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_POST = 'SET_USER_POST';

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
                nextId: action.posts.length
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

export default profileReducer;