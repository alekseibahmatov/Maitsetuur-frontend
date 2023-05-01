import React, {useState, useEffect} from "react";
import './BusinessAuth.css'
import {Formik, Form, Field, FormikProps, ErrorMessage} from 'formik';
import * as Yup from "yup";
import toast from "react-hot-toast";
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
import {useNavigate} from "react-router-dom";
import {scrollTop} from "./tools";
import BusinessCouponOrderHeader from "../../ui-components/business-coupon-order-header/BusinessCouponOrderHeader";

const validationSchema = Yup.object().shape({
    businessName: Yup.string().required('Business name is required'),
    businessCode: Yup.string().required('Business code is required'),
    businessKRKM: Yup.string().required('Business KRKM is required'),
    businessEmail: Yup.string()
        .email('Invalid email')
        .required('Business email is required')
});

export const Step1 = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        businessName: '',
        businessCode: '',
        businessKRKM: '',
        businessEmail: '',
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
            <div className="loginContent">
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
                                        navigate('/step2');
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
                                    <div className="inputHeader">Business KRKM</div>
                                    <div className="inputAuthentication">
                                        <Field
                                            className="inputAuthenticationInput"
                                            type="text"
                                            name="businessKRKM"
                                            placeholder="Input business KRKM"
                                        />
                                        <div className="error">
                                            <ErrorMessage name="businessKRKM"/>
                                        </div>
                                    </div>
                                    <div className="inputHeader">Business Email</div>
                                    <div className="inputAuthentication">
                                        <Field
                                            className="inputAuthenticationInput"
                                            type="text"
                                            name="businessEmail"
                                            placeholder="Input business email"
                                        />
                                        <div className="error">
                                            <ErrorMessage name="businessEmail"/>
                                        </div>
                                    </div>
                                    <button className="loginButtonBusiness" type="submit">
                                        {props.isSubmitting ? <LoadingAnimationDots/> : 'Next step'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>

    )

}