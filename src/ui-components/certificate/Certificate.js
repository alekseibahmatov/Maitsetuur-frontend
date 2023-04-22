import React, {useState} from "react";
import PopupCertificate from "../popup-certificate/Popup-certificate";
import ReactSwipe from "react-swipe";
import {useNavigate} from "react-router-dom";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import * as Yup from "yup";
import {initialValuesIndividual, validationSchemaIndividual} from "./CertificateFormik";
import PrivacyPolicy from "../privacy-policy/Privacy-policy";


export const Certificate = () => {
    const navigate = useNavigate();
    const [selectedNominal, setSelectedNominal] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nominals = [50, 100, 200, 500];

    let reactSwipeEl;

    const handleClick = () => {
        console.log(isActive)
        setIsActive(current => !current);
    }

    const contentNext = () => {
        handleClick();
        reactSwipeEl.next()
    }

    const contentPrevious = () => {
        handleClick();
        reactSwipeEl.prev()
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const togglePrivacy = () => {
        setIsPrivacyOpen(!isPrivacyOpen);
    }

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


    let newDate = new Date();
    let date = newDate.getDate() + 1 + '.';
    let month = newDate.getMonth() + 1 + '.';
    let year = newDate.getFullYear() + 1;


    return (
        <>
            <div className="certificate" id='certificate'>

                <div className="certificate_header">
                    <div className="from">
                        <div className={isActive ? 'company' : "client"} onClick={contentPrevious}>
                            From me
                        </div>
                        <div className={isActive ? 'client' : "company"} onClick={contentNext}>
                            From Company
                        </div>
                    </div>
                    <div className="certificate_example" onClick={toggleModal}>
                        Example of certificate
                    </div>
                    <PopupCertificate isOpen={isModalOpen} toggleModal={toggleModal}/>
                </div>

                <div className="content">

                    <ReactSwipe
                        className="carousel"
                        swipeOptions={{continuous: false, disableScroll: true, speed: 550}}
                        ref={el => (reactSwipeEl = el)}
                    >
                        <div>
                            <div className="explain">
                                Write a congratulation and indicate the address of the recipient!
                            </div>
                            <div className="choose">
                                Choose your own nominal
                            </div>
                            <div className="main">
                                <div className="left">
                                    <Formik
                                        initialValues={initialValuesIndividual}
                                        onSubmit={(values, actions) => {
                                            console.log(values)
                                            // localStorage.setItem("certificateFormData", JSON.stringify(formData));
                                            // navigate("/payment")
                                        }}
                                        validationSchema={validationSchemaIndividual}
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
                                                               placeholder={'Your Full name'}/>
                                                        <div className="error">
                                                            <ErrorMessage name="fromFullName"/>
                                                        </div>
                                                    </div>

                                                    <div className="from_who">
                                                        <Field className="certificateInputValue" type="text"
                                                               name="toFullName"
                                                               placeholder={`Recipient's Full Name`}/>
                                                        <div className="error">
                                                            <ErrorMessage name="toFullName"/>
                                                        </div>
                                                    </div>

                                                    <div className="from_who">
                                                        <Field className="certificateInputValue" type="text"
                                                               name="toEmail"
                                                               placeholder={`Recipient's email`}/>
                                                        <div className="error">
                                                            <ErrorMessage name="toEmail"/>
                                                        </div>
                                                    </div>

                                                    <div className="from_who">
                                                        <Field className="certificateInputValue" type="text"
                                                               name="toPhone"
                                                               placeholder={`Recipient's phone number`}/>
                                                        <div className="error">
                                                            <ErrorMessage name="toPhone"/>
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
                                                    <button className={props.isValid ? "pay filled" : "pay" } type="submit">Submit</button>
                                                    <div className="confirmCheckbox"><Field className="termsCheckbox" type="checkbox"
                                                           name="termsCheckbox"/>
                                                    <div>
                                                        I agree with the <span className="blue" onClick={togglePrivacy}>Terms of personal data processing
                                                    </span>.

                                                        <div className="error">
                                                            <ErrorMessage name="termsCheckbox"/>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>





                                            </Form>
                                        )}
                                    </Formik>
                                </div>

                                <div className="right">
                                    <div className="block">
                                        <div className="description">
                                            <div className="blockHeaderCertificateSide">
                                                gift certificate
                                            </div>
                                            <div className="blockNameCertificateSide">
                                                To the best restaurants in Tallinn
                                            </div>
                                            <div className="nominalAndDate">
                                                <div className="nominal_value">
                                                    Nominal
                                                </div>
                                                <div className="nominalValue" id='1'>
                                                    {}
                                                </div>

                                            </div>
                                            <div className="values">
                                                <div className="validDate">
                                                    {date}{month}{year}
                                                </div>
                                                <div className="date">
                                                    Valid until
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>

                            <div className="explainForCompany">
                                <h3>Thank your employees with gift certificates and an unforgettable experience!</h3> <br/>
                                Since ordering more certificates can be a little inconvenient, we ask you to place an
                                order, after which our manager can help you achieve the most suitable result.
                            </div>

                            <div className="main">

                                <div className="left">

                                    <Formik
                                        initialValues={initialValuesIndividual}
                                        onSubmit={(values, actions) => {
                                            console.log(values)
                                            // localStorage.setItem("certificateFormData", JSON.stringify(formData));
                                            // navigate("/payment")
                                        }}
                                        validationSchema={validationSchemaIndividual}
                                    >
                                        {(props: FormikProps<any>) => (
                                            <Form>

                                                <div className="form">

                                                    <div className="from_who">
                                                        <Field className="certificateInputValue" type="text"
                                                               name="fromFullName"
                                                               placeholder={'Your Full name'}/>
                                                        <div className="error">
                                                            <ErrorMessage name="fromFullName"/>
                                                        </div>
                                                    </div>

                                                    <div className="from_who">
                                                        <Field className="certificateInputValue" type="text"
                                                               name="businessName"
                                                               placeholder={`Business Name`}/>
                                                        <div className="error">
                                                            <ErrorMessage name="businessName"/>
                                                        </div>
                                                    </div>

                                                    <div className="from_who">
                                                        <Field className="certificateInputValue" type="text"
                                                               name="businessEmail"
                                                               placeholder={`Business Email`}/>
                                                        <div className="error">
                                                            <ErrorMessage name="businessEmail"/>
                                                        </div>
                                                    </div>

                                                    <div className="from_who">
                                                        <Field className="certificateInputValue" type="text"
                                                               name="businessPhone"
                                                               placeholder={`Business Phone Number`}/>
                                                        <div className="error">
                                                            <ErrorMessage name="businessPhone"/>
                                                        </div>
                                                    </div>

                                                    <div className="from_who">
                                                        <Field
                                                            className="certificateInputValue fullHeight"
                                                            name="managerMessage"
                                                            component="textarea"
                                                            placeholder='Message to our Manager'
                                                        />
                                                        <div className="error">
                                                            <ErrorMessage name="managerMessage"/>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="confirm">
                                                    <button className={props.isValid ? "pay filled" : "pay" } type="submit">Submit</button>
                                                    <div className="confirmCheckbox">
                                                    <Field className="termsCheckbox" type="checkbox"
                                                           name="termsCheckbox"/>
                                                    <div>
                                                        I agree with the <span className="blue" onClick={togglePrivacy}>Terms of personal data processing</span>.
                                                        <div className="error">
                                                            <ErrorMessage name="termsCheckbox"/>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>




                                            </Form>
                                        )}
                                    </Formik>

                                </div>


                                <div className="right">
                                    <div className="block">
                                        <div className="description">
                                            <div className="blockHeaderCertificateSide">
                                                gift certificate
                                            </div>
                                            <div className="blockNameCertificateSide">
                                                To the best restaurants in Tallinn
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </ReactSwipe>
                </div>
            </div>
            <PrivacyPolicy isOpen={isPrivacyOpen} toggleModal={togglePrivacy} />
        </>
    )

}
export default Certificate