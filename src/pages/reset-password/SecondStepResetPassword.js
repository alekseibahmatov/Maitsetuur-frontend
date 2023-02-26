import React from "react";
import * as Yup from "yup";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import {LoadingAnimation} from "../../ui-components/loading-animation/LoadingAnimation";
import './Reset.css'
import authService from "../../services/auth";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const ResetPasswordSchema = Yup.object().shape({
    activationCode: Yup.string()
        .required("Activation code is a required field"),
    newPassword: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters")
        .max(32, "Password must not exceed 32 characters"),
    repeatPassword: Yup.string()
        .required("Repeat Password is a required field")
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

export const SecondStepResetPassword = () => {
    const navigate = useNavigate();

    return (
        <div className='loginContent'>
            <div className="loginHeader">
                Reset Password
            </div>
            <div className="loginFormForm">
                <div className="loginForm">
                    <div className="loginFormHeader">
                        Please check your email for verification code that we send you, use this code and input your new password
                    </div>
                    <Formik
                        initialValues={{activationCode: '', newPassword: ''}}
                        onSubmit={(values, actions) => {
                            delete values.repeatPassword;
                            setTimeout(async () => {
                                console.log(values)
                                try {
                                    const result = await authService.secondStepResetPassword(values);
                                    console.log(result)
                                    toast.success(result.data.message);
                                    setTimeout(() => {
                                        if (result.status === 200) {
                                            navigate('/login');
                                        }
                                    }, 1000);
                                } catch (error) {
                                    console.log(error)
                                    toast.error(error.data.message)
                                }
                                actions.setSubmitting(false)
                            }, 1000);
                        }}
                        validationSchema={ResetPasswordSchema}
                    >
                        {(props: FormikProps<any>) => (
                            <Form>
                                <div className="authentication">
                                    <div className="inputHeader">
                                        Activation Code
                                    </div>
                                    <div className="inputAuthentication">
                                        <Field className="inputAuthenticationInput" type="activationCode"
                                               name="activationCode" placeholder="Your Activation Code"/>
                                        <div className="error">
                                            <ErrorMessage name="activationCode"/>
                                        </div>
                                    </div>
                                    <div className="inputHeader">
                                        New Password
                                    </div>
                                    <div className="inputAuthentication">
                                        <Field className="inputAuthenticationInput" type="password"
                                               name="newPassword" placeholder="Password"/>
                                        <div className="error">
                                            <ErrorMessage name="newPassword"/>
                                        </div>
                                    </div>
                                    <div className="inputHeader">
                                        Repeat Password
                                    </div>
                                    <div className="inputAuthentication">
                                        <Field className="inputAuthenticationInput" type="password"
                                               name="repeatPassword" placeholder="Repeat Password"/>
                                        <div className="error">
                                            <ErrorMessage name="repeatPassword"/>
                                        </div>
                                    </div>
                                </div>
                                <button disabled={props.isSubmitting} className="loginButton" type="submit">
                                    {props.isSubmitting ? <LoadingAnimation/> : 'Reset Password'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}


export default SecondStepResetPassword