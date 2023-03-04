import axios from 'axios';
import authService from '../services/auth';

const instance = axios.create({
    // baseURL: process.env.REACT_APP_API_BASE_URL
    // todo: add .env file with normal config parameters
    baseURL: 'http://localhost:8080/api/v1'
});

instance.interceptors.request.use((config) => {
    const authUser = authService.getAuthUser();
    if (config.url.endsWith('/admin/restaurant')) {
        config.headers['Content-Type'] = `multipart/form-data`;

    }
    if (authUser && !config.url.includes('auth')) {
        config.headers['authorization'] = `Bearer ${authUser?.token}`;
    }
    if (config.url.includes('download')) {
        config.responseType = 'blob';
    }
    return config;
}, (error) => {
    console.log(error)
    return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error?.response?.status === 401) {
        localStorage.removeItem('authUser');
        window.location.reload();
    } else {
        return Promise.reject(error.response);
    }
});

const get = (url, params, config = {}) => instance.get(url, {params, ...config});
const post = (url, data, config = {}) => instance.post(url, data, config);

const methods = {get, post};

export default methods;