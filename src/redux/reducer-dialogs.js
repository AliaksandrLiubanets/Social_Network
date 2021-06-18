const UPDATE_NEW_MESSAGE_BODY = 'dialogs/UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

let initialState = {
        dialogsData: [
            { id: 1, name: 'Dimych', message: 'Dimych say: Hi', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUa__Y_-g-Hqiasz_OgSIhk_N5VHcbRBc3Ng&usqp=CAU' },
            { id: 2, name: 'Andrew', message: 'Hi', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaIeEcKGjyP_NWQWd-8pRuJiR_ku780dyUQ&usqp=CAU' },
            { id: 3, name: 'Sveta', message: 'you are the best', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OCIzl9399tApSHYiacA8OfhhOT-_zQKcxQ&usqp=CAU' },
            { id: 4, name: 'Sasha', message: 'Say somethink', avatar: 'https://i.pinimg.com/564x/98/b2/88/98b28840d82a8ec637642f4285a3f38a.jpg' },
            { id: 5, name: 'Victor', message: 'Dimych say: Hi', avatar: 'https://i.pinimg.com/originals/06/2b/c9/062bc9095337818bb479b69f9d807e53.jpg' },
            { id: 6, name: 'Valera', message: 'Bu-u-u', avatar: 'https://i.pinimg.com/originals/f4/05/4c/f4054c3db50a08c2f266e82b44b5ca90.jpg' },
        ]  
}

const reducerDialogs = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            // let stateCopy = {...state};
            // stateCopy.newMessageBody = action.newBody;
            return {
                ...state,
                newMessageBody: action.newBody
            }
         
        case SEND_MESSAGE:      
            let newMessage = {
            id: 7,
            name: 'Valera',
            avatar: 'https://i.pinimg.com/originals/f4/05/4c/f4054c3db50a08c2f266e82b44b5ca90.jpg',
            message: action.message
            }

            return {
                ...state,
                dialogsData: [...state.dialogsData, newMessage]
            }
        
        default:
            return state;
    }
}

export const sendMessageAC = (message) => ({ type: SEND_MESSAGE, message });

// export const addSomeAvatarAndNameActionCreator = (message) => ({ type: ADD_SOME_AVATAR_AND_NAME, message });

// export const setDialogsMessageAC = (message) => ({type: SET_DIALOGS_MESSAGE, message})

export default reducerDialogs;
