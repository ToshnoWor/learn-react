import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    accessToken: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.token
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) =>
    ({type: SET_USER_DATA, data: {userId, email, login}});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setAccessToken = (token) => ({type: SET_ACCESS_TOKEN, token})

export const auth = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authAPI.auth().then(r => {
            let {id, login, email} = r.data;
            dispatch(setAuthUserData(id,email,login));
            dispatch(setAccessToken(r.data.token));
            dispatch(toggleIsFetching(false));
        });
    }
}

export default authReducer;