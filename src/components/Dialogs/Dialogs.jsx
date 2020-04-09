import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import button from '../cssModule/button.module.css'
import {createMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

	let state = props.store.getState().messagesPage;

	let dialogsElements = state.dialogs.map(dialog =>
		<DialogItem name={dialog.name} id={dialog.id}/>
		);
	let messagesElements = state.messages.map(message => <Message message={message.message}/>);
	let newMessageText = state.newMessageText;

	//let newMessageElement = React.createRef();

	let createMessage = () => {
		//let text = newMessageElement.current.value;
		//props.dispatch({type: 'ADD-MESSAGE', Message: text});
		props.store.dispatch(createMessageActionCreator());
		//newMessageElement.current.value = "";
	};

	let changeMessageText = (e) => {
		let text = e.target.value;
		//let text = newMessageElement.current.value;
		console.log(text);
		props.store.dispatch(updateNewMessageTextActionCreator(text));
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
						//ref={newMessageElement}
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