import React from "react";
import * as Yup from "yup";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
import './Reset.css'
import authService from "../../services/auth";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const FirstStepResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
});

export const FirstStepResetPassword = () => {
    const navigate = useNavigate();

    return (
        <div className='loginContent'>
            <div className="loginHeader">
                Reset Password
            </div>
            <div className="loginFormForm">
                <div className="loginForm">
                    <div className="loginFormHeader">
                        To reset your password, please type in your email and you will receive verification code for the
                        next step
                    </div>
                    <Formik
                        initialValues={{email: ''}}
                        onSubmit={(values, actions) => {
                            setTimeout(async () => {
                                console.log(values)
                                try {
                                    const result = await authService.firstStepResetPassword(values);
                                    toast.success(result.data.message);
                                    setTimeout(() => {
                                        if (result.status === 200) {
                                            console.log(result)
                                            navigate('/reset-password-final');
                                        }
                                    }, 1000);
                                } catch (error) {
                                    console.log(error.code)
                                    toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
                                    actions.setSubmitting(false)
                                }
                                actions.setSubmitting(false)
                            }, 1000);
                        }}
                        validationSchema={FirstStepResetPasswordSchema}
                    >
                        {(props: FormikProps<any>) => (
                            <Form>
                                <div className="authentication">
                                    <div className="inputHeader">
                                        Your Email
                                    </div>
                                    <div className="inputAuthentication">
                                        <Field className="inputAuthenticationInput" type="email"
                                               name="email" placeholder="Your Email"/>
                                        <div className="error">
                                            <ErrorMessage name="email"/>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => navigate('/login')} className="forgetPass">
                                    Remembered Password? Go To Login
                                </div>
                                <button disabled={props.isSubmitting} className="loginButton" type="submit">
                                    {props.isSubmitting ? <LoadingAnimationDots/> : 'Receive Verification Code'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}


export default FirstStepResetPassword