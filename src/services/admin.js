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

// todo: update link and etc.
const createNewUser = (data) => {
    return http.post('/admin/user', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const getUserData = (data) => {
    return http.get('/admin/user/' + data);
}

const updateUserData = (data) => {
    return http.put('/admin/user', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const deleteUser = (data) => {
    return http.delete('/admin/user/' + data);
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

const getAllCoupons = () => {
    return http.get('/admin/certificate');
}

const updateCouponData = (data) => {
    return http.put('/admin/certificate', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const createNewCoupon = (data) => {
    return http.post('/admin/certificate', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const getCouponData = (data) => {
    return http.get('/admin/certificate/' + data);
}

const deleteCoupon = (data) => {
    return http.delete('/admin/certificate/' + data);
}


const methods = {
    createNewWaiter,
    createNewRestaurant,
    deleteRestaurant,
    updateRestaurantData,
    getRestaurantData,
    createNewUser,
    deleteUser,
    updateUserData,
    getUserData,
    getAllRestaurants,
    updateWaiterData,
    getAllWaiters,
    getWaiterData,
    downloadFile,
    getAllCoupons,
    updateCouponData,
    createNewCoupon,
    getCouponData,
    deleteCoupon
}

export default methods;
