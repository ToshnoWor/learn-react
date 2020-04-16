const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialize = {
    dialogs: [
        {id: 1, name: 'one'},
        {id: 2, name: 'two'},
        {id: 3, name: 'three'},
        {id: 4, name: 'for'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is u feeling'},
        {id: 3, message: 'yo, how are you man'},
        {id: 4, message: 'fine'},
        {id: 5, message: 'cool'}
    ],
    newMessageText: ""
};

const messageReducer = (state = initialize, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 6, message: text});
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default :
            return state;

    }
}

export const createMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default messageReducer;