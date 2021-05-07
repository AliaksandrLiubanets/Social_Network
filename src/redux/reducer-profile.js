import { profileAPI, usersAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [

        { id: 1, message: 'Hi, How are you?', likesCount: 15, avatar: 'https://img0.liveinternet.ru/images/attach/c/3/84/342/84342334_Girls29563.jpg' }
    ],
    newPostText: 'newPostText',
    profile: null,
    status: ''
}

const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                avatar: 'https://www.meme-arsenal.com/memes/72e09695c1914bab6839f87a78110201.jpg',
            }

            return {                                       
                ...state,                                   
                newPostText: '',                            
                postsData: [...state.postsData, newPost]                                                                
            }                                               

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserProfileStatusAC = (status) => ({ type: SET_STATUS, status });

export const setUserProfileThunkCreator = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then( data => {                  
            dispatch(setUserProfileAC(data))
        })
}

export const getStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
        dispatch(setUserProfileStatusAC(response.data))
    })
}

export const updateStatusThunkCreator = (status) => (dispatch) => {    
    profileAPI.updateStatus(status)
    .then(response => {
        debugger;
        if(response.data.resultCode === 0) {
            dispatch(setUserProfileStatusAC(status))
        }
    })
}

export default reducerProfile;

