import {messageAPI, profileAPI} from "../api/api";

const ADD_MESSAGE = 'ADD_MESSAGE';
const SET_DATA = 'messagePage/SET_DATA';
const ADD_DIALOG = 'messagePage/ADD_DIALOG';
const ADD_MESSAGE_FROM_DB = 'messagePage/ADD_MESSAGE_FROM_DB';
const SELECT_CURRENT_DIALOGS = 'messagePage/SELECT_CURRENT_DIALOGS';

let initialize = {
    dialogs: [
        {id: 1, name: 'test2', _id: '#'}
        /*{id: 1, name: 'one'},
        {id: 2, name: 'two'},
        {id: 3, name: 'three'},
        {id: 4, name: 'for'}*/
    ],
    messagesBox: [
        {id: 1, messages: [{id:0, message: ['Hi'], recipient: 'me'}] }
        /*{id: 1, message: 'Hi'},
        {id: 2, message: 'How is u feeling'},
        {id: 3, message: 'yo, how are you man'},
        {id: 4, message: 'fine'},
        {id: 5, message: 'cool'}*/
    ],
    currentDialogs: 0
};

const messageReducer = (state = initialize, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: action.text}]
            };
        case ADD_DIALOG:
            return {
                ...state,
                dialogs: [...state.dialogs, action.data],
                messagesBox: [...state.messagesBox, {id: action.data.id, messages: []}]
            }
        case ADD_MESSAGE_FROM_DB:
            let dialogs = [...state.messagesBox].map((v) => {
                if (v.id === action.data.idDialogs) {
                    return {
                        id: v.id,
                        messages: [...v.messages, {
                            id: action.data.id,
                            message: action.data.message,
                            recipient: action.data.recipient
                        }],
                    }
                }
                return v;
            });
            return {
                ...state,
                messagesBox: dialogs
            }
        case SELECT_CURRENT_DIALOGS:
            return {
                ...state,
                currentDialogs: action.data.id
            }
        case SET_DATA:
            return {
                ...state,

            }
        default :
            return state;

    }
}

export const sendMessage = (text) => ({type: ADD_MESSAGE, text})
//const setMessageSuccess = (data) => ({type: SET_DATA, data})
const addDialog = (data) => ({type: ADD_DIALOG, data})
const addMessageFromDB = (data) => ({type: ADD_MESSAGE_FROM_DB, data})
const selectCurrentDialogAC = (data) => ({type: SELECT_CURRENT_DIALOGS, data})

export const setMessage = (data) => async (dispatch) => {
    let resData = await messageAPI.getMessage({
        config: {
            headers: {
                'auth-token': data.token
            }
        }
    });

    if (resData?.resultCode === 0) {
        resData.data.map(async (value, index) => {
            let name = await profileAPI.getProfile(value.idRecipient);
            dispatch(addDialog({_id: value.idRecipient, id: index, name: name.data.profile.name}));
            // eslint-disable-next-line no-unused-expressions
            value.messagesArray.map((value2, index2) => {
                dispatch(addMessageFromDB({id: index2, message: value2.message, idDialogs: index, recipient: value2.recipient}));
                return value2;
            })
            return value;
        });
        // eslint-disable-next-line no-unused-expressions
        /*resData.data[0].messagesArray.map((value, index) => {
            dispatch(addMessageFromDB({id: index, message: value.message}));
            return value;
        })*/
    }

}

export const selectCurrentDialog = (data) => (dispatch) =>{
    dispatch(selectCurrentDialogAC({id: data}));
}

export default messageReducer;