import http from "../utils/http-client";
import {useParams} from "react-router-dom";

const initiatePayment = () => {
    const localStorageData = JSON.parse(localStorage.getItem('certificateFormData')) || {};

    const updatedData = {
        value: localStorageData?.couponData?.value,
        congratsText: localStorageData?.couponData?.congratsText,
        fromEmail: localStorageData?.fromPersonalData?.fromEmail,
        fromFullName: localStorageData?.fromPersonalData?.fromFullName,
        fromPhone: localStorageData?.fromPersonalData?.fromPhone,
        toFullName: localStorageData?.toPersonalData?.toFullName,
        toEmail: localStorageData?.toPersonalData?.toEmail,
        toPhone: localStorageData?.toPersonalData?.toPhone,
        billingAddress: {
            street: localStorageData?.billingAddress?.street,
            apartmentNumber: localStorageData?.billingAddress?.apartmentNumber,
            city: localStorageData?.billingAddress?.city,
            state: localStorageData?.billingAddress?.state,
            zipCode: localStorageData?.billingAddress?.postCode,
            country: localStorageData?.billingAddress?.country
        },
        preferredProvider: 'HABAEE2X'
    };

    console.log(updatedData)

    return http.post('/payment/initiateCreation', updatedData, {
        transformResponse: [(result) => {
            return JSON.parse(result);
        }]
    });
}

const validatePayment = (orderToken) => {



    return http.post('/payment/verificationCreation', orderToken, {
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
