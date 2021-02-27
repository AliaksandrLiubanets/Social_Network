const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const ADD_SOME_AVATAR_AND_NAME = 'ADD-SOME-AVATAR-AND-NAME';

const reducerDialogs = (state, action) => {
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
