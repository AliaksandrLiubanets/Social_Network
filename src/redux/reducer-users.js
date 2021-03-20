const FOLLOW_USER = 'FOLLOW_USER';

let initialState = {
        users: [
            { id: 1, followed: true, fullName: 'Dimych K', location: {country: Belarus, city: Minsk}, status: 'I\'m a boss', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUa__Y_-g-Hqiasz_OgSIhk_N5VHcbRBc3Ng&usqp=CAU' },
            { id: 2, followed: false, fullName: 'Farid M', location: {country: Ukraine, city: Kiev}, status: 'I\'m a boss too', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaIeEcKGjyP_NWQWd-8pRuJiR_ku780dyUQ&usqp=CAU' },
            { id: 3, followed: true, fullName: 'Kostya G', location: {country: Russia, city: Moscow}, status: 'I\'m a boss too', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OCIzl9399tApSHYiacA8OfhhOT-_zQKcxQ&usqp=CAU' },
            { id: 4, followed: true, fullName: 'Olga V', location: {country: Latvia, city: Riga}, status: 'I\'m a boss too', avatar: 'https://i.pinimg.com/564x/98/b2/88/98b28840d82a8ec637642f4285a3f38a.jpg' },           
        ]        
}

const reducerUsers = (state = initialState, action) => {

}

export const followAC = () => {
    return {type: FOLLOW_USER}
}

const reducerDialogs = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            // let stateCopy = {...state};
            // stateCopy.newMessageBody = action.newBody;
            return {
                ...state,
                newMessageBody: action.newBody
            }
        } 
        case SEND_MESSAGE: {
            // let stateCopy = {...state};         
            let newMessage = {
            id: 7,
            message: state.newMessageBody
            }

            // stateCopy.messagesData = [...state.messagesData];
            // stateCopy.messagesData.push(newMessage);
            // stateCopy.newMessageBody = '';             
            // return stateCopy;

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageBody: ''
            }
        }
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
