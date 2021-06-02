import {profileAPI, userAPI} from "../api/api";

const REFRESH_DATA = 'REFRESH_DATA';
const ADD_FRIEND = 'ADD_FRIEND';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    userId: null,
    friends: [],
    login: null,
    isAuth: false,
    isFetching: false,
    token: null
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type){
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
                friends:  [...state.friends].filter(p =>{
                    return p !== action.p;
                })
            }
        default:
            return state;
    }
}

export const refreshFriends = () =>
    ({type: REFRESH_DATA });
export const addFriend = (friend) => ({type: ADD_FRIEND, friend});
export const unfollowSuccess = (p) => ({type: UNFOLLOW, p});

export const getFriends = (userId) => {
    return (dispatch) => {
        dispatch(refreshFriends());
        if (userId)
            profileAPI.getProfile(userId).then(r => {
                if (r.status === 200)
                    r.data[0].followers.map( p => {
                        profileAPI.getProfile(p).then(r2 =>{
                            dispatch(addFriend(r2.data[0]));
                            }
                        )
                        return p;
                    })
            });
    }
}

export const unfollow = (auth, p) => {
    return (dispatch) => {
        userAPI.unfollow(auth, p._id).then(r => {
            if (r.status === 200){
                dispatch(unfollowSuccess(p));
            }
        });
    }
}

export default friendsReducer;