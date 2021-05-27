import {sendMessage, updateNewMessageBody} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
};

export default compose(
    connect(mapStateToProps, {
        updateNewMessageBody,
        sendMessage
    }),
    withAuthRedirect
)(Dialogs);