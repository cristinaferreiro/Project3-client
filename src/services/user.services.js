import axios from 'axios'

class UserServices {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/users`
        })

        this.axiosApp.interceptors.request.use(config => {

            console.log('PRUEBA')
            const storedToken = localStorage.getItem('authToken');
            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config
        })
    }

    getAllUsers() {
        return this.axiosApp.get('/')
    }

    getOneUsers(userId) {
        return this.axiosApp.get(`/${userId}`)
    }

    saveUsers(userData) {
        return this.axiosApp.post('/', userData)
    }

    editUsers(userId, userData) {
        return this.axiosApp.put(`/${userId}`, userData)
    }

    deleteUsers(userId) {
        return this.axiosApp.delete(`/${userId}`)
    }

}

const userServices = new UserServices()

export default userServices