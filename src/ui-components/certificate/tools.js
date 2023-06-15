import React from 'react'
import {useNavigate} from "react-router-dom";
import {
    BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION,
    PERSONAL_COUPON_ORDER_ADD_YOUR_PERSONAL_DATA
} from "../../routes";
import {scrollTop} from "../../pages/business-coupon-order/tools";
import toast from "react-hot-toast";

export const submitBusinessForm = (values, actions, navigate) => {
    actions.setSubmitting(true);
    setTimeout(async () => {
        try {
            localStorage.setItem('businessFormData', JSON.stringify(
                {
                    businessInformation: {
                        businessName: values.businessName,
                        businessCode: values.businessCode,
                    }
                }
            ));
            navigate(BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION)
            scrollTop();
        } catch (error) {
            console.log(error)
            toast.error(error.data ? error.data : 'Opss... Something went wrong');
        }
        actions.setSubmitting(false);
    }, 1000);
}



export const submitPersonalForm = (reformattedFormValues, actions, navigate) => {

    actions.setSubmitting(true);
    setTimeout(async () => {
        try {
            console.log(reformattedFormValues)
            localStorage.setItem("personalFormData", JSON.stringify(reformattedFormValues));

            navigate(PERSONAL_COUPON_ORDER_ADD_YOUR_PERSONAL_DATA)
            scrollTop();
        } catch (error) {
            console.log(error)
            toast.error(error.data ? error.data : 'Opss... Something went wrong');
        }
        actions.setSubmitting(false);
    }, 1000);
}
