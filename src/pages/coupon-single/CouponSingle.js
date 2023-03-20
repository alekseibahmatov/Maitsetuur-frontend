import React, {useState} from "react";
import './Coupon-single.css'
import PopupSumbit from "../../ui-components/popup-sumbit/Popup-sumbit";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import {CouponSingleSchema} from "./CouponSingleSchema";
import {LimitedTextArea} from "../../ui-components/limited-text-area/LimitedTextArea";

const initialValues = {
    receiverFullName: "",
    receiverEmail: "",
    mobilePhone: "",
    nominal: "",
    createdAt: "",
    validUntil: "",
    submittedAt: "",
    congratulations: "",
    senderFullName: "",
    submittedInRestaurant: "",
    submittedBy: "",
};

export const CouponSingle = () => {


    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("(No file chosen)");

    const handleChangeImage = e => {
        setFileName(e.target.files[0].name);
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return(
        <div className='rightBlock1'>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        console.log(values)
                        actions.setSubmitting(false);
                    }, 1000);
                }}
                validationSchema={CouponSingleSchema}
            >
                {(props: FormikProps<any>) => (
                    <Form>
                        <div className="businessHeader">
                            <div className="businessHeader1">
                                #ID Coupon Info
                            </div>
                            <div className="flexStyleDiv">
                            <div className="buttonSample" onClick={toggleModal}>
                                Submit
                            </div>
                            <div className="buttonSample red" onClick={toggleModal}>
                                Delete
                            </div>
                            </div>
                        </div>
                        <div className="couponsMain">

                            <div className="businessMainHeader">
                                <div className="businessSingleBlock">
                                    <div className="businessSingleBlockImage1">
                                        {image && <img src={image} alt="" className='uploadImage'/>}
                                    </div>

                        <div className="buttonInfo">
                            <div className="buttonHeader" >
                                Upload photo
                            </div>
                            <div className="buttonSample1"  onClick={() => document.getElementById("inputFile").click()}>
                                Browse
                            </div>
                            <div className='noFile'>
                                {fileName}
                            </div>
                            <input
                                id="inputFile"
                                type="file"
                                onChange={handleChangeImage}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>
                </div>

                            <div className="specialBlock">
                                <div className="leftSideBlock">
                                    <div className="businessName">
                                        <div className="businessFormHeader">
                                            To
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="receiverFullName"
                                                       placeholder="Input receiver's full name"/>
                                                <div className="error">
                                                    <ErrorMessage name="receiverFullName"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="businessName">
                                        <div className="businessFormHeader">
                                            Receiver E-mail
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="receiverEmail"
                                                       placeholder="Input receiver's email"/>
                                                <div className="error">
                                                    <ErrorMessage name="receiverEmail"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rightSideBlock">
                                    <div className="businessName">
                                        <div className="businessFormHeader">
                                            Congratulations (max 100 words)
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <LimitedTextArea limit={100} value=''/>
                                                <div className="error">
                                                    <ErrorMessage name="congratulations"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mailPhone">
                                <div className="leftContent">
                                    <div className="businessFormHeader">
                                        Receivers phone
                                    </div>
                                    <div className="businessInput">
                                        <div className="businessInputWrapper">
                                            <Field className="businessInputValue" type="text"
                                                   name="mobilePhone"
                                                   placeholder="Input receiver's email"/>
                                            <div className="error">
                                                <ErrorMessage name="mobilePhone"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rightContent">
                                    <div className="businessFormHeader">
                                        From who
                                    </div>
                                    <div className="businessInput">
                                        <div className="businessInputWrapper">
                                            <Field className="businessInputValue" type="text"
                                                   name="senderFullName"
                                                   placeholder="Input sender's full name"/>
                                            <div className="error">
                                                <ErrorMessage name="senderFullName"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mailPhone">
                                <div className="leftContent">
                                    <div className="businessFormHeader">
                                        Nominal
                                    </div>
                                    <div className="businessInput">
                                        <div className="businessInputWrapper">
                                            <Field className="businessInputValue" type="text"
                                                   name="nominal"
                                                   placeholder="Input nominal"/>
                                            <div className="error">
                                                <ErrorMessage name="nominal"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rightContent">
                                    <div className="businessFormHeader">
                                        Submitted in resto
                                    </div>
                                    <div className="businessInput">
                                        <div className="businessInputWrapper">
                                            <Field className="businessInputValue" type="text"
                                                   name="submittedInRestaurant"
                                                   placeholder="Input restaurant name"/>
                                            <div className="error">
                                                <ErrorMessage name="submittedInRestaurant"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mailPhone">
                                <div className="leftContent">
                                    <div className="businessFormHeader">
                                        Created at
                                    </div>
                                    <div className="businessInput">
                                        <div className="businessInputWrapper">
                                            <Field className="businessInputValue" type="text"
                                                   name="createdAt"
                                                   placeholder="example 12-12-12"/>
                                            <div className="error">
                                                <ErrorMessage name="createdAt"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rightContent">
                                    <div className="businessFormHeader">
                                        Submitted by
                                    </div>
                                    <div className="businessInput">
                                        <div className="businessInputWrapper">
                                            <Field className="businessInputValue" type="text"
                                                   name="submittedBy"
                                                   placeholder="example 12-12-12"/>
                                            <div className="error">
                                                <ErrorMessage name="submittedBy"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mailPhone">
                                <div className="halfContent">
                                    <div className="businessFormHeader">
                                        Valid until
                                    </div>
                                    <div className="businessInput">
                                        <div className="businessInputWrapper">
                                            <Field className="businessInputValue" type="text"
                                                   name="validUntil"
                                                   placeholder="example 12-12-12"/>
                                            <div className="error">
                                                <ErrorMessage name="validUntil"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mailPhone">
                                <div className="halfContent">
                                    <div className="businessFormHeader">
                                        Submitted at
                                    </div>
                                    <div className="businessInput">
                                        <div className="businessInputWrapper">
                                            <Field className="businessInputValue" type="text"
                                                   name="submittedAt"
                                                   placeholder="example 12-12-12"/>
                                            <div className="error">
                                                <ErrorMessage name="submittedAt"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <PopupSumbit errors={props.errors} isOpen={isModalOpen} toggleModal={toggleModal}/>
                    </Form>
                )}
            </Formik>
        </div>

    )

}

export default CouponSingle