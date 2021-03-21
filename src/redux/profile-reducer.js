const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialize = {
    profile: null,
    posts: [
        {id: 1, post: 'Hi, how are you?'},
        {id: 2, post: 'It\'s my first post'},
        {id: 3, post: 'Now using arrays'},
        {id: 4, post: 'As well as the map function'}
    ],
    newPostText: ''
};

const profileReducer = (state = initialize, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
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
        default :
            return state;
    }
}

export const createPost = () => ({type: ADD_POST})
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile})
export const updateNewPostText = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;