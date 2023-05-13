import http from "../utils/http-client";

const login = (data) => {
    return http.post('/auth/authenticate', data, {
        transformResponse: [(result) => {
            const parsed = JSON.parse(result);
            localStorage.setItem('authUser', JSON.stringify(parsed));
            return parsed;
        }]
    });
}

const register = (data) => {
    return http.post('/auth/register', data, {
        transformResponse: [(result) => {
            const parsed = JSON.parse(result);
            localStorage.setItem('authUser', JSON.stringify(parsed));
            return parsed;
        }]
    });
}

const logout = () => {
    localStorage.removeItem('authUser');
}

const firstStepResetPassword = (data) => {
    return http.post('/auth/recovery/start', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const secondStepResetPassword = (data) => {
    return http.post('/auth/recovery', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const addPersonalData = (data) => {
    return http.post('/auth/personalData', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const checkActivationCode = (data) => {
    console.log(data)
    return http.get('/auth/activationCode/' + data);
}


const getAuthUser = () => {
    return JSON.parse(localStorage.getItem('authUser'));
}

const methods = {
    login,
    register,
    logout,
    firstStepResetPassword,
    secondStepResetPassword,
    addPersonalData,
    checkActivationCode,
    getAuthUser,
}

export default methods;
