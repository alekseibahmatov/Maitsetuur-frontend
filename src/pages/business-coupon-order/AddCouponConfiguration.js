import React, {useEffect} from "react";
import {Formik, Form, Field, ErrorMessage, FormikProps} from "formik";
import * as Yup from "yup";
import './BusinessAuth.css'
import {useState} from "react";
import arrow from '../../assets/img/Arrow 11.svg'
import example from '../../assets/img/Group 630.svg'
import {CSSTransition} from "react-transition-group";
import './transitions.css';
import {LoadingAnimationDots} from "../../ui-components/loading-animation/loading-animation-dots/LoadingAnimationDots";
import {scrollTop} from "./tools";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import BusinessCouponOrderHeader from "../../ui-components/business-coupon-order-header/BusinessCouponOrderHeader";
import {
    BUSINESS_COUPON_ORDER_ADD_BUSINESS_ADDRESS,
    BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION,
    BUSINESS_COUPON_ORDER_ADD_COUPON_DATA
} from "../../routes";
import {AddCouponData} from "./AddCouponData";

const CouponConfiguratorValidationSchema = Yup.object().shape({
    couponsAmount: Yup.number()
        .integer("Coupons amount must be a whole number")
        .typeError("Enter valid number")
        .min(1, "Coupons amount must be at least 1")
        .max(100, "Contact us, in case you need more than 100 certificates, please")
        .required("Coupons amount is required"),
    notPersonalName: Yup.string().when("checkBox1", {
        is: true,
        then: Yup.string()
            .required("General treatment is required")
            .max(35, "General greeting can't be longer than 35 symbols"),
        otherwise: Yup.string().notRequired(),
    }),
    nominalValue: Yup.number().when("checkBox2", {
        is: true,
        then: Yup.number()
            .integer("Nominal value must be a whole number")
            .typeError("Nominal value must be a valid number")
            .min(1, "Nominal has to be minimal 1 euro")
            .max(5000, "Contact us, in case you need bigger than 5000€ nominal, please")
            .required("Nominal value is required"),
        otherwise: Yup.number().notRequired(),
    }),
    greetingsText: Yup.string().when("checkBox3", {
        is: true,
        then: Yup.string()
            .required("Greeting text is required")
            .max(250, "Greetings text can't exceed 250 characters"),
        otherwise: Yup.string().notRequired(),
    }),
});

