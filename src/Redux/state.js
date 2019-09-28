let rerenderEntireTree = () => {
	console.log('state is changed');
};

let state = {
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
};

window.state = state;

export const addPost = () => {
	let newPost = {
		id: 5,
		post: state.profilePage.newPostText
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
};

export const addMessage = (Message) => {
	let newMessage = {
		id: 6,
		message: Message
	};
	state.messagesPage.messages.push(newMessage);
	rerenderEntireTree(state);
};

export const updateNewPostText = (NewText) => {
	state.profilePage.newPostText = NewText;
	rerenderEntireTree(state);
};

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
};

export default state;