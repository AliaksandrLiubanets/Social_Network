import {createStore} from 'redux';
import {combineReducers} from 'redux';
import reducerDialogs from './reducer-dialogs';
import reducerProfile from './reducer-profile';
import reducerSidebar from './reducer-sidebar';

let reducers = combineReducers({
    profilePage: reducerProfile,
    dialogsPage: reducerDialogs,
    sidebar: reducerSidebar
})

let store = createStore(reducers);

export default store;
