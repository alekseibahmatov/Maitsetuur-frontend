import React, {useState, useEffect} from "react";
import "./BusinessAuth.css";
import {Formik, Form, Field, FormikProps, ErrorMessage} from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
import {useNavigate} from "react-router-dom";
import {scrollTop} from "./tools";
import BusinessCouponOrderHeader from "../../ui-components/business-coupon-order-header/BusinessCouponOrderHeader";
import {
    BUSINESS_COUPON_ORDER_ADD_BUSINESS_ADDRESS,
    BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION,
    BUSINESS_COUPON_ORDER_ADD_COUPON_CONFIGURATION
} from "../../routes";

const validationSchema = Yup.object().shape({
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    street: Yup.string().required("Street is required"),
    houseNumber: Yup.string().required("House number is required"),
    postcode: Yup.string().required("Postcode is required"),
});

export const AddBusinessAddress = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        country: "",
        city: "",
        state: "",
        street: "",
        houseNumber: "",
        postcode: "",
    });

    const saveToLocalStorage = (data) => {
        const currentLocalStorage = JSON.parse(localStorage.getItem('businessFormData')) || {};
        currentLocalStorage.businessAddress = data;
        localStorage.setItem('businessFormData', JSON.stringify(currentLocalStorage));
    };

    useEffect(() => {
        const storedData = localStorage.getItem('businessFormData');
        if (!storedData) {
            navigate(BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION);
        }
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            if (!parsedData.businessInformation) {
                navigate(BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION);
            }
            const businessInformation = parsedData?.businessAddress;
            if (businessInformation) {
                setInitialValues(businessInformation);
            }
        }
    }, []);

    return (
        <>
            <div className="loginContent">
                <div className="loginHeader">Add Business Address</div>
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
                                        scrollTop();
                                        navigate(BUSINESS_COUPON_ORDER_ADD_COUPON_CONFIGURATION);
                                    } catch (error) {
                                        console.log(error.code);
                                        toast.error(error.data.message ? error.data.message : "Opss... Something went wrong");
                                    }
                                    actions.setSubmitting(false);
                                }, 1000);
                            }}
                        >
                            {(props: FormikProps<any>) => (
                                <Form className="inputBoards">
                                    <div className="inputHeader">Your Country</div>
                                    <div className="inputAuthentication">
                                        <Field className="inputAuthenticationInput" type="text" name="country"
                                               placeholder="Input your country"/>
                                        <div className="error">
                                            <ErrorMessage name="country"/>
                                        </div>
                                    </div>
                                    <div className="inputHeader">Your City</div>
                                    <div className="inputAuthentication">
                                        <Field className="inputAuthenticationInput" type="text" name="city"
                                               placeholder="Input your city"/>
                                        <div className="error">
                                            <ErrorMessage name="city"/>
                                        </div>
                                    </div>
                                    <div className="inputHeader">Your State</div>
                                    <div className="inputAuthentication">
                                        <Field className="inputAuthenticationInput" type="text" name="state"
                                               placeholder="Input your state"/>
                                        <div className="error">
                                            <ErrorMessage name="state"/>
                                        </div>
                                    </div>
                                    <div className="inputHeader">Your Street</div>
                                    <div className="inputAuthentication">
                                        <Field className="inputAuthenticationInput" type="text" name="street"
                                               placeholder="Input your street"/>
                                        <div className="error">
                                            <ErrorMessage name="street"/>
                                        </div>
                                    </div>
                                    <div className="inputHeader">Your House Number</div>
                                    <div className="inputAuthentication">
                                        <Field className="inputAuthenticationInput" type="text" name="houseNumber"
                                               placeholder="Input your house number"/>
                                        <div className="error">
                                            <ErrorMessage name="houseNumber"/>
                                        </div>
                                    </div>
                                    <div className="inputHeader">Your Postcode</div>
                                    <div className="inputAuthentication">
                                        <Field className="inputAuthenticationInput" type="text" name="postcode"
                                               placeholder="Input your postcode"/>
                                        <div className="error">
                                            <ErrorMessage name="postcode"/>
                                        </div>
                                    </div>
                                    <div className="alignFlexBottom">
                                        <button className="loginButton" type="submit">
                                            {props.isSubmitting ? <LoadingAnimationDots/> : "Next step"}
                                        </button>
                                        <button onClick={() => {
                                            navigate(BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION)
                                            scrollTop()
                                        }} type="button" className="loginButtonBack">
                                            Go back
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};
