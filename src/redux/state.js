const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?'},
                {id: 2, post: 'It\'s my first post'},
                {id: 3, post: 'Now using arrays'},
                {id: 4, post: 'As well as the map function'}
            ],
            newPostText: 'Your new post'
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'one'},
                {id: 2, name: 'two'},
                {id: 3, name: 'three'},
                {id: 4, name: 'for'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is u feeling'},
                {id: 3, message: 'yo, how are you man'},
                {id: 4, message: 'fine'},
                {id: 5, message: 'cool'}
            ],
			newMessageText: ""
        }
    },
	_callSubscriber() {
		console.log('state is changed');
	},

	getState(){
    	return this._state;
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	},

	dispatch(action){
    	if (action.type === ADD_POST){
			let newPost = {
				id: 5,
				post: this._state.profilePage.newPostText
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		}
    	else if (action.type === UPDATE_NEW_POST_TEXT){
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
    	else if (action.type === ADD_MESSAGE){
			let text = this._state.messagesPage.newMessageText;
			this._state.messagesPage.newMessageText = '';
			this._state.messagesPage.messages.push({id: 6, message: text});
			this._callSubscriber(this._state);
		}
    	else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
			this._state.messagesPage.newMessageText = action.newText;
			this._callSubscriber(this._state);
		}
	}
};
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const createMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
	({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default store;
window.store = store;