
import {createMessageActionCreator, updateNewMessageTextActionCreator}
    from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageTextActionCreator: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        createMessageActionCreator: () => {
            dispatch(createMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer