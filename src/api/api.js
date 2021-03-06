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
    }, 

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data
        })
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status } ) // payload request - вместе с запросом отправляем объект со св-м status, в который передадим строку из UI.
    }
}

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`) 
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe } )
    },

    logout() {
        return instance.delete(`auth/login`)
    }
}




