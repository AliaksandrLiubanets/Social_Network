const SET_SUBMITED_DATA = 'SET_SUBMITED_DATA'

let initialState = {
    data: {}
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

export const setSubmitedData = (data) => ({type: SET_SUBMITED_DATA, data} )

export default reducerLogin