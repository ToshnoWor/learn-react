const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialize = {
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
        case ADD_POST:{
            let newPost = {
                id: 5,
                post: state.newPostText
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;}
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default :
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;