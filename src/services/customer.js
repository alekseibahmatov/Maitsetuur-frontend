import http from "../utils/http-client";
import {useParams} from "react-router-dom";

const initiatePayment = () => {
    const localStorageData = JSON.parse(localStorage.getItem('personalFormData')) || {};

    const updatedData = {
        buyer: {
            fromFullName: localStorageData?.fromPersonalData?.fromFullName,
            fromEmail: localStorageData?.fromPersonalData?.fromEmail,
            fromPhone: localStorageData?.fromPersonalData?.fromPhone
        },
        address: {
            street: localStorageData?.billingAddress?.street,
            apartmentNumber: localStorageData?.billingAddress?.apartmentNumber,
            city: localStorageData?.billingAddress?.city,
            state: localStorageData?.billingAddress?.state,
            zipCode: localStorageData?.billingAddress?.postCode,
            country: localStorageData?.billingAddress?.country
        },
        certificates: [
            {
                email: localStorageData?.toPersonalData?.toEmail,
                greeting: localStorageData?.toPersonalData?.toFullName,
                nominalValue: localStorageData?.couponData?.value,
                greetingsText: localStorageData?.couponData?.congratsText
            }
        ],
    };

    console.log(updatedData)

    return http.post('/payment/initiateCreation', updatedData, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const validatePayment = (orderToken) => {
    return http.post('/payment/validatePayment', {orderToken: orderToken}, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}


const methods = {
    initiatePayment,
    validatePayment
}

export default methods;
