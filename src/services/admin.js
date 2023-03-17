import http from "../utils/http-client";

const createNewRestaurant = (data) => {
    return http.post('/admin/restaurant', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const getRestaurantData = (data) => {
    return http.get('/admin/restaurant/' + data);
}

const updateRestaurantData = (data) => {
    return http.put('/admin/restaurant', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const deleteRestaurant = (data) => {
    return http.delete('/admin/restaurant/' + data);
}

const getAllRestaurants = () => {
    return http.get('/admin/restaurant');
}

const createNewWaiter = (data) => {
    return http.post('/admin/restaurant/waiter', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}


const updateWaiterData = (data) => {
    return http.put('/admin/restaurant/waiter', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const getAllWaiters = () => {
    return http.get('/admin/restaurant/waiter');
}

const getWaiterData = (data) => {
    return http.get('/admin/restaurant/waiter/' + data);
}

const downloadFile = (fileId) => {
    return http.get(`/file/download/${fileId}`);
}

const methods = {
    createNewWaiter,
    createNewRestaurant,
    deleteRestaurant,
    updateRestaurantData,
    getRestaurantData,
    getAllRestaurants,
    updateWaiterData,
    getAllWaiters,
    getWaiterData,
    downloadFile
}

export default methods;