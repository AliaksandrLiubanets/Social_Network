import {applyMiddleware, createStore} from 'redux';
import {combineReducers} from 'redux';
import reducerAuth from './reducer-auth';
import reducerDialogs from './reducer-dialogs';
import reducerProfile from './reducer-profile';
import reducerSidebar from './reducer-sidebar';
import reducerUsers from './reducer-users';
import thunkMiddleWare from 'redux-thunk'

let reducers = combineReducers({
    profilePage: reducerProfile,
    dialogsPage: reducerDialogs,
    sidebar: reducerSidebar,
    usersPage: reducerUsers,
    auth: reducerAuth,    
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
// getState();
// subscribe(observer);
// dispatch(action);


export default store; 
