import { createSelector } from 'reselect'

export const getUsers = (state) => {
    return state.usersPage.users
}

 const filteredEveryTenthUsers = createSelector(
    getUsers,
    users => users.filter(user => !(user.id % 10))
)

export const filteredWithPhoto = createSelector(
    getUsers,
    users => users.filter(user => user.photos.large)
)

export const everySecondUserWithPhoto = createSelector(
    filteredWithPhoto,
    users => users.filter(user => !(user.id % 2) ) 
)

export const usersWithNameDmitriy = createSelector(
    getUsers,
    users => users.filter(user => user.name.includes('Dmitriy'))
)

export const usersWithLetterD = createSelector(
    getUsers,
    users => users.filter(user => user.name.includes('D'))
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

