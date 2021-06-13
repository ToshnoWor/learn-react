import {selectCurrentDialog, sendMessage, setMessage} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

function DialogsContainer(props) {
    return <Dialogs
        messagesPage={props.messagesPage}
        sendMessage={props.sendMessage}
        setMessage={props.setMessage}
        auth={props.auth}
        selectCurrentDialog={props.selectCurrentDialog}
    />
}

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        auth: state.auth
    }
};

export default compose(
    connect(mapStateToProps, {
        sendMessage,
        setMessage,
        selectCurrentDialog
    }),
    withAuthRedirect
)(DialogsContainer);