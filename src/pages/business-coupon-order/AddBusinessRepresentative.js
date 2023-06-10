import React, {useState, useEffect} from "react";
import './BusinessAuth.css'
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {
    BUSINESS_COUPON_ORDER_ADD_BUSINESS_ADDRESS,
    BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION, BUSINESS_COUPON_ORDER_ADD_BUSINESS_REPRESENTATIVE,
} from "../../routes";
import * as Yup from "yup";
import {scrollTop} from "./tools";
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
import BusinessCouponOrderHeader from "../../ui-components/business-coupon-order-header/BusinessCouponOrderHeader";
import {BackToHomePage} from "../../ui-components/back-to-homepage/backToHomePage";
const europeanMobilePhoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

export const validationSchemaBusinessRepresentativeData = Yup.object().shape({
    representativeFullName: Yup.string()
        .required('Full Name is required')
        .max(100, 'Full Name seems to be incorrect, please contact us')
        .typeError("Input correct Full Name"),
    representativePhone: Yup.string()
        .matches(europeanMobilePhoneRegex, "Invalid phone number")
        .required('Mobile phone is required'),
    representativeEmail: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
});

export const AddBusinessRepresentative = () => {
    const [step, setStep] = useState(1);

    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        representativeFullName: '',
        representativePhone: '',
        representativeEmail: '',
    });

    const saveToLocalStorage = (data) => {
        const currentLocalStorage = JSON.parse(localStorage.getItem('businessFormData')) || {};
        currentLocalStorage.businessRepresentative = data;
        localStorage.setItem('businessFormData', JSON.stringify(currentLocalStorage));
    };

    useEffect(() => {
        const storedData = localStorage.getItem("businessFormData");
        if (!storedData) {
            navigate(BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION);
        }
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            if (!parsedData.businessRepresentative) {
                navigate(BUSINESS_COUPON_ORDER_ADD_BUSINESS_REPRESENTATIVE);
            }
            const businessRepresentative = parsedData?.businessRepresentative;
            if (businessRepresentative) {
                setInitialValues(businessRepresentative);
            }
            console.log(businessRepresentative)

        }
    }, []);

    return (
        <>
            <div className="loginContent mobileWrapper">
                <div className="loginHeader">
                    Add Business Representative
                </div>
                <div className="loginFormForm">
                    <div className="loginFormBusiness">
                        <BusinessCouponOrderHeader step={step}/>

                        <div className="authentication">
                            <Formik
                                enableReinitialize={true}
                                initialValues={initialValues}
                                onSubmit={(values, actions) => {
                                    actions.setSubmitting(true);

                                    setTimeout(async () => {
                                        try {
                                            saveToLocalStorage(values);
                                            navigate(BUSINESS_COUPON_ORDER_ADD_BUSINESS_ADDRESS);
                                            scrollTop();
                                        } catch (error) {
                                            console.log(error)
                                            toast.error(error.data ? error.data : 'Opss... Something went wrong');
                                        }
                                        actions.setSubmitting(false);
                                    }, 1000);

                                }}
                                validationSchema={validationSchemaBusinessRepresentativeData}
                            >
                                {(props: FormikProps<any>) => (
                                    <Form>

                                        <>
                                            <div className="inputBoards">
                                                <div className="inputHeader">
                                                    Representative Full Name
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="representativeFullName"
                                                           placeholder="Input representative full name"/>
                                                    <div className="error">
                                                        <ErrorMessage name="representativeFullName"/>
                                                    </div>
                                                </div>
                                                <div className="inputHeader">
                                                    Representative Mobile Phone
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="representativePhone"
                                                           placeholder="Input representative mobile phone"/>
                                                    <div className="error">
                                                        <ErrorMessage name="representativePhone"/>
                                                    </div>
                                                </div>
                                                <div className="inputHeader">
                                                    Representative email
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="representativeEmail"
                                                           placeholder="Input representative email"/>
                                                    <div className="error">
                                                        <ErrorMessage name="representativeEmail"/>
                                                    </div>
                                                </div>
                                                <div className="alignFlexBottom">
                                                    <button className="loginButton" type="submit">
                                                        {props.isSubmitting ? <LoadingAnimationDots/> : "Next step"}
                                                    </button>
                                                    <button onClick={() => {
                                                        navigate(BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION)
                                                        scrollTop()
                                                    }} type="button" className="loginButtonBack">
                                                        Go back
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                        <BackToHomePage/>
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
export default AddBusinessRepresentative
