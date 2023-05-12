import axios from 'axios';
import authService from '../services/auth';
import jwt_decode from "jwt-decode";

const instance = axios.create({
    // baseURL: process.env.REACT_APP_API_BASE_URL
    // todo: add .env file with normal config parameters
    baseURL: 'https://api.maitsetuur.ee/api/v1'
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
const put = (url, data, config = {}) => instance.put(url, data, config);
const del = (url, config = {}) => instance.delete(url, config);

const methods = {get, post, put, delete: del};

export default methods;
