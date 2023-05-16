import http from "../utils/http-client";

const initiatePayment = (type) => {
    let localStorageData;

    if (type === 'personal') {
        localStorageData = JSON.parse(localStorage.getItem('personalFormData')) || {};
    } else if (type === 'business') {
        localStorageData = JSON.parse(localStorage.getItem('businessFormData')) || {};
    }

    const updatedData = type === 'personal' ? {
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
            zipCode: localStorageData?.billingAddress?.postcode,
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
    } : {
        buyer: {
            fromFullName: localStorageData?.businessRepresentative?.representativeFullName,
            fromEmail: localStorageData?.businessRepresentative?.representativeEmail,
            fromPhone: localStorageData?.businessRepresentative?.representativePhone
        },
        businessInformation: {
            businessName: localStorageData?.businessInformation?.businessName,
            registerCode: localStorageData?.businessInformation?.businessCode,
            businessKMKR: localStorageData?.businessInformation?.businessKmkr
        },
        address: {
            street: localStorageData?.businessAddress?.street,
            apartmentNumber: localStorageData?.businessAddress?.houseNumber,
            city: localStorageData?.businessAddress?.city,
            state: localStorageData?.businessAddress?.state,
            zipCode: localStorageData?.businessAddress?.postcode,
            country: localStorageData?.businessAddress?.country
        },
        certificates: localStorageData?.generalCouponObject
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
