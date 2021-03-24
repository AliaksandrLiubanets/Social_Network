const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
    //     { id: 1, followed: true, fullName: 'Dimych K', location: { country: 'Belarus', city: 'Minsk' }, status: 'I\'m a boss', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUa__Y_-g-Hqiasz_OgSIhk_N5VHcbRBc3Ng&usqp=CAU' },
    //     { id: 2, followed: false, fullName: 'Farid M', location: { country: 'Ukraine', city: 'Kiev' }, status: 'I\'m a boss too', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaIeEcKGjyP_NWQWd-8pRuJiR_ku780dyUQ&usqp=CAU' },
    //     { id: 3, followed: true, fullName: 'Kostya G', location: { country: 'Russia', city: 'Moscow' }, status: 'I\'m a boss too', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OCIzl9399tApSHYiacA8OfhhOT-_zQKcxQ&usqp=CAU' },
    //     { id: 4, followed: true, fullName: 'Olga V', location: { country: 'Latvia', city: 'Riga' }, status: 'I\'m a boss too', avatar: 'https://i.pinimg.com/564x/98/b2/88/98b28840d82a8ec637642f4285a3f38a.jpg' },
    ]
}

const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state;
    }

}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default reducerUsers;
