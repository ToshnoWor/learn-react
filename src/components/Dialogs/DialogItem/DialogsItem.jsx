import React from 'react';
import s from './../Dialogs.module.css';
//import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    //let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <div
                className={props.currentDialogs === props.id ? s.active : ''}
                onClick={() => {
                    props.selectCurrentDialog(props.id)
                }}>
                {props.name}
            </div>
        </div>
    )
};

export default DialogItem;