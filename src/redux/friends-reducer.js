import {profileAPI, userAPI} from "../api/api";

const REFRESH_DATA = 'friends/REFRESH_DATA';
const ADD_FRIEND = 'friends/ADD_FRIEND';
const UNFOLLOW = 'friends/UNFOLLOW';

let initialState = {
    userId: null,
    friends: [],
    login: null,
    isAuth: false,
    isFetching: false,
    token: null
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REFRESH_DATA:
            return {
                ...state,
                friends: []
            }
        case ADD_FRIEND:
            return {
                ...state,
                friends: [...state.friends, action.friend]
            }
        case UNFOLLOW:
            return {
                ...state,
                friends: [...state.friends].filter(p => {
                    return p !== action.p;
                })
            }
        default:
            return state;
    }
}

export const refreshFriends = () => ({type: REFRESH_DATA});
export const addFriend = (friend) => ({type: ADD_FRIEND, friend});
export const unfollowSuccess = (p) => ({type: UNFOLLOW, p});

export const getFriends = (userId) => async (dispatch) => {
    let r = {};
    let r2 = {};
    dispatch(refreshFriends());

    if (userId)
        r = await profileAPI.getProfile(userId);
    if (r.status === 200)
        r.data.profile.followers.map(async p => {
            r2 = await profileAPI.getProfile(p);
            dispatch(addFriend(r2.data.profile));
            return p;
        })
}

export const unfollow = (auth, p) => async (dispatch) => {
    let r = await userAPI.unfollow(auth, p._id);
    if (r?.data?.ressoltCode === 0) {
        dispatch(unfollowSuccess(p));
    }
}

export default friendsReducer;