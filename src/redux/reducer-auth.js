import { stopSubmit } from "redux-form";
import { authAPI, profileAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET_LOGIN_DATA';
const SET_USER_AVATAR = 'auth/SET_USER_AVATAR';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userAvatar: null
}

const reducerAuth = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
                
            }
        case SET_USER_AVATAR:
            return {
                ...state,
                userAvatar: action.photo
            }      
        default:
            return state;
    }
};

export const setAuthUserDataAC = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
export const setUserAvatarAC = (photo) => ({ type: SET_USER_AVATAR, photo });

export const setAuthUserDataThunkCreator = () => (dispatch) => { 
     return authAPI.getAuthData()       
        .then(response => {             
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
}

export const setUserAvatar = (userId) => (dispatch) => {  
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserAvatarAC(data.photos.small))   // I wait that photo will appear when I download my photo on server
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
   
    authAPI.login(email, password, rememberMe)            // make post request
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserDataThunkCreator())   
            } else {
                let errorText 
                if (response.data.messages.length > 0) {errorText = response.data.messages[0]} 
                dispatch(stopSubmit('loginForm', {_error: errorText} ))
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
    .then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
        }
    })
} 

export default reducerAuth;

