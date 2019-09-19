import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
	let path = "/dialogs/" + props.id;

	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) =>{
    return(
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<Dialog name="1" id="1"/>
				<Dialog name="2" id="2"/>
				<Dialog name="3" id="3"/>
			</div>
			<div className={s.messages}>
				<Message message="Hi" />
				<Message message="How is u feeling" />
				<Message message="yo" />
			</div>
		</div>
	)
}

export default Dialogs