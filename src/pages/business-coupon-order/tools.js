import React from "react";
import toast from "react-hot-toast";

export const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const isEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const prepareGeneralCouponObject = (setCoupons, navigate) => {
    try {
        const storedData = localStorage.getItem('businessFormData');
        if (!storedData) {
            navigate('/step1');
        }
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            if (!parsedData.couponConfiguration) {
                navigate('/step3');
            }
            const couponConfiguration = parsedData?.couponConfiguration;
            if (couponConfiguration) {
                console.log(parsedData?.generalCouponObject)
                if (parsedData?.generalCouponObject !== undefined && !isEmpty(parsedData?.generalCouponObject)) {
                    console.log(parsedData?.generalCouponObject)
                    setCoupons(parsedData.generalCouponObject);
                } else {
                    console.log('netu generalCouponObject')
                    const generalCouponObject = Array.from({length: couponConfiguration.couponsAmount}, () => ({
                        email: '',
                        greeting: couponConfiguration.notPersonalName,
                        nominalValue: couponConfiguration.nominalValue,
                        greetingsText: couponConfiguration.greetingsText,
                    }));
                    parsedData.generalCouponObject = generalCouponObject;
                    localStorage.setItem('businessFormData', JSON.stringify(parsedData));
                    setCoupons(generalCouponObject);
                }
            }
        }
    } catch (error) {
        toast.error(error.data?.message ? error.data.message : "Opss... Something went wrong");
    }
};

export const validateCurrentStep = (formikProps, couponStep) => {
    const {coupons} = formikProps.values;
    const currentCoupon = coupons[couponStep];
    console.log(currentCoupon);
    const fields = Object.keys(currentCoupon);
    fields.forEach((field) => {
        formikProps.setFieldTouched(`coupons.${couponStep}.${field}`, true);
    });
    const errors = formikProps.errors?.coupons?.[couponStep] ?? {};
    return Object.keys(errors).length === 0;
};