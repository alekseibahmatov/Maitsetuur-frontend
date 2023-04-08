import http from "../utils/http-client";

const createTransaction = (data) => {
    return http.post('/transaction/certificate', data, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const methods = {
    createTransaction,
}

export default methods;