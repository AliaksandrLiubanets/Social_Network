const SET_SUBMITED_DATA = 'SET_SUBMITED_DATA'

let initialState = {
    // login: '',
    // password: '',
    // rememberMe: ''
    data: {}
}

let reducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUBMITED_DATA:
            return {
                ...state, 
                // login: action.login,
                // password: action.password,
                // rememberMe: action.rememberMe ? 'yes' : 'no'
                data: action.data
            }
            default: return state
    }
}

// export const setSubmitedData = (login, password, rememberMe) => ({type: SET_SUBMITED_DATA, data: {login, password, rememberMe} } )
export const setSubmitedData = (data) => ({type: SET_SUBMITED_DATA, data } )

export default reducerLogin