export const AddCouponConfiguration = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(2);
    const [couponsAmount, setCouponsAmount] = useState(0);
    const [checkboxesVisible, setCheckboxesVisible] = useState(false);
    const [previewValues, setPreviewValues] = useState({
        nominalValue: 'XXX€',
        notPersonalName: '...',
        greetingsText: ''
    });

    const [initialValues, setInitialValues] = useState({
        checkBox1: false,
        checkBox2: false,
        checkBox3: false,
        couponsAmount: "",
        notPersonalName: "",
        nominalValue: "",
        greetingsText: "",
    });

    const handleCouponsAmountChange = (props, event) => {
        const value = parseInt(event.target.value, 10);

        if (isNaN(value) || value < 1) {
            setCheckboxesVisible(false);
            handlePartialFormReset(props);
            setPreviewValues({nominalValue: 'XXX€', notPersonalName: '...', greetingsText: ''});
        } else {
            setCouponsAmount(value);
            setCheckboxesVisible(value > 1);
        }
    };


    const handlePartialFormReset = (props) => {
        props.setFieldValue("checkBox1", false);
        props.setFieldValue("checkBox2", false);
        props.setFieldValue("checkBox3", false);
        props.setFieldValue("greetingsText", "");
        props.setFieldValue("nominalValue", "");
        props.setFieldValue("notPersonalName", "");
        props.setFieldTouched("greetingsText", false);
        props.setFieldTouched("nominalValue", false);
        props.setFieldTouched("notPersonalName", false);
    }

    const handleNotPersonalNameChange = (e) => {
        const maxLength = 15;
        const trimmedValue = e.target.value.slice(0, maxLength);
        const modifiedValue =
            e.target.value.length > maxLength ? trimmedValue + "..." : e.target.value;

        if (modifiedValue !== "" && modifiedValue.trim() !== "") {
            setPreviewValues({...previewValues, notPersonalName: modifiedValue});
        } else {
            setPreviewValues({...previewValues, notPersonalName: "..."});
        }
    };

    const handleNominalValueChange = (e) => {
        if (e.target.value && /^\d{1,4}$/.test(e.target.value)) {
            setPreviewValues({...previewValues, nominalValue: e.target.value + "€"});
        } else {
            setPreviewValues({...previewValues, nominalValue: "XXX€"});
        }
    };

    const handleGreetingsTextChange = (props, e) => {
        const text = e.target.value
        const maxLength = 100;
        const trimmedValue = text.slice(0, maxLength);
        const modifiedValue =
            text.length > maxLength ? trimmedValue + "..." : text;

        if (modifiedValue !== "" && modifiedValue.trim() !== "") {
            setPreviewValues({...previewValues, greetingsText: modifiedValue});
        } else {
            setPreviewValues({...previewValues, greetingsText: ""});
        }
    };

    const saveToLocalStorage = (data) => {
        const currentLocalStorage = JSON.parse(localStorage.getItem('businessFormData')) || {};
        currentLocalStorage.couponConfiguration = data;
        currentLocalStorage.generalCouponObject = {};
        localStorage.setItem('businessFormData', JSON.stringify(currentLocalStorage));
    };

    useEffect(() => {
        const storedData = localStorage.getItem('businessFormData');
        if (!storedData) {
            navigate(BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION);
        }
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            if (!parsedData.businessAddress) {
                navigate(BUSINESS_COUPON_ORDER_ADD_BUSINESS_ADDRESS);
            }
            const couponConfiguration = parsedData?.couponConfiguration;
            if (couponConfiguration) {
                setInitialValues(couponConfiguration);
                setPreviewValues(couponConfiguration);
                setCouponsAmount(couponConfiguration?.couponsAmount)
                if (couponConfiguration?.couponsAmount > 1) {
                    setCheckboxesVisible(true)
                }
            }
        }
    }, []);

    return (
        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Add Coupon Configuration
                </div>
                <div className="loginFormForm">
                    <Formik
                        enableReinitialize={true}
                        initialValues={initialValues}
                        validationSchema={CouponConfiguratorValidationSchema}
                        onSubmit={(values, actions) => {
                            console.log(values)
                            actions.setSubmitting(true);
                            setTimeout(() => {
                                try {
                                    saveToLocalStorage(values);
                                    scrollTop();
                                    navigate(BUSINESS_COUPON_ORDER_ADD_COUPON_DATA);
                                } catch (error) {
                                    console.log(error.code);
                                    toast.error(error.data.message ? error.data.message : "Opss... Something went wrong");
                                }
                                actions.setSubmitting(false);
                            }, 1000);
                        }}
                    >
                        {(props: FormikProps<any>) => (
                            <Form onChange={(e) => {
                                // console.log(e.target.id)
                                if (e.target.id === 'couponsAmount') {
                                    handleCouponsAmountChange(props, e)
                                } else if (e.target.id === 'notPersonalName') {
                                    handleNotPersonalNameChange(e)
                                } else if (e.target.id === 'nominalValue') {
                                    handleNominalValueChange(e)
                                } else if (e.target.id === 'greetingsText') {
                                    handleGreetingsTextChange(props, e)
                                } else if (e.target.id === 'checkBox1') {
                                    setPreviewValues({...previewValues, notPersonalName: "..."});
                                    props.setFieldTouched("notPersonalName", false);
                                    props.setFieldValue("notPersonalName", "");
                                } else if (e.target.id === 'checkBox2') {
                                    setPreviewValues({...previewValues, nominalValue: "XXX€"});
                                    props.setFieldTouched("nominalValue", false);
                                    props.setFieldValue("nominalValue", "");
                                } else if (e.target.id === 'checkBox3') {
                                    setPreviewValues({...previewValues, greetingsText: ""});
                                    props.setFieldTouched("greetingsText", false);
                                    props.setFieldValue("greetingsText", "");
                                }
                                }}>
                                <div className="loginFormBusiness">
                                    <BusinessCouponOrderHeader step={step}/>

                                    <div className="couponExampleLeftRight">

                                        <div className="leftSideCouponInput">

                                            <div className="inputHeader">
                                                Coupons amount
                                            </div>
                                            <div className="inputAuthentication">
                                                <Field
                                                    className="inputAuthenticationInput"
                                                    type="number"
                                                    name="couponsAmount"
                                                    pattern="\d*"
                                                    placeholder="Input coupons amount"
                                                    id="couponsAmount"
                                                />
                                                <div className="error">
                                                    <ErrorMessage name="couponsAmount"/>
                                                </div>
                                            </div>

                                            <CSSTransition
                                                in={checkboxesVisible}
                                                timeout={300}
                                                classNames="fade"
                                                unmountOnExit
                                            >

                                                {/*<div className="checkBoxes">*/}
                                                <div className="">

                                                    <label className="singleCheckBox">
                                                        <label className="form-control">
                                                            <Field
                                                                type="checkbox"
                                                                name="checkBox1"
                                                                id="checkBox1"
                                                                className="input"
                                                            />
                                                        </label>
                                                        <div className='checkBoxText'>
                                                            The coupons wont be personal?
                                                        </div>
                                                    </label>

                                                    <CSSTransition
                                                        in={props.values.checkBox1}
                                                        timeout={300}
                                                        classNames="fade"
                                                        unmountOnExit
                                                    >
                                                        <div className="inputAuthenticationWrapper">
                                                            <div className="inputAuthentication">
                                                                <div className="inputWrapper">
                                                                    <Field
                                                                        className="inputAuthenticationInput paddingRight"
                                                                        type="text"
                                                                        name="notPersonalName"
                                                                        id="notPersonalName"
                                                                        placeholder="Input general treatment"
                                                                    />
                                                                    <div className="numbersForCoupon">
                                                                        1
                                                                    </div>
                                                                </div>
                                                                <div className="error">
                                                                    <ErrorMessage name="notPersonalName"/>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </CSSTransition>

                                                    <label className="singleCheckBox">
                                                        <label className="form-control">
                                                            <Field
                                                                type="checkbox"
                                                                name="checkBox2"
                                                                id="checkBox2"
                                                                className="input"
                                                            />
                                                        </label>
                                                        <div className='checkBoxText'>
                                                            Will coupons have the same nominal value?
                                                        </div>
                                                    </label>

                                                    <CSSTransition
                                                        in={props.values.checkBox2}
                                                        timeout={300}
                                                        classNames="fade"
                                                        unmountOnExit
                                                    >
                                                        <div className="inputAuthenticationWrapper">
                                                            <div className="inputAuthentication">
                                                                <div className="inputWrapper">
                                                                    <Field
                                                                        className="inputAuthenticationInput paddingRight"
                                                                        type="text"
                                                                        name="nominalValue"
                                                                        id="nominalValue"
                                                                        placeholder="Input nominal value"
                                                                    />
                                                                    <div className="numbersForCoupon ">
                                                                        2
                                                                    </div>
                                                                </div>
                                                                <div className="error">
                                                                    <ErrorMessage name="nominalValue"/>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </CSSTransition>

                                                    <label className="singleCheckBox">
                                                        <label className="form-control">
                                                            <Field
                                                                type="checkbox"
                                                                name="checkBox3"
                                                                id="checkBox3"
                                                                className="input"
                                                            />
                                                        </label>
                                                        <div className='checkBoxText'>
                                                            Will coupons have the same greeting text?
                                                        </div>
                                                    </label>

                                                    <CSSTransition
                                                        in={props.values.checkBox3}
                                                        timeout={300}
                                                        classNames="fade"
                                                        unmountOnExit
                                                    >
                                                        <div className="inputAuthenticationWrapper">
                                                            <div className="inputAuthentication">
                                                                <div className="inputWrapper">
                                                                    <Field
                                                                        className="inputAuthenticationInput resizeHeight paddingRight"
                                                                        name="greetingsText"
                                                                        id="greetingsText"
                                                                        component="textarea"
                                                                        placeholder='Congratulations text...'
                                                                    />
                                                                    <div className='wordCountText'>
                                                                        {props.values.greetingsText?.length}/250
                                                                    </div>
                                                                    <div className="error">
                                                                        <ErrorMessage name="greetingsText"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="numbersForCoupon top10">
                                                                3
                                                            </div>
                                                        </div>
                                                    </CSSTransition>
                                                </div>
                                            </CSSTransition>
                                        </div>

                                        <CSSTransition
                                            in={(props.values.checkBox1 || props.values.checkBox2 || props.values.checkBox3) && checkboxesVisible}
                                            timeout={300}
                                            classNames="fade"
                                            unmountOnExit
                                        >
                                            <div className="rightSideCouponExample">
                                                <div className="headerWithArrow">
                                                    <div className="couponExampleHeader">
                                                        Coupon Example
                                                    </div>
                                                    <div className="arrowCouponExample">
                                                        <img src={arrow} alt="" className='arrowCoupon'/>
                                                    </div>
                                                </div>
                                                <div className="mainExampleSvg">
                                                    <div className="couponsAmountPosition">{Math.min(couponsAmount, 999)}</div>
                                                    <div
                                                        className="notPersonalNamePosition">{previewValues.notPersonalName}</div>
                                                    <div
                                                        className="nominalValuePosition">{previewValues.nominalValue}</div>
                                                    <div
                                                        className="greetingsTextPosition">{previewValues.greetingsText}</div>
                                                    <img src={example} alt="" className='exampleCoupon'/>
                                                </div>
                                            </div>

                                        </CSSTransition>

                                    </div>
                                    <div className="alignFlexBusiness">
                                        <button className="loginButton" type="submit">
                                            {props.isSubmitting ? <LoadingAnimationDots/> : "Next step"}
                                        </button>
                                        <button onClick={() => {
                                            navigate(BUSINESS_COUPON_ORDER_ADD_BUSINESS_ADDRESS)
                                            scrollTop()
                                        }} type="button" className="loginButtonBack">
                                            Go back
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>

    )

}
