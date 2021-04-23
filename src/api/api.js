import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '5932b879-3da4-4ae5-ae52-8eacea60088f' }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(function (response) {
                return response.data
            })
    },

    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { withCredentials: true, headers: { 'API-KEY': '5932b879-3da4-4ae5-ae52-8eacea60088f' } })
    followUser(userId) {
        return instance.post(`follow/${userId}`, {})
    },

    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { withCredentials: true, headers: { 'API-KEY': '5932b879-3da4-4ae5-ae52-8eacea60088f' } })
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    }
}




