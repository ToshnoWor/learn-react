import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import button from '../cssModule/button.module.css'
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

	let state = props.messagesPage;

	let dialogsElements = state.dialogs.map(d =>
		<DialogItem name={d.name} key={d.id} id={d.id}/>
		);
	let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
	let newMessageText = state.newMessageText;


	let createMessage = () => {
		props.sendMessage();
	};

	let changeMessageText = (e) => {
		let text = e.target.value;
		props.updateNewMessageBody(text)
	}

	if (!props.isAuth) return <Redirect to={"/login"} />;

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