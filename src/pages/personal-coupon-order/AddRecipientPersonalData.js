import React, {useState, useEffect} from "react";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import './Payment.css'
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import cross from '../../assets/img/Less Than.png'
import {PersonalCouponOrderHeader} from "../../ui-components/personal-coupon-order-header/PersonalCouponOrderHeader";
import * as Yup from "yup";
import {
    PERSONAL_COUPON_ORDER_ADD_YOUR_ADDRESS_DATA,
    PERSONAL_COUPON_ORDER_CHECK_COUPON_DATA
} from "../../routes";
import {scrollTop} from "../business-coupon-order/tools";
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";

const europeanMobilePhoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

export const validationSchemaToPersonalData = Yup.object().shape({
    toFullName: Yup.string()
        .required('Full Name is required')
        .max(100, 'Full Name seems to be incorrect, please contact us')
        .typeError("Input correct Full Name"),
    toEmail: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
});

export const AddRecipientPersonalData = () => {
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        toFullName: '',
        toEmail: '',
    });

    const saveToLocalStorage = (data) => {
        const currentLocalStorage = JSON.parse(localStorage.getItem('personalFormData')) || {};
        currentLocalStorage.toPersonalData = data;
        localStorage.setItem('personalFormData', JSON.stringify(currentLocalStorage));
    };

    useEffect(() => {
        const storedData = localStorage.getItem("personalFormData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            const toPersonalData = parsedData?.toPersonalData;
            if (toPersonalData) {
                setInitialValues(toPersonalData);
            }
            console.log(toPersonalData)

        }
    }, []);


    return (
        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Add Recipient's Personal Data
                </div>
                <div className="loginFormForm">
                    <div className="loginForm">
                        <img src={cross} alt="goBack" className='goBackPayment' onClick={() => navigate('/')}/>
                        <PersonalCouponOrderHeader step={3}/>
                        <div className="authentication">
                            <Formik
                                enableReinitialize={true}
                                initialValues={initialValues}
                                onSubmit={(values, actions) => {
                                    actions.setSubmitting(true);

                                    setTimeout(async () => {
                                        try {
                                            saveToLocalStorage(values);
                                            navigate(PERSONAL_COUPON_ORDER_CHECK_COUPON_DATA);
                                            scrollTop();
                                        } catch (error) {
                                            console.log(error)
                                            toast.error(error.data ? error.data : 'Opss... Something went wrong');
                                        }
                                        actions.setSubmitting(false);
                                    }, 1000);
                                }}
                                validationSchema={validationSchemaToPersonalData}
                            >
                                {(props: FormikProps<any>) => (

                                    <Form>
                                        <>
                                            <div className="inputBoards">
                                                <div className="inputHeader">
                                                    Recipient's Full Name
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="toFullName"
                                                           placeholder="Input your full name"/>
                                                    <div className="error">
                                                        <ErrorMessage name="toFullName"/>
                                                    </div>
                                                </div>
                                                <div className="inputHeader">
                                                    Recipient's email
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="toEmail"
                                                           placeholder="Input your email"/>
                                                    <div className="error">
                                                        <ErrorMessage name="toEmail"/>
                                                    </div>
                                                </div>

                                                <div className="alignFlex">
                                                    <button className="loginButton" type="submit">
                                                        {props.isSubmitting ? <LoadingAnimationDots/> : 'Next step'}
                                                    </button>
                                                    <button type="button" onClick={() => navigate(PERSONAL_COUPON_ORDER_ADD_YOUR_ADDRESS_DATA)}
                                                            className="loginButtonBack">
                                                        Go back
                                                    </button>
                                                </div>
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
export default AddRecipientPersonalData
