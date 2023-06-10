import React, {useState, useEffect} from "react";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import './Payment.css'
import {useNavigate} from "react-router-dom";
import cross from '../../assets/img/Less Than.png'
import {PersonalCouponOrderHeader} from "../../ui-components/personal-coupon-order-header/PersonalCouponOrderHeader";
import * as Yup from "yup";
import {scrollTop} from "../business-coupon-order/tools";
import toast from "react-hot-toast";
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
import {
    PERSONAL_COUPON_ORDER_ADD_RECIPIENT_PERSONAL_DATA,
} from "../../routes";
import customerServices from "../../services/customer";
import {BackToHomePage} from "../../ui-components/back-to-homepage/backToHomePage";

export const validationSchemaCouponData = Yup.object().shape({
    value: Yup.number()
        .integer("Nominal value must be a whole number")
        .typeError("Nominal value must be a valid number")
        .min(1, "Nominal has to be minimal 1 euro")
        .max(5000, "Contact us, in case you need bigger than 5000€ nominal, please")
        .required("Nominal value is required"),
    congratsText: Yup.string()
        .max(250, "Congratulations text cannot exceed 250 characters")
        .required("Congratulations text is required"),
});

export const CheckCouponData = () => {
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        value: '',
        congratsText: '',
    });

    const saveToLocalStorage = (data) => {
        const currentLocalStorage = JSON.parse(localStorage.getItem('personalFormData')) || {};
        currentLocalStorage.couponData = data;
        localStorage.setItem('personalFormData', JSON.stringify(currentLocalStorage));
    };

    useEffect(() => {
        const storedData = localStorage.getItem("personalFormData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            const couponData = parsedData?.couponData;
            if (couponData) {
                setInitialValues(couponData);
            }
            console.log(couponData)

        }
    }, []);

    return (
        <>
            <div className="loginContent mobileWrapper">
                <div className="loginHeader">
                    Check Coupon Data
                </div>
                <div className="loginFormForm">
                    <div className="loginFormBusiness">
                        <PersonalCouponOrderHeader step={4}/>
                        <div className="authentication">
                            <Formik
                                enableReinitialize={true}
                                initialValues={initialValues}
                                onSubmit={(values, actions) => {
                                    actions.setSubmitting(true);


                                    setTimeout(async () => {
                                        try {
                                            saveToLocalStorage(values);
                                            const result = await customerServices.initiatePayment('personal');
                                            console.log(result)
                                            toast.success('Redirecting your to payment page');
                                            setTimeout(() => {
                                                if (result.status === 200) {
                                                    window.location.href = result?.data?.redirectUrl
                                                    // navigate(result?.data?.redirectUrl,  { replace: true });
                                                }
                                            }, 1000);

                                            scrollTop();
                                        } catch (error) {
                                            console.log(error)
                                            toast.error(error.data ? error.data : 'Opss... Something went wrong');
                                        }
                                        actions.setSubmitting(false);
                                    }, 1000);
                                }}
                                validationSchema={validationSchemaCouponData}
                            >
                                {(props: FormikProps<any>) => (
                                    <Form>
                                        <>
                                            <div className="inputBoards">
                                                <div className="inputHeader">
                                                    Nominal value
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field className="inputAuthenticationInput" type="text"
                                                           name="value"
                                                           placeholder="Input nominal value"/>
                                                    <div className="error">
                                                        <ErrorMessage name="value"/>
                                                    </div>
                                                </div>
                                                <div className="inputHeader">
                                                    Congratulations text
                                                </div>
                                                <div className="inputAuthentication">
                                                    <Field
                                                        className="inputAuthenticationInput resizeHeight"
                                                        name="congratsText"
                                                        id="congratsText"
                                                        component="textarea"
                                                        placeholder='Congratulations text...'
                                                    />
                                                    <div className='wordCountText'>
                                                        {props.values.congratsText?.length || 0}/250
                                                    </div>
                                                    <div className="error">
                                                        <ErrorMessage name="congratsText"/>
                                                    </div>
                                                </div>


                                                <div className="alignFlexBottom">
                                                    <button className="loginButton" type="submit">
                                                        {props.isSubmitting ? <LoadingAnimationDots/> : 'Next step'}
                                                    </button>
                                                    <button type="button" onClick={() => {
                                                        navigate(PERSONAL_COUPON_ORDER_ADD_RECIPIENT_PERSONAL_DATA)
                                                        scrollTop()
                                                    }}
                                                            className="loginButtonBack">
                                                        Go back
                                                    </button>
                                                </div>
                                                <BackToHomePage/>
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
export default CheckCouponData
