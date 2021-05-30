import {sendMessage} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

class DialogsContainer extends React.Component{

    render() {
        return <Dialogs
            messagesPage={this.props.messagesPage}
            sendMessage={this.props.sendMessage}
        />
    }
}

let mapStateToProps = (state) => {


    return {
        messagesPage: state.messagesPage
    }
};

export default compose(
    connect(mapStateToProps, {
        sendMessage
    }),
    withAuthRedirect
)(DialogsContainer);