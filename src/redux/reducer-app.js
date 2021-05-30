import { setAuthUserDataThunkCreator } from "./reducer-auth"

const INITIALIZING_SUCSESS = 'INITIALIZING_SUCSESS'

let initialState = {
    isInitialized: false
}

const reducerApp = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZING_SUCSESS:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }
}

const setInitializeSucsess = () => ({type: INITIALIZING_SUCSESS})

export const initialize = () => (dispatch) => {
    let promise = dispatch(setAuthUserDataThunkCreator())
    debugger;
    promise.then(() => {
        dispatch(setInitializeSucsess())
    })

    // let promise = dispatch(setAuthUserDataThunkCreator())
    // let promiseUser = dispatch(setUsers())
    // let promiseCreateData = dispatch(setData())
    
    // // Когда есть много промисов, мы из помещаем в массив и запускаем setInitializeSucsess после resolve всего массива промисов.

    // Promise.all([promise, promiseUser, promiseCreateData]) 
    //     .then(() => {
    //         dispatch(setInitializeSucsess())
    //     })        
}
export default reducerApp



