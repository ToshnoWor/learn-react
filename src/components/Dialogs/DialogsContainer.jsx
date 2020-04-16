import React from 'react';
import {createMessageActionCreator, updateNewMessageTextActionCreator}
from "../../redux/message-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

	let state = props.store.getState().messagesPage;

	let onCreateMessage = () => {
		props.store.dispatch(createMessageActionCreator());
	};

	let onChangeMessageText = (text) => {
		props.store.dispatch(updateNewMessageTextActionCreator(text));
	}

	return (<Dialogs
		updateNewMessageTextActionCreator={onChangeMessageText}
		createMessageActionCreator={onCreateMessage}
		messagesPage={state}
	/>)
};

export default DialogsContainer