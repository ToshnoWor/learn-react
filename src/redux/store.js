import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi, how are you?'},
                {id: 2, post: 'It\'s my first post'},
                {id: 3, post: 'Now using arrays'},
                {id: 4, post: 'As well as the map function'}
            ],
            newPostText: ''
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
        },
		sidebar: {}
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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagesPage = messageReducer(this._state.messagesPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}
};

export default store;
window.store = store;