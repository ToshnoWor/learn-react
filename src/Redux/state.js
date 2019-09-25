let state = {
	profilePage:{
		posts: [
			{id: 1, post: 'Hi, how are you?'},
			{id: 2, post: 'It\'s my first post'},
			{id: 3, post: 'Now using arrays'},
			{id: 4, post: 'As well as the map function'}
		],
	},
	messagesPage:{
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

export let addPost = (postMessage) => {
	debugger;
	let newPost = {
		id: 5,
		post: postMessage
	};
	state.profilePage.posts.push(newPost);
};

export default state;