import {auth} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

const initializedSuccess = () => ({type:INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    const content={email: "alekseikoval69@gmail.com",password: "22446688al"}

    let promise = dispatch(auth(content));

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}

export default appReducer;