const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const IS_TOGGLE_IN_PROGRESS = 'IS_TOGGLE_IN_PROGRESS';



let initialState = {
    users: [],
    pageSize: 5, // count users on 1 page
    totalUsersCount: 21, // all count users registered on server
    currentPage: 1,
    isFetching: false,
    isToggleInProgress: false
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
                ...state, 
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, 
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, 
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, 
                isFetching: action.isFetching
            }
        case IS_TOGGLE_IN_PROGRESS:
            return {
                ...state, 
                isToggleInProgress: action.isProgress
            }
        default:
            return state;
    }
}

export const followUser = (userId) => ({ type: FOLLOW, userId })
export const unfollowUser = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const setCurrentPage = (pageNumber) => ({ type: SET_CURRENT_PAGE, currentPage: pageNumber })
export const setTotalUsersCount = (usersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount: usersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleInProgress = (isProgress) => ({ type: IS_TOGGLE_IN_PROGRESS, isProgress });

export default reducerUsers;
