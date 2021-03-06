import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength, requiredField} from "../../utils/validators/validators";

const maxLength255 = maxLength(255);

const MessageFrom = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component={Textarea}
                name={'message'}
                placeholder='Enter your message'
                validate={[requiredField, maxLength255]}
            />
        </div>
        <div>
            <button>Enter</button>
        </div>
    </form>
}

const MessageReduxForm = reduxForm({
    form: 'message'
})(MessageFrom)

class Dialogs extends React.Component {

    componentDidMount() {
        this.props.setMessage(this.props.auth);
    }

    state = {
        ...this.props.messagesPage
    }
    createMessage = (data) => {
        this.props.sendMessage(data.message);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props)
            this.setState({
                ...this.props.messagesPage,
                newMessageText: ''
            })
    }

    render() {
        //console.log(this.state.messagesBox[this.state.currentDialogs]);
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {this.state.dialogs.map(d =>
                        <DialogItem name={d.name}
                                    key={d.id}
                                    id={d.id}
                                    currentDialogs={this.state.currentDialogs}
                                    selectCurrentDialog={this.props.selectCurrentDialog}
                        />
                    )}
                </div>
                <div className={s.messages}>
                    {
                        this.state.messagesBox.length > 0
                            ? this.state.messagesBox[this.state.currentDialogs].messages
                                .map(m => <Message message={m.message} key={m.id} recipient={m.recipient}/>)
                            : ''
                    }
                </div>
                <div className={s.newMessage}>
                    <MessageReduxForm onSubmit={this.createMessage}/>
                </div>
            </div>
        )
    }
}

export default Dialogs