const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const messageReducer = (state = initialize, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length+1, message: action.text}]
            };
        default :
            return state;

    }
}

export const sendMessage = (text) => ({type: ADD_MESSAGE, text})

export default messageReducer;