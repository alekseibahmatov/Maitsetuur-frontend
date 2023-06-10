import React, {useState, useEffect} from "react";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import './Payment.css'
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import cross from '../../assets/img/Less Than.png'
import {PersonalCouponOrderHeader} from "../../ui-components/personal-coupon-order-header/PersonalCouponOrderHeader";
import {
    PERSONAL_COUPON_ORDER_ADD_RECIPIENT_PERSONAL_DATA, PERSONAL_COUPON_ORDER_ADD_YOUR_ADDRESS_DATA,
    PERSONAL_COUPON_ORDER_ADD_YOUR_PERSONAL_DATA
} from "../../routes";
import * as Yup from "yup";
import {scrollTop} from "../business-coupon-order/tools";
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
import {BackToHomePage, backToHomePage} from "../../ui-components/back-to-homepage/backToHomePage";

export const validationSchemaFromAddressData = Yup.object().shape({
    country: Yup.string()
        .required('Country is required'),
    city: Yup.string()
        .required('City is required'),
    state: Yup.string()
        .required('State is required'),
    street: Yup.string()
        .required('Street is required'),
    apartmentNumber: Yup.string()
        .required('Apartment number is required'),
    postcode: Yup.string()
        .required('Postcode is required'),
});

export const AddYourAddressData = () => {
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        country: '',
        city: '',
        state: '',
        street: '',
        apartmentNumber: '',
        postcode: '',
    });

    const saveToLocalStorage = (data) => {
        const currentLocalStorage = JSON.parse(localStorage.getItem('personalFormData')) || {};
        currentLocalStorage.billingAddress = data;
        localStorage.setItem('personalFormData', JSON.stringify(currentLocalStorage));
    };

    useEffect(() => {
        const storedData = localStorage.getItem("personalFormData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            const addressData = parsedData?.billingAddress;
            if (addressData) {
                setInitialValues(addressData);
            }
            console.log(addressData)

        }
    }, []);


    return (
        <>
            <div className="loginContent mobileWrapper">
                <div className="loginHeader">
                    Add Your Address
                </div>
                <div className="loginFormForm">
                    <div className="loginFormBusiness">
                        <PersonalCouponOrderHeader step={2}/>
                        <div className="authentication">
                            <Formik
                                enableReinitialize={true}
                                initialValues={initialValues}
                                onSubmit={(values, actions) => {
                                    actions.setSubmitting(true);

                                    setTimeout(async () => {
                                        try {
                                            saveToLocalStorage(values);
                                            navigate(PERSONAL_COUPON_ORDER_ADD_RECIPIENT_PERSONAL_DATA);
                                            scrollTop();
                                        } catch (error) {
                                            console.log(error)
                                            toast.error(error.data ? error.data : 'Opss... Something went wrong');
                                        }
                                        actions.setSubmitting(false);
                                    }, 1000);

                                }}
                                validationSchema={validationSchemaFromAddressData}
                            >
                                {(props: FormikProps<any>) => (
                                    <Form>
                                        <>
                                            <div className="inputBoards">
                                                <div className="inputHeader">
                                                    Your Country
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="country"
                                                           placeholder="Input your country"/>
                                                    <div className="error">
                                                        <ErrorMessage name="country"/>
                                                    </div>
                                                </div>
                                                <div className="inputHeader">
                                                    Your City
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="city"
                                                           placeholder="Input your city"/>
                                                    <div className="error">
                                                        <ErrorMessage name="city"/>
                                                    </div>
                                                </div>
                                                <div className="inputHeader">
                                                    Your State
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="state"
                                                           placeholder="Input your state"/>
                                                    <div className="error">
                                                        <ErrorMessage name="state"/>
                                                    </div>
                                                </div>
                                                <div className="inputHeader">
                                                    Your Street
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="street"
                                                           placeholder="Input your street"/>
                                                    <div className="error">
                                                        <ErrorMessage name="street"/>
                                                    </div>
                                                </div>
                                                <div className="inputHeader">
                                                    Your Apartment Number
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="apartmentNumber"
                                                           placeholder="Input your apartment number"/>
                                                    <div className="error">
                                                        <ErrorMessage name="apartmentNumber"/>
                                                    </div>
                                                </div>
                                                <div className="inputHeader">
                                                    Your Postcode
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="postcode"
                                                           placeholder="Input your postcode"/>
                                                    <div className="error">
                                                        <ErrorMessage name="postcode"/>
                                                    </div>
                                                </div>

                                                <div className="alignFlexBottom">
                                                    <button className="loginButton" type="submit">
                                                        {props.isSubmitting ? <LoadingAnimationDots/> : 'Next step'}
                                                    </button>
                                                    <button type="button" onClick={() => {
                                                        navigate(PERSONAL_COUPON_ORDER_ADD_YOUR_PERSONAL_DATA)
                                                        scrollTop()
                                                    }}
                                                            className="loginButtonBack">
                                                        Go back
                                                    </button>
                                                </div>

                                                <BackToHomePage/>
                                            </div>
                                        </>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddYourAddressData
