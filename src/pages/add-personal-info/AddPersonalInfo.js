import React, {useState, useEffect} from "react";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import {PersonalInfoSchema} from "./PersonalInfoSchema";
import './AddPersonalInfo.css'
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
import authService from "../../services/auth";
import toast from "react-hot-toast";
import {useNavigate, useParams} from "react-router-dom";

const initialValues = {
    fullName: "",
    mobilePhone: "",
    idCode: "",
    country: "",
    city: "",
    state: "",
    street: "",
    apartmentNumber: "",
    postcode: "",
    password: "",
    repeatPassword: "",
};

export const AddPersonalInfo = () => {
    const navigate = useNavigate();
    const {activationCode} = useParams();
    const [step, setStep] = useState(0);
    const [showPassword, setShowPassword] = useState(false);

    const checkActivationCodeOnMount = async () => {
        try {
            await authService.checkActivationCode(activationCode);
        } catch (error) {
            console.log(error.code)
            navigate('/')
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
    }

    useEffect(() => {
        console.log(activationCode)
        checkActivationCodeOnMount();
    });


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Add your personal information
                </div>
                <div className="loginFormForm">
                    <div className="loginForm">
                        <div className="authNumbers">
                            <div className="singleNumber activated">
                                1
                            </div>
                            <div className="numberLine">
                            </div>
                            <div className={step > 0 ? "singleNumber activated" : "singleNumber"}>
                                2
                            </div>
                            <div className="numberLine">
                            </div>
                            <div className={step > 1 ? "singleNumber activated" : "singleNumber"}>
                                3
                            </div>
                        </div>
                        <div className="loginFormHeader">
                            Please fill out the multiple step form
                            with your personal info
                        </div>

                        <div className="authentication">

                            <Formik
                                initialValues={initialValues}
                                onSubmit={(values, actions) => {
                                    const restructuredValues = {
                                        activationCode: activationCode,
                                        fullName: values.fullName,
                                        phone: values.mobilePhone,
                                        personalCode: values.idCode,
                                        address: {
                                            street: values.street,
                                            apartmentNumber: values.apartmentNumber,
                                            city: values.city,
                                            state: values.state,
                                            zipCode: values.postcode,
                                            country: values.country,
                                        },
                                        password: values.password,
                                    };

                                    setTimeout(async () => {
                                        try {
                                            console.log(activationCode)
                                            const result = await authService.addPersonalData(restructuredValues);
                                            console.log(result)
                                            toast.success(result.data.message, {
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
                                validationSchema={PersonalInfoSchema}
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
                                                           name="fullName"
                                                           placeholder="Input your full name"/>
                                                    <div className="error">
                                                        <ErrorMessage name="fullName"/>
                                                    </div>
                                                </div>
                                                <div className="inputHeader">
                                                    Your Mobile Phone
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="mobilePhone"
                                                           placeholder="Input your mobile phone"/>
                                                    <div className="error">
                                                        <ErrorMessage name="mobilePhone"/>
                                                    </div>
                                                </div>
                                                <div className="inputHeader">
                                                    Your ID Code
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="idCode"
                                                           placeholder="Input your ID Code"/>
                                                    <div className="error">
                                                        <ErrorMessage name="idCode"/>
                                                    </div>
                                                </div>
                                                <button onClick={() => {
                                                    setStep(1)
                                                }} className="loginButton fullWidth marginBottom">
                                                    Go to next step
                                                </button>
                                                </div>
                                            </>

                                        )}
                                        {step === 1 && (
                                            <React.Fragment>
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
                                                <div className="alignFlex marginBottom">
                                                <button type="button" onClick={() => {
                                                    setStep(2)
                                                }} className="loginButton">
                                                    Go to next step
                                                </button>
                                                <button type="button" onClick={() => setStep(0)}
                                                        className="loginButtonBack">
                                                    Go back
                                                </button>
                                                </div>
                                                </div>
                                            </React.Fragment>
                                        )}
                                        {step === 2 && (
                                            <>
                                                <div className="inputBoards">
                                                <div className="inputHeader">
                                                    Your Password
                                                </div>
                                                <div className="inputAuthentication">
                                                    <div className="inputAuthenticationWrapper">
                                                        <Field className="inputAuthenticationInput customPasswordInput"
                                                               type={showPassword ? "text" : "password"}
                                                               name="password"
                                                               placeholder="Input your password"/>
                                                        <button type="button" className="togglePasswordButton"
                                                                onClick={togglePasswordVisibility}>
                                                            {showPassword ? "Hide" : "Show"}
                                                        </button>
                                                    </div>
                                                    <div className="error">
                                                        <ErrorMessage name="password"/>
                                                    </div>
                                                </div>
                                                <div className="inputHeader">
                                                    Repeat Your Password
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput"
                                                           type={showPassword ? "text" : "password"}
                                                           name="repeatPassword"
                                                           placeholder="Repeat your password"/>
                                                    <div className="error">
                                                        <ErrorMessage name="repeatPassword"/>
                                                    </div>
                                                </div>
                                                {props.errors && Object.keys(props.errors).length > 0 && (
                                                    <div className="generalErrorText">
                                                        Something went wrong, check the form again
                                                    </div>
                                                )}
                                                <div className="alignFlex marginBottom">
                                                <button disabled={props.isSubmitting} className="loginButton"
                                                        type="submit">
                                                    {props.isSubmitting ? <LoadingAnimationDots/> : 'Submit'}
                                                </button>
                                                <button onClick={() => {
                                                    setStep(1)
                                                }} className="loginButtonBack">
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
export default AddPersonalInfo