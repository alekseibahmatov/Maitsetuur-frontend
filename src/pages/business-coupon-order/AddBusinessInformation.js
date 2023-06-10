import React, {useState, useEffect} from "react";
import './BusinessAuth.css'
import {Formik, Form, Field, FormikProps, ErrorMessage} from 'formik';
import * as Yup from "yup";
import toast from "react-hot-toast";
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
import {useNavigate} from "react-router-dom";
import {scrollTop} from "./tools";
import BusinessCouponOrderHeader from "../../ui-components/business-coupon-order-header/BusinessCouponOrderHeader";
import {
    BUSINESS_COUPON_ORDER_ADD_BUSINESS_REPRESENTATIVE
} from "../../routes";
import {BackToHomePage} from "../../ui-components/back-to-homepage/backToHomePage";

const validationSchema = Yup.object().shape({
    businessName: Yup.string()
        .required('Business name is required')
        .max(100, 'Business name seems to be incorrect, please contact us')
        .typeError("Input correct business name"),
    businessCode: Yup.string()
        .matches(/^\d{8}$/, 'Invalid Business Code (ID)')
        .required('Business code is required')
        .typeError("Input correct business code"),
    businessKmkr: Yup.string()
        .matches(/^EE1[0-9]{8}$/, 'Invalid Estonian KMKR number')
        .typeError("Input correct Business KMKR"),
});

export const AddBusinessInformation = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        businessName: '',
        businessCode: '',
        businessKmkr: '',
    });

    const saveToLocalStorage = (data) => {
        const currentLocalStorage = JSON.parse(localStorage.getItem('businessFormData')) || {};
        currentLocalStorage.businessInformation = data;
        localStorage.setItem('businessFormData', JSON.stringify(currentLocalStorage));
    };


    useEffect(() => {
        const storedData = localStorage.getItem('businessFormData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            const businessInformation = parsedData?.businessInformation;
            if (businessInformation) {
                setInitialValues(businessInformation);
            }
        }
    }, []);


    return (

        <>
            <div className="loginContent mobileWrapper">
                <div className="loginHeader">
                    Add Business Information
                </div>
                <div className="loginFormForm">
                    <div className="loginFormBusiness">
                        <BusinessCouponOrderHeader step={step}/>


                        <Formik
                            enableReinitialize={true}
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, actions) => {
                                actions.setSubmitting(true);
                                setTimeout(async () => {
                                    try {
                                        saveToLocalStorage(values);
                                        navigate(BUSINESS_COUPON_ORDER_ADD_BUSINESS_REPRESENTATIVE);
                                        scrollTop();
                                    } catch (error) {
                                        console.log(error)
                                        toast.error(error.data ? error.data : 'Opss... Something went wrong');
                                    }
                                    actions.setSubmitting(false);
                                }, 1000);
                            }}
                        >
                            {(props: FormikProps<any>) => (
                                <Form className="inputBoards">
                                    <div className="inputHeader">Business Name</div>
                                    <div className="inputAuthentication">
                                        <Field
                                            className="inputAuthenticationInput"
                                            type="text"
                                            name="businessName"
                                            placeholder="Input business name"
                                        />
                                        <div className="error">
                                            <ErrorMessage name="businessName"/>
                                        </div>
                                    </div>
                                    <div className="inputHeader">Business Code</div>
                                    <div className="inputAuthentication">
                                        <Field
                                            className="inputAuthenticationInput"
                                            type="text"
                                            name="businessCode"
                                            placeholder="Input business code"
                                        />
                                        <div className="error">
                                            <ErrorMessage name="businessCode"/>
                                        </div>
                                    </div>
                                    <div className="inputHeader">Business KMKR (optional)</div>
                                    <div className="inputAuthentication">
                                        <Field
                                            className="inputAuthenticationInput"
                                            type="text"
                                            name="businessKmkr"
                                            placeholder="Input business KMRK"
                                        />
                                        <div className="error">
                                            <ErrorMessage name="businessKmkr"/>
                                        </div>
                                    </div>
                                    <button className="loginButtonBusiness" type="submit">
                                        {props.isSubmitting ? <LoadingAnimationDots/> : 'Next step'}
                                    </button>
                                    <BackToHomePage/>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>

    )

}
