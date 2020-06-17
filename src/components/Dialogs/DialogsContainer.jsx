import React from 'react';
import {createMessageActionCreator, updateNewMessageTextActionCreator}
    from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().messagesPage;

                let onCreateMessage = () => {
                    store.dispatch(createMessageActionCreator());
                };

                let onChangeMessageText = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }
                return <Dialogs
                    updateNewMessageTextActionCreator={onChangeMessageText}
                    createMessageActionCreator={onCreateMessage}
                    messagesPage={state}
                />
            }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer