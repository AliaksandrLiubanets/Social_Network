const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const ADD_SOME_AVATAR_AND_NAME = 'ADD-SOME-AVATAR-AND-NAME';

let initialState = {
        dialogsData: [
            { id: 1, name: 'Dimych', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUa__Y_-g-Hqiasz_OgSIhk_N5VHcbRBc3Ng&usqp=CAU' },
            { id: 2, name: 'Andrew', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaIeEcKGjyP_NWQWd-8pRuJiR_ku780dyUQ&usqp=CAU' },
            { id: 3, name: 'Sveta', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OCIzl9399tApSHYiacA8OfhhOT-_zQKcxQ&usqp=CAU' },
            { id: 4, name: 'Sasha', avatar: 'https://i.pinimg.com/564x/98/b2/88/98b28840d82a8ec637642f4285a3f38a.jpg' },
            { id: 5, name: 'Victor', avatar: 'https://i.pinimg.com/originals/06/2b/c9/062bc9095337818bb479b69f9d807e53.jpg' },
            { id: 6, name: 'Valera', avatar: 'https://i.pinimg.com/originals/f4/05/4c/f4054c3db50a08c2f266e82b44b5ca90.jpg' },
        ],
        messagesData: [
            { id: 1, message: 'Dimych say: Hi' },
            { id: 2, message: 'Andrey say: How is it going?' },
            { id: 3, message: 'Sveta say: Hello everyone' },
            { id: 4, message: 'Sasha say: Yo' },
            { id: 5, message: 'Victor say: Yo' },
            { id: 6, message: 'Valera Say: Yo' },
        ],
        newMessageBody: '',
        someAvatarAndName: { id: 7, name: 'Somebody', avatar: 'https://live.warthunder.com/style/img/no_avatar.jpg' }    
}

const reducerDialogs = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody; 
            return state;
        case SEND_MESSAGE: 
            let newMessage = {
            id: 6,
            message: state.newMessageBody
            }

            state.messagesData.push(newMessage);
            state.newMessageBody = '';             
            return state;
        case ADD_SOME_AVATAR_AND_NAME:
            let someAvatarAndName = state.someAvatarAndName;
            state.dialogsData.push(someAvatarAndName);   
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyActionCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, newBody: body });

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const addSomeAvatarAndNameActionCreator = () => ({ type: ADD_SOME_AVATAR_AND_NAME });

export default reducerDialogs;