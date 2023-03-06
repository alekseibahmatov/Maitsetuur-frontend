import http from "../utils/http-client";

const createNewWaiter = (data) => {
    return http.post('/manager/restaurant/waiter', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const deleteWaiter = (id) => {
    return http.delete(`/manager/restaurant/waiter/${id}`);
}

const getAllWaiters = () => {
    return http.get('/manager/restaurant/waiter');
}

const methods = {
    createNewWaiter,
    deleteWaiter,
    getAllWaiters,
}

export default methods;