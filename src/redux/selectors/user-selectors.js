import { createSelector } from 'reselect'

const getUsers = (state) => {
    return state.usersPage.users
}

const filteredEveryTenthUsers = createSelector(
    getUsers,
    users => users.filter(user => !(user.id % 10))
)

export const tenthUsers = createSelector(
    filteredEveryTenthUsers,
    users => users.filter(user => true) 
)

export const getPageSize = (state) => {
    return state.usersPage.pageSize
} 

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
} 

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
} 

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
} 

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
} 

