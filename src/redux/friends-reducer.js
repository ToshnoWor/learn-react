const REFRESH_DATA = 'REFRESH_DATA';
const ADD_FRIEND = 'ADD_FRIEND';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    userId: null,
    friends: [],
    login: null,
    isAuth: false,
    isFetching: false,
    accessToken: null
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
export const unfollow = (p) => ({type: UNFOLLOW, p});


export default friendsReducer;