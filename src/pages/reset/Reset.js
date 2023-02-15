import React from "react";
import * as Yup from "yup";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import {LoadingAnimation} from "../../ui-components/loading-animation/LoadingAnimation";
import './Reset.css'

const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters")
        .max(32, "Password must not exceed 32 characters"),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const Reset = () => {
    return (
        <div className='loginContent'>
            <div className="loginHeader">
                Reset Password
            </div>
            <div className="loginFormForm">
                <div className="loginForm">
                    <div className="loginFormHeader">
                        Reset Password for genryeiter@gmail.com
                    </div>
                    <Formik
                        initialValues={{password: '', repeatPassword: ''}}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                console.log(values)
                                actions.setSubmitting(false);
                            }, 1000);
                        }}
                        validationSchema={ResetPasswordSchema}
                    >
                        {(props: FormikProps<any>) => (
                            <Form>
                                <div className="authentication">
                                    <div className="inputHeader">
                                        New Password
                                    </div>
                                    <div className="inputAuthentication">
                                        <Field className="inputAuthenticationInput" type="password"
                                               name="password" placeholder="Password"/>
                                        <div className="error">
                                            <ErrorMessage name="password"/>
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


export default Reset