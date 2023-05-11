import React, {useState, useEffect} from "react";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import './Payment.css'
import authService from "../../services/auth";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import cross from '../../assets/img/Less Than.png'
import {validationSchemaPersonal} from "./PaymentValidationSchema";
import {PersonalCouponOrderHeader} from "../../ui-components/personal-coupon-order-header/PersonalCouponOrderHeader";


export const AddRecipientPersonalData = () => {
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
                    Add Your Personal Data
                </div>
                <div className="loginFormForm">
                    <div className="loginForm">
                        <img src={cross} alt="goBack" className='goBackPayment' onClick={() => navigate('/')}/>
                        <PersonalCouponOrderHeader step={3}/>
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
                                        // todo: add personal-coupon-order methods and received extra data
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
                                validationSchema={validationSchemaPersonal}
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
