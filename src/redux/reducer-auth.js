const SET_USER_DATA = 'SET_LOGIN_DATA';
const SET_USER_AVATAR = 'SET_USER_AVATAR';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userAvatar: null
}

const reducerAuth = (state = initialState, action) => {
    switch (action.type) {                                          
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_USER_AVATAR:
            return {
                ...state,
                userAvatar: action.photo
            }

        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} });
export const setUserAvatar = (photo) => ({ type: SET_USER_AVATAR, photo });

export default reducerAuth;

