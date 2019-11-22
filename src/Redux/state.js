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
            ]
        }
    },
	getState(){
    	return this._state;
	},
	_callSubscriber() {
		console.log('state is changed');
	},
	addPost () {
		let newPost = {
			id: 5,
			post: this._state.profilePage.newPostText
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	addMessage (Message) {
		let newMessage = {
			id: 6,
			message: Message
		};
		this._state.messagesPage.messages.push(newMessage);
		this._callSubscriber(this._state);
	},
	updateNewPostText (NewText) {
		this._state.profilePage.newPostText = NewText;
		this._callSubscriber(this._state);
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	}
};


export default store;
window.store = store;