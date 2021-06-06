import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_POST_MESSAGE = 'SET_POST_MESSAGE';
const SET_INITIALIZE_PROFILE = 'SET_INITIALIZE_PROFILE';

let initialState = {
    postsData: [

        { id: 1, message: 'Hi, How are you?', likesCount: 15, avatar: 'https://img0.liveinternet.ru/images/attach/c/3/84/342/84342334_Girls29563.jpg' }
    ],

    profile: null,
    status: '',
    isInitialized: false
}

const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
                avatar: 'https://www.meme-arsenal.com/memes/72e09695c1914bab6839f87a78110201.jpg',
            }

            return {
                ...state,
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

        case SET_POST_MESSAGE:
            return {
                ...state,
                postMessage: action.message
            }

        case SET_INITIALIZE_PROFILE:
            return {
                ...state,
                isInitialized: true
            }

        default:
            return state;
    }
};

export const addPostActionCreator = (postText) => ({ type: ADD_POST, newPostText: postText });
export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserProfileStatusAC = (status) => ({ type: SET_STATUS, status });
export const setPostMessageAC = (message) => ({ type: SET_POST_MESSAGE, message })
export const setInitializeProfile = () => ({ type: SET_INITIALIZE_PROFILE })

const setUserProfileThunkCreator = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfileAC(data))
        })
}

const getStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserProfileStatusAC(response.data))
        })
}

export const updateStatusThunkCreator = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserProfileStatusAC(status))
            }
        })
}

export const initializeProfile = (userId) => (dispatch) => {
    let promiseSetStatus = dispatch(getStatusThunkCreator(userId))
    let promiseUserProfile = dispatch(setUserProfileThunkCreator(userId))
    Promise.all([promiseSetStatus, promiseUserProfile])
        .then(() => {
            dispatch(setInitializeProfile())
        })
}

export default reducerProfile;

