import React from "react";
import './Login.css'
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import * as Yup from "yup";
import {LoadingAnimation} from "../../ui-components/loading-animation/LoadingAnimation";
import {login} from "../../actions/auth";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email is a required field")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is a required field")
        .min(8, "Password must be at least 8 characters")
        .max(32, "Password must not exceed 32 characters"),
})

export const Login = () => {

    return (
        <div className='loginContent'>
            <div className="loginHeader">
                Login to Present Perfect
            </div>
            <div className="loginFormForm">
                <div className="loginForm">
                    <div className="loginFormHeader">
                        Login to Present Perfect Management
                    </div>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        onSubmit={(values, actions) => {
                            setTimeout(() => {
                                login(values, actions)
                            }, 1000);
                        }}
                        validationSchema={LoginSchema}
                    >
                        {(props: FormikProps<any>) => (
                            <Form>
                                <div className="login">
                                    <div className="form">
                                        <div className="authentication">
                                            <div className="inputHeader">
                                                Your Email
                                            </div>
                                            <div className="inputAuthentication">
                                                <Field className="inputAuthenticationInput" type="email" name="email"
                                                       placeholder="Email"/>
                                                <div className="error">
                                                    <ErrorMessage name="email"/>
                                                </div>
                                            </div>
                                            <div className="inputHeader">
                                                Your Password
                                            </div>
                                            <div className="inputAuthentication">
                                                <Field className="inputAuthenticationInput" type="password"
                                                       name="password" placeholder="Password"/>
                                                <div className="error">
                                                    <ErrorMessage name="password"/>
                                                </div>
                                            </div>
                                        </div>
                                        <button disabled={props.isSubmitting} className="loginButton" type="submit">
                                            {props.isSubmitting ? <LoadingAnimation/> : 'Login'}
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login