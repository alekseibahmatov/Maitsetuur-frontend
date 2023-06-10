import React, {useEffect, useState} from "react";
import './BusinessAuth.css'
import left from '../../assets/img/cheevronLeft.svg'
import right from '../../assets/img/cheevronRight.svg'
import ProgressBar from "@ramonak/react-progress-bar";
import tick from '../../assets/img/tick.svg'
import {ErrorMessage, Field, Formik, Form, FormikProps, FieldArray} from "formik";
import BusinessCouponOrderHeader from "../../ui-components/business-coupon-order-header/BusinessCouponOrderHeader";
import toast from "react-hot-toast";
import {CSSTransition} from "react-transition-group";
import {scrollTop, prepareGeneralCouponObject, validateCurrentStep} from "./tools";
import {useNavigate} from "react-router-dom";
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
import {Tooltip} from 'react-tooltip'
import {validationSchema} from "./BusinessCouponOrderValidationSchema";
import {BUSINESS_COUPON_ORDER_ADD_COUPON_CONFIGURATION, BUSINESS_COUPON_ORDER_DETAILS} from "../../routes";
import customerServices from "../../services/customer";
import {BackToHomePage} from "../../ui-components/back-to-homepage/backToHomePage";


export const AddCouponData = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(4);
    const [couponStep, setCouponStep] = useState(0);
    const [coupons, setCoupons] = useState([]);
    const [tooltipText, setTooltipText] = useState(null);

    useEffect(() => {
        prepareGeneralCouponObject(setCoupons, navigate);
    }, []);


    const handlePrev = () => {
        if (couponStep > 0) {
            setCouponStep((prevStep) => prevStep - 1);
        }
    };


    const handleNext = (formikProps) => {
        setTooltipText(null)
        if (validateCurrentStep(formikProps, couponStep) && couponStep < coupons.length - 1) {
            setCouponStep((prevStep) => prevStep + 1);
        }
    };

    const handleSubmit = (values, actions) => {
        if (couponStep === coupons.length - 1) {
            actions.setSubmitting(true);
            setTimeout(async () => {
                try {
                    const storedData = localStorage.getItem('businessFormData');
                    if (storedData) {
                        const parsedData = JSON.parse(storedData);
                        parsedData.generalCouponObject = values.coupons;
                        localStorage.setItem('businessFormData', JSON.stringify(parsedData));
                        console.log(parsedData);
                    }
                    const result = await customerServices.initiatePayment('business');
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
                    toast.error(
                        error.data?.message
                            ? error.data.message
                            : 'Opss... Something went wrong'
                    );
                }
                actions.setSubmitting(false);
            }, 1000);
        } else {
            setTooltipText("Click here to reach the last step!");
            toast.error('Check out all the coupons and make it to the last step!');
            setTimeout(() => {
                actions.setSubmitting(false);
            }, 1000);
        }
    };

    return (
        <>
            <div className="loginContent mobileWrapper">
                <div className="loginHeader">
                    Add Coupon Data
                </div>
                <div className="loginFormForm">
                    <div className="loginFormBusiness">
                        <BusinessCouponOrderHeader step={step}/>
                        {coupons.length > 0 && (
                            <Formik
                                enableReinitialize={true}
                                initialValues={{coupons}}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {(props: FormikProps<any>) => (
                                    <Form>
                                        <div className="inputBoards">

                                            <div className="doneProcessWithSwipes">
                                                <div className="cheevronLeft" onClick={handlePrev}>
                                                    <img src={left} alt=""/>
                                                </div>
                                                <div className="howManyAreDone">
                                                    <div className="howManyAreDoneUpper">
                                                        {couponStep + 1} out of {coupons.length}
                                                    </div>
                                                    <div className="howManyAreDoneLower">
                                                        Coupons ready
                                                    </div>
                                                </div>
                                                <div className="cheevronRight" id="next-coupon-button"
                                                     onClick={() => handleNext(props)}>
                                                    <img src={right} alt=""/>
                                                </div>
                                                <Tooltip
                                                    anchorId="next-coupon-button"
                                                    place="right"
                                                    content={tooltipText}
                                                    isOpen={tooltipText}
                                                />

                                            </div>

                                            <div className="progressBar">

                                                <CSSTransition
                                                    in={((couponStep + 1) / coupons.length) === 1}
                                                    timeout={600}
                                                    classNames="fade"
                                                    unmountOnExit
                                                >
                                                    <img src={tick} alt="" className='doneTick'/>
                                                </CSSTransition>

                                                <ProgressBar completed={((couponStep + 1) / coupons.length) * 100}
                                                             className="wrapperProgress"
                                                             isLabelVisible={false}
                                                             height='7px'
                                                             bgColor='#5541D7'
                                                             baseBgColor='#ffffff'
                                                />
                                            </div>

                                            <FieldArray name="coupons">
                                                {({remove, push}) =>
                                                    props?.values?.coupons?.map((coupon, index) => index === couponStep && (
                                                        <div key={index}>
                                                            {Object.keys(props?.errors?.coupons?.[index] ?? {}).length !== 0 ?
                                                                <Tooltip
                                                                    anchorId="next-coupon-button"
                                                                    place="top"
                                                                    content={"Fill out the previous coupons correctly, to continue!"}
                                                                />
                                                                :
                                                                null
                                                            }
                                                            <div className="">
                                                                <div className="inputHeader">
                                                                    Recipient Greeting
                                                                </div>
                                                                <div className="inputAuthentication">
                                                                    <Field className="inputAuthenticationInput"
                                                                           type="text"
                                                                           name={`coupons.${index}.greeting`}
                                                                           placeholder="Input recipient greeting"/>
                                                                    <div className="error">
                                                                        <ErrorMessage
                                                                            name={`coupons.${index}.greeting`}/>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="">
                                                                <div className="inputHeader">
                                                                    Recipient Email
                                                                </div>
                                                                <div className="inputAuthentication">
                                                                    <Field className="inputAuthenticationInput"
                                                                           type="text" name={`coupons.${index}.email`}
                                                                           placeholder="Input your email"/>
                                                                    <div className="error">
                                                                        <ErrorMessage name={`coupons.${index}.email`}/>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="">
                                                                <div className="inputHeader">
                                                                    Coupon nominal
                                                                </div>
                                                                <div className="inputAuthentication">
                                                                    <Field className="inputAuthenticationInput"
                                                                           type="text"
                                                                           name={`coupons.${index}.nominalValue`}
                                                                           placeholder="Input coupon nominal"/>
                                                                    <div className="error">
                                                                        <ErrorMessage
                                                                            name={`coupons.${index}.nominalValue`}/>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="">
                                                                <div className="inputHeader">
                                                                    Recipient Congratulations
                                                                </div>
                                                                <div className="inputWrapper">
                                                                    <Field
                                                                        className="inputAuthenticationInput resizeHeight paddingRight"
                                                                        name={`coupons.${index}.greetingsText`}
                                                                        id="greetingsText"
                                                                        component="textarea"
                                                                        placeholder='Congratulations text...'
                                                                    />
                                                                    <div className='wordCountText'>
                                                                        {props.values?.coupons[index]?.greetingsText?.length}/250
                                                                    </div>
                                                                    <div className="error">
                                                                        <ErrorMessage
                                                                            name={`coupons.${index}.greetingsText`}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </FieldArray>

                                            <div className="">
                                                <button disabled={props.isSubmitting} type="submit" id="tooltip-proceed"
                                                        className={props.isValid ? "proceedPaymentButton done" : "proceedPaymentButton"}>
                                                    {props.isSubmitting ?
                                                        <LoadingAnimationDots/> : "Proceed to personal-coupon-order"}
                                                </button>
                                                {/*{couponStep === coupons.length - 1 ?*/}
                                                {/*    <Tooltip*/}
                                                {/*        anchorId="tooltip-proceed"*/}
                                                {/*        place="top"*/}
                                                {/*        content={"You can proceed with personal-coupon-order if you have filled the form correctly!"}*/}
                                                {/*    />*/}
                                                {/*    :*/}
                                                {/*    null*/}
                                                {/*}*/}
                                                {props.isValid ?
                                                    null
                                                    :
                                                    <div className="error" style={{textAlign: "center"}}>
                                                        Please check every coupon, <br/> and fill out all coupons
                                                        correctly!
                                                    </div>
                                                }
                                                <button onClick={() => {
                                                    navigate(BUSINESS_COUPON_ORDER_ADD_COUPON_CONFIGURATION)
                                                    scrollTop()
                                                }} type="button" className="loginButtonBusinessSmall">
                                                    Go back to configuration step
                                                </button>

                                            </div>
                                            <BackToHomePage/>

                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        )}
                    </div>
                </div>
            </div>
        </>

    )

}





