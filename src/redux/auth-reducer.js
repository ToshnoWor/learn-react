import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'auth/TOGGLE_IS_FETCHING';
const LOGOUT = 'auth/LOGOUT';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    token: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case LOGOUT:
            return {
                ...initialState
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, token) =>
    ({type: SET_USER_DATA, data: {userId, email, login, token}});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const logout = () => ({type: LOGOUT});

export const auth = (data) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    try {
        const response = await authAPI.auth(data);
        const resultCode = response.data.resultCode ?? response.data.ressoltCode;

        if (resultCode === 0) {
            const {id, login, email, token} = response.data;
            dispatch(setAuthUserData(id, email, login, token));
            return resultCode;
        }

        if (response.data.field === "email") {
            dispatch(stopSubmit('login', {login: response.data.message}));
        }

        if (response.data.field === "password") {
            dispatch(stopSubmit('login', {pass: response.data.message}));
        }

        return resultCode;
    } finally {
        dispatch(toggleIsFetching(false));
    }
};

export const singUp = (data) => async (dispatch) => {
    const response = await authAPI.singUp(data);

    if (response.data.resultCode === 0) {
        const {_id, name, email, token} = response.data.item;
        dispatch(setAuthUserData(_id, email, name, token));
    }
};

export default authReducer;
