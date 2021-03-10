import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import button from '../cssModule/button.module.css'

const Dialogs = (props) => {

	let state = props.messagesPage;

	let dialogsElements = state.dialogs.map(dialog =>
		<DialogItem name={dialog.name} id={dialog.id}/>
		);
	let messagesElements = state.messages.map(message => <Message message={message.message}/>);
	let newMessageText = state.newMessageText;


	let createMessage = () => {
		props.sendMessage();
	};

	let changeMessageText = (e) => {
		let text = e.target.value;
		props.updateNewMessageBody(text)
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
			<div className={s.newMessage}>
				<div>
					<textarea
						onChange={changeMessageText}
						value={newMessageText}
						placeholder='Enter your message'
					/>
				</div>
				<div>
					<button onClick={createMessage}>Enter</button>
				</div>
			</div>
		</div>
	)
};

export default Dialogs