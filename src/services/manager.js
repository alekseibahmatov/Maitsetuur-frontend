import http from "../utils/http-client";

const createNewWaiter = (data) => {
    return http.post('/manager/restaurant/waiter', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const updateWaiterData = (data) => {
    return http.put('/manager/restaurant/waiter', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const deleteWaiter = (id) => {
    return http.delete(`/manager/restaurant/waiter/${id}`);
}

const getWaiterData = (data) => {
    return http.get('/manager/restaurant/waiter/' + data);
}

const getAllWaiters = () => {
    return http.get('/manager/restaurant/waiter');
}

const methods = {
    createNewWaiter,
    updateWaiterData,
    deleteWaiter,
    getWaiterData,
    getAllWaiters,
}

export default methods;