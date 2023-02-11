import axios from 'axios'

// todo: create .env file and relocate baseUrl to .env
const API = axios.create({baseURL: 'http://localhost:8080'})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
    return req
})

// auth
export const signUp = (formData) => API.post('/auth/register', formData)
export const login = (formData) => API.post('/auth/authenticate', formData)
export const startReset = (formData) => API.post('/auth/recovery/start', formData);
export const continueReset = (formData) => API.post('/auth/recovery', formData);

//restaurant


//waiter

