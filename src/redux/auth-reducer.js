import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
const LOGOUT = 'LOGOUT';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    token: null
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
                token: action.token
            }
        case LOGOUT:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, token) =>
    ({type: SET_USER_DATA, data: {userId, email, login, token}})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const logout = () => ({type: LOGOUT})

export const auth = (data) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        return authAPI.auth(data).then(r => {
            if (r.data.ressoltCode === 0) {
                let {id, login, email} = r.data;
                dispatch(setAuthUserData(id,email,login, r.data.token));
                dispatch(toggleIsFetching(false));
                return r.data.ressoltCode;
            }
            if (r.data.field === "email"){
                let action = stopSubmit('login',{login: r.data.message});
                dispatch(action);
                return r.data.ressoltCode;
            }
            if (r.data.field === "password"){
                let action = stopSubmit('login',{pass: r.data.message});
                dispatch(action);
                return r.data.ressoltCode;
            }
        });
    }
}

export default authReducer;