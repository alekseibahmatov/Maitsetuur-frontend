import React from 'react'
import {ErrorMessage, Field, Form, Formik, FormikProps} from "formik";
import {
    initialValuesBusiness,
    initialValuesIndividual, initialValuesPersonal,
    validationSchemaBusiness,
    validationSchemaIndividual, validationSchemaPersonal
} from "./CertificateFormik";
import {submitBusinessForm, submitPersonalForm} from "./tools";
import {LoadingAnimationDots} from "../loading-animation/loading-animation-dots/LoadingAnimationDots";
import {useNavigate} from "react-router-dom";

export const CertificateBusinessForm = ({togglePrivacy}) => {
    const navigate = useNavigate();

    return (
        <>
            <Formik
                initialValues={initialValuesBusiness}
                validationSchema={validationSchemaBusiness}
                onSubmit={(values, actions) => {
                    submitBusinessForm(values, actions, navigate)
                }}
            >
                {(props: FormikProps<any>) => (
                    <Form>
                        <div className="explainForCompany">
                            <h3> Since ordering more than one certificates can be a little
                                inconvenient, we created automated certificate order form!</h3>
                        </div>
                        <div className="form">

                            <div className="from_who">
                                <Field className="certificateInputValue" type="text"
                                       name="businessName"
                                       placeholder="Business Name"/>
                                <div className="error">
                                    <ErrorMessage name="businessName"/>
                                </div>
                            </div>

                            <div className="from_who">
                                <Field className="certificateInputValue" type="text"
                                       name="businessEmail"
                                       placeholder="Business Email"/>
                                <div className="error">
                                    <ErrorMessage name="businessEmail"/>
                                </div>
                            </div>

                        </div>

                        <div className="confirm">
                            <button className={props.isValid ? "pay filled" : "pay"}
                                    type="submit">
                                {props.isSubmitting ? <LoadingAnimationDots/> : 'Continue'}
                            </button>
                            <div className="confirmCheckbox">
                                <Field className="termsCheckbox" type="checkbox"
                                       name="termsCheckbox"/>
                                <div>
                                    I agree with the <span className="blue"
                                                           onClick={togglePrivacy}>Terms of personal data processing</span>.
                                    <div className="error">
                                        <ErrorMessage name="termsCheckbox"/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Form>
                )}
            </Formik>
        </>
    )
}

export const CertificatePersonalForm = ({selectedNominal, setSelectedNominal, togglePrivacy}) => {
    const nominals = [50, 100, 200, 500];
    const navigate = useNavigate();

    const Select = ({value, click, status}) => {
        return (
            <li className={status ? 'active' : 'nominal'} onClick={click}>
                {value + '€'}
            </li>
        );
    }

    const handleSelect = (key, props) => {
        console.log(nominals[key])
        props.setFieldValue('nominal', nominals[key])
        setSelectedNominal(nominals[key]);
    };


    return (
        <>
            <Formik
                initialValues={initialValuesPersonal}
                validationSchema={validationSchemaPersonal}
                onSubmit={(values, actions) => {
                    const reformattedFormValues = {
                        fromPersonalData: {
                            fromFullName: values.fromFullName,
                        },
                        toPersonalData: {
                            toFullName: values.toFullName,
                            toEmail: values.toEmail,
                        },
                        couponData: {
                            nominal: values.nominal,
                            congratsMessage: values.congratsMessage
                        }
                    }
                    submitPersonalForm(reformattedFormValues, actions, navigate)
                }}
            >
                {(props: FormikProps<any>) => (
                    <Form>
                        <div className="certificateButtons">
                            {nominals.map((value, key) => (
                                <Select key={key} status={selectedNominal === nominals[key]}
                                        click={() => handleSelect(key, props)} value={value}/>
                            ))}
                            <div className="error">
                                <ErrorMessage name="nominal"/>
                            </div>
                        </div>
                        <div className="form">

                            <div className="from_who">
                                <Field className="certificateInputValue" type="text"
                                       name="fromFullName"
                                       placeholder="Your Full name"/>
                                <div className="error">
                                    <ErrorMessage name="fromFullName"/>
                                </div>
                            </div>

                            <div className="from_who">
                                <Field className="certificateInputValue" type="text"
                                       name="toFullName"
                                       placeholder="Recipient's Full Name"/>
                                <div className="error">
                                    <ErrorMessage name="toFullName"/>
                                </div>
                            </div>

                            <div className="from_who">
                                <Field className="certificateInputValue" type="text"
                                       name="toEmail"
                                       placeholder="Recipient's email"/>
                                <div className="error">
                                    <ErrorMessage name="toEmail"/>
                                </div>
                            </div>

                            <div className="from_who">
                                <Field
                                    className="certificateInputValue fullHeight"
                                    name="congratsMessage"
                                    component="textarea"
                                    placeholder='Congratulations text...'
                                />
                                <div className="error">
                                    <ErrorMessage name="congratsMessage"/>
                                </div>
                            </div>

                        </div>

                        <div className="confirm">
                            <button className={props.isValid ? "pay filled" : "pay"}
                                    type="submit">
                                {props.isSubmitting ? <LoadingAnimationDots/> : 'Continue'}
                            </button>
                            <div className="confirmCheckbox">
                                <Field className="termsCheckbox"
                                       type="checkbox"
                                       name="termsCheckbox"
                                       onClick={() => {
                                           props.setTouched({
                                               fromFullName: true,
                                               toFullName: true,
                                               toEmail: true,
                                               congratsMessage: true,
                                               termsCheckbox: true,
                                           });
                                           props.handleSubmit();
                                       }}
                                />
                                <div>
                                    I agree with the
                                    <span className="blue"
                                          onClick={togglePrivacy}> Terms of personal data processing</span>
                                    <div className="error">
                                        <ErrorMessage name="termsCheckbox"/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Form>
                )}
            </Formik>
        </>
    )
}
