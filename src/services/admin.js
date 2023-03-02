import http from "../utils/http-client";

const createNewRestaurant = (data) => {
    return http.post('/admin/restaurant', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}


const methods = {
    createNewRestaurant
}

export default methods;