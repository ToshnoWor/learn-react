import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import button from '../cssModule/button.module.css'
import {createMessageCreator} from "../../redux/state";

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
	let messagesElements = props.state.messages.map(message => <Message message={message.message}/>);

	let newMessageElement = React.createRef();

	let createMessage = () => {
		let text = newMessageElement.current.value;
		//props.dispatch({type: 'ADD-MESSAGE', Message: text});
		props.dispatch(createMessageCreator(text));
		newMessageElement.current.value = '';
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
				<textarea ref={newMessageElement} placeholder='Enter your message' />
				<div>
					<button onClick={createMessage}>Enter</button>
				</div>
			</div>
		</div>
	)
};

export default Dialogs