import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SET_POST_MESSAGE = 'profile/SET_POST_MESSAGE';
const SET_INITIALIZE_PROFILE = 'profile/SET_INITIALIZE_PROFILE';

let initialState = {
    postsData: [

        { id: 1, message: 'Hi, How are you?', likesCount: 15, avatar: 'https://img0.liveinternet.ru/images/attach/c/3/84/342/84342334_Girls29563.jpg' },
        { id: 2, message: 'Hi, ?', likesCount: 5, avatar: 'https://img0.liveinternet.ru/images/attach/c/3/84/342/84342334_Girls29563.jpg' },
        { id: 3, message: 'Hi you?', likesCount: 1, avatar: 'https://img0.liveinternet.ru/images/attach/c/3/84/342/84342334_Girls29563.jpg' }
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

const setUserProfileThunkCreator = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)

    dispatch(setUserProfileAC(data))
}

const getStatusThunkCreator = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)

    dispatch(setUserProfileStatusAC(response.data))
}

export const updateStatusThunkCreator = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setUserProfileStatusAC(status))
    }
}

export const initializeProfile = (userId) => async (dispatch) => {
    await dispatch(getStatusThunkCreator(userId))
    await dispatch(setUserProfileThunkCreator(userId))
    dispatch(setInitializeProfile())
}

export default reducerProfile;

