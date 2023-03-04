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

const getWaiterData = (data) => {
    return http.post('/manager/restaurant/waiter', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const downloadFile = (fileName, type) => {
    return http.get(`/admin/download/${fileName}/${type}`);
}

const methods = {
    createNewRestaurant,
    getRestaurantData,
    getWaiterData,
    downloadFile
}

export default methods;