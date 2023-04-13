import React, {useState, useEffect} from "react";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import './Payment.css'
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
import authService from "../../services/auth";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import cross from '../../assets/img/Less Than.png'
import {paymentValidationSchema} from "./PaymentValidationSchema";


export const Payment = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const [localStorageFormData, setLocalStorageFormData] = useState({});

    const getPaymentInitialValues = (localStorageData) => {
        return {
            fromFullName: localStorageData?.from || '',
            fromPhone: '',
            fromEmail: '',
            country: '',
            city: '',
            state: '',
            street: '',
            apartmentNumber: '',
            postcode: '',
            toFullName: localStorageData?.to || '',
            toPhone: localStorageData?.receiverPhone || '',
            toEmail: localStorageData?.receiverMail || '',
            congratsText: ''
        };
    };

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem("certificateFormData"));
        if (localStorageData) {
            setLocalStorageFormData(localStorageData);
        }
    }, []);

    const paymentInitialValues = getPaymentInitialValues(localStorageFormData)

    return (
        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Fill payment information
                </div>
                <div className="loginFormForm">
                    <div className="loginForm">
                        <img src={cross} alt="goBack" className='goBackPayment' onClick={() => navigate('/')}/>
                        <div className="authNumbers">
                            <div className="singleNumber activated">
                                1
                            </div>
                            <div className="numberLine">
                            </div>
                            <div className={step > 0 ? "singleNumber activated" : "singleNumber"}>
                                2
                            </div>
                        </div>
                        <div className="loginFormHeader">
                            Please fill out the information about yourself and recipient
                        </div>
                        <div className="authentication">
                            <Formik
                                enableReinitialize={true}
                                initialValues={paymentInitialValues}
                                onSubmit={(values, actions) => {
                                    const restructuredValues = {
                                        value: 0,
                                        fromEmail: values.fromEmail,
                                        toFullName: values.toFullName,
                                        fromFullName: values.fromFullName,
                                        toEmail: values.toEmail,
                                        toPhone: values.toPhone,
                                        fromPhone: values.fromPhone,
                                        congratsText: values.congratsMessage,
                                        billingAddress: {
                                            street: values.street,
                                            apartmentNumber: values.apartmentNumber,
                                            city: values.city,
                                            state: values.state,
                                            zipCode: values.postcode,
                                            country: values.country
                                        },
                                        // todo: add payment methods and received extra data
                                        preferredProvider: ''
                                    }

                                    setTimeout(async () => {
                                        try {
                                            const result = await authService.addPersonalData(restructuredValues);
                                            toast.success(result.data?.message, {
                                                duration: 4000,
                                            });
                                            setTimeout(() => {
                                                if (result.status === 200) {
                                                    navigate('/login');
                                                }
                                            }, 1000);
                                        } catch (error) {
                                            console.log(error)
                                            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
                                        }
                                        actions.setSubmitting(false)
                                    }, 1000);
                                }}
                                validationSchema={paymentValidationSchema}
                            >
                                {(props: FormikProps<any>) => (
                                    <Form>
                                        {step === 0 && (
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
                                                <button onClick={() => {
                                                    setStep(1)
                                                }} className="loginButton fullWidth">
                                                    Go to next step
                                                </button>
                                                </div>
                                            </>
                                        )}
                                        {step === 1 && (
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
                                                    Recipient's Mobile Phone
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="toPhone"
                                                           placeholder="Input your mobile phone"/>
                                                    <div className="error">
                                                        <ErrorMessage name="toPhone"/>
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
                                                    <button type="submit" className="loginButton">
                                                        Submit
                                                    </button>
                                                    <button type="button" onClick={() => setStep(0)}
                                                            className="loginButtonBack">
                                                        Go back
                                                    </button>
                                                </div>
                                                </div>
                                            </>
                                        )}
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
export default Payment