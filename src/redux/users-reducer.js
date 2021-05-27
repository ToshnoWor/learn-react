import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 2,
    totalUserCount: 7,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u._id===action.userId)
                        return {...u, followed: true}
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u._id===action.userId)
                        return {...u, followed: false}
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUserCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUser = (currentPage, pageSize, auth) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsersTotalCount(data.totalDocs));
            if (auth.isAuth){
                userAPI.getProfile(auth.userId).then(r => {
                    let followed = r.data[0].followers;
                    data.docs.map(u =>{
                        u.followed = !!followed.includes(u._id);
                        return u;
                    });
                    dispatch(setUsers(data.docs));
                });
            }
            else {
                //console.log(data)
                dispatch(setUsers(data.docs));
            }
        });

    }
}

export const follow = (id, auth) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        userAPI.follow(auth, id)
            .then(r => {
                if (r.status === 200){
                    dispatch(followSuccess(id));
                }
                dispatch(toggleFollowingProgress(false, id));
            });
    }
}
export const unfollow = (id, auth) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        userAPI.unfollow(auth, id)
            .then(r => {
                if (r.status === 200){
                    dispatch(unfollowSuccess(id));
                }
                dispatch(toggleFollowingProgress(false, id));
            });
    }
}

export default usersReducer;