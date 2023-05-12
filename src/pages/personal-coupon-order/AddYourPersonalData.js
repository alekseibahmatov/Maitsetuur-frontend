import React, {useState, useEffect} from "react";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import './Payment.css'
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {PersonalCouponOrderHeader} from "../../ui-components/personal-coupon-order-header/PersonalCouponOrderHeader";
import {
    PERSONAL_COUPON_ORDER_ADD_YOUR_ADDRESS_DATA
} from "../../routes";
import * as Yup from "yup";
import {scrollTop} from "../business-coupon-order/tools";
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
const europeanMobilePhoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

export const validationSchemaFromPersonalData = Yup.object().shape({
    fromFullName: Yup.string()
        .required('Full Name is required')
        .max(100, 'Full Name seems to be incorrect, please contact us')
        .typeError("Input correct Full Name"),
    fromPhone: Yup.string()
        .matches(europeanMobilePhoneRegex, "Invalid phone number")
        .required('Mobile phone is required'),
    fromEmail: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
});

export const AddYourPersonalData = () => {
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        fromFullName: '',
        fromPhone: '',
        fromEmail: '',
    });

    const saveToLocalStorage = (data) => {
        const currentLocalStorage = JSON.parse(localStorage.getItem('certificateFormData')) || {};
        currentLocalStorage.fromPersonalData = data;
        localStorage.setItem('certificateFormData', JSON.stringify(currentLocalStorage));
    };

    useEffect(() => {
        const storedData = localStorage.getItem("certificateFormData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            const personalData = parsedData?.fromPersonalData;
            if (personalData) {
                setInitialValues(personalData);
            }
            console.log(personalData)

        }
    }, []);

    return (
        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Add Your Personal Data
                </div>
                <div className="loginFormForm">
                    <div className="loginForm">
                        <PersonalCouponOrderHeader step={1}/>
                        <div className="authentication">
                            <Formik
                                enableReinitialize={true}
                                initialValues={initialValues}
                                onSubmit={(values, actions) => {
                                    actions.setSubmitting(true);

                                    setTimeout(async () => {
                                        try {
                                            saveToLocalStorage(values);
                                            navigate(PERSONAL_COUPON_ORDER_ADD_YOUR_ADDRESS_DATA);
                                            scrollTop();
                                        } catch (error) {
                                            console.log(error)
                                            toast.error(error.data ? error.data : 'Opss... Something went wrong');
                                        }
                                        actions.setSubmitting(false);
                                    }, 1000);

                                }}
                                validationSchema={validationSchemaFromPersonalData}
                            >
                                {(props: FormikProps<any>) => (
                                    <Form>

                                            <>
                                                <div className="inputBoards">
                                                    <div className="inputHeader">
                                                        Your Full Name
                                                    </div>
                                                    <div className="inputAuthentication">
                                                        <Field className="inputAuthenticationInput" type="text"
                                                               name="fromFullName"
                                                               placeholder="Input your full name"/>
                                                        <div className="error">
                                                            <ErrorMessage name="fromFullName"/>
                                                        </div>
                                                    </div>
                                                    <div className="inputHeader">
                                                        Your Mobile Phone
                                                    </div>
                                                    <div className="inputAuthentication">
                                                        <Field className="inputAuthenticationInput" type="text"
                                                               name="fromPhone"
                                                               placeholder="Input your mobile phone"/>
                                                        <div className="error">
                                                            <ErrorMessage name="fromPhone"/>
                                                        </div>
                                                    </div>
                                                    <div className="inputHeader">
                                                        Your email
                                                    </div>
                                                    <div className="inputAuthentication">
                                                        <Field className="inputAuthenticationInput" type="text"
                                                               name="fromEmail"
                                                               placeholder="Input your email"/>
                                                        <div className="error">
                                                            <ErrorMessage name="fromEmail"/>
                                                        </div>
                                                    </div>
                                                    <button className="loginButton fullWidth" type="submit">
                                                        {props.isSubmitting ? <LoadingAnimationDots/> : 'Next step'}
                                                    </button>
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
export default AddYourPersonalData
