import {sendMessage, updateNewMessageBody} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}
const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage
})(Dialogs);

export default DialogsContainer;