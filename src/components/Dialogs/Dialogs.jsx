import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import button from '../cssModule/button.module.css'

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
	let messagesElements = props.state.messages.map(message => <Message message={message.message}/>);

	let newPostElement = React.createRef();

	let createPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	};

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
			<div className={s.newMessage}>
				<textarea ref={newPostElement} placeholder='Enter your message' />
				<div>
					<button onClick={createPost}>Enter</button>
				</div>
			</div>
		</div>
	)
};

export default Dialogs