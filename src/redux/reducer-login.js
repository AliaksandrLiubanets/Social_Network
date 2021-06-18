const SET_SUBMITED_DATA = 'login/SET_SUBMITED_DATA'

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

       default: return state
    }
}

export const setSubmitedData = (email, password, rememberMe) => ({ type: SET_SUBMITED_DATA, data: {email, password, rememberMe} })

export default reducerLogin