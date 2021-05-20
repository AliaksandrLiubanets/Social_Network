import { authAPI } from "../api/api"

const SET_SUBMITED_DATA = 'SET_SUBMITED_DATA'
const SET_USERID_AUTH = 'SET_USERID_AUTH'

let initialState = {
    data: {},
    userId: null
}

let reducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUBMITED_DATA:
            return {
                ...state,
                data: action.data
            }

        case SET_USERID_AUTH:
            return {
                ...state,
                userId: action.userId
            }
        default: return state
    }
}

export const setSubmitedData = (email, password, rememberMe) => ({ type: SET_SUBMITED_DATA, data: {email, password, rememberMe} })

const setUserIdAuth = (userId) => ({ type: SET_USERID_AUTH, userId })

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setUserIdAuth(response.data.userId))
            }
        })
}

export default reducerLogin