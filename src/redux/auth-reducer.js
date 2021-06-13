import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'auth/TOGGLE_IS_FETCHING';
const LOGOUT = 'auth/LOGOUT';

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

export const auth = (data) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let r = await authAPI.auth(data);

    if (r.data.ressoltCode === 0) {
        let {id, login, email} = r.data;
        dispatch(setAuthUserData(id,email,login, r.data.token));
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

    dispatch(toggleIsFetching(false));
}

export const singUp = (data) => async (dispatch) => {
    let res = await authAPI.singUp(data);
    if (res.data.resultCode === 0) {
        let {_id, name, email, token} = res.data.item;
        dispatch(setAuthUserData(_id,email,name,token));
    }
}

export default authReducer;