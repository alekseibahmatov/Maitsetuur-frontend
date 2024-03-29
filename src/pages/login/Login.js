import React from "react";
import './Login.css'
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import * as Yup from "yup";
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
import authService from "../../services/auth";
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom";

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
    const navigate = useNavigate();

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
                            setTimeout(async () => {
                                try {
                                    const result = await authService.login(values);
                                    toast.success("Login success");
                                    setTimeout(() => {
                                        if (result.status === 200) {
                                            navigate('/dashboard');
                                        }
                                    }, 1000);
                                } catch (error) {
                                    console.log(error)
                                    toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
                                }
                                actions.setSubmitting(false)
                            }, 1000);
                        }}
                        validationSchema={LoginSchema}
                    >
                        {(props: FormikProps<any>) => (
                            <Form>
                                <div className="inputBoards">


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
                                        <div onClick={() => navigate('/reset-password')} className="forgetPass">
                                            Forgot password?
                                        </div>
                                        <button disabled={props.isSubmitting} className="loginButton fullWidth" type="submit">
                                            {props.isSubmitting ? <LoadingAnimationDots/> : 'Login'}
                                        </button>
                                    </div>
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
