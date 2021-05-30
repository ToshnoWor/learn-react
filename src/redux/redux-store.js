import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import friendsReducer from "./friends-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    friendsPage: friendsReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;