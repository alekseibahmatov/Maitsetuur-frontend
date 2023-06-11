import React, {useEffect, useState} from 'react';
import {Formik, Field, Form, ErrorMessage, FormikProps} from 'formik';
import * as Yup from 'yup';
import './CreateNewUser.css'
import toast from "react-hot-toast";
import {useParams} from "react-router-dom";
import adminServices from "../../services/admin";
import PopupSumbit from "../../ui-components/popup-sumbit/Popup-sumbit";

const europeanMobilePhoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
const estonianIdCodeRegex = /^[1-6]{1}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[0-9]{4}$/;

const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('Full Name is required'),
    phoneNumber: Yup.string()
        .matches(europeanMobilePhoneRegex, "Invalid phone number (use country code as well)")
        .required('Phone Number is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    idCode: Yup.string()
        .required('ID Code is required')
        .matches(estonianIdCodeRegex, "Invalid ID Code"),
    country: Yup.string()
        .required('Country is required'),
    city: Yup.string()
        .required('City is required'),
    state: Yup.string()
        .required('State is required'),
    street: Yup.string()
        .required('Street is required'),
    apartmentNumber: Yup.string()
        .required('Apartment number is required'),
    postcode: Yup.string()
        .required('Postcode is required'),
});

const initialValues = {
    fullName: '',
    phoneNumber: '',
    email: '',
    idCode: '',
    country: '',
    city: '',
    state: '',
    street: '',
    apartmentNumber: '',
    postcode: ''
}


export default function CreateNewUser() {
    const {userId} = useParams();
    const [userData, setUserData] = useState(initialValues);
    const [actionType, setActionType] = useState(null);
    const [popupSubmit, setPopupSubmit] = useState(false);

    console.log(userId)


    useEffect(() => {
        if (userId) {
            getUserDataOnMount()
        }
    }, [userId]);

    const getUserDataOnMount = async () => {
        try {
            const result = await adminServices.getUserData(userId)
            setUserData(result.data)
            console.log(result)

        } catch (error) {
            // navigate('/dashboard')
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
    }

    const toggleModal = (action) => {
        setActionType(action)
        setPopupSubmit(!popupSubmit)
    }

    const modifiedValues = {
        fullName: userData.fullName,
        phoneNumber: userData.phoneNumber,
        email: userData.email,
        idCode: userData.idCode,
        country: userData.country,
        city: userData.city,
        state: userData.state,
        street: userData.street,
        apartmentNumber: userData.apartmentNumber,
        postcode: userData.postcode
    }


    return (
        <Formik
            enableReinitialize={true}
            initialValues={modifiedValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                setTimeout(async () => {
                    console.log(values)
                    try {
                        let result;
                        console.log(actionType)

                        if (actionType === 'Create') {
                            result = await adminServices.createNewUser(values);
                        } else if (actionType === 'Update') {
                            result = await adminServices.updateUserData(values);
                        } else if (actionType === 'Delete') {
                            result = await adminServices.deleteUser(userId);
                        }
                        console.log(result)

                        toast.success('User ' + actionType + ' Successfully');
                        // setTimeout(() => {
                        //     if (result.status === 200 && result.data.userCode) {
                        //         setPopupSubmit(false)
                        //         navigate('/dashboard/restaurant-info/' + result.data.userCode)
                        //     }
                        // }, 1000);
                    } catch (error) {
                        console.log(error.code)
                        toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
                    }

                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {(props: FormikProps<any>) => (

                <Form>
                    <PopupSumbit actionName={actionType} props={props} isOpen={popupSubmit}
                                 toggleModal={toggleModal}/>
                    <div className="rightBlock1">
                        <div className="reportMain">
                            <div className="reportHeader">
                                <div className="leftReportHeader">
                                    {userData.fullName ? userData.fullName : !userId ? "Create" : "Loading..."} User Data
                                </div>
                                <div className="rightReportHeader">
                                    <div onClick={() => toggleModal(userId ? "Update" : "Create")} className="reportDownload">
                                        {userId ? "Update User Data" : "Create New User"}
                                    </div>

                                    {userId ?
                                        <div onClick={() => toggleModal("Delete")} hidden={!userId} className="resetForm">
                                            Delete User
                                        </div>
                                        :
                                        <div className="resetForm" onClick={() => {
                                            toast.success('Form values reset successfully');
                                            props.resetForm()
                                        }}>
                                            Reset Form
                                        </div>
                                    }

                                </div>
                            </div>
                            <div className="reportMainContent">
                                <div className="reportMainContentHeaderSection">
                                    <div className="createNewUserHeader">
                                        <div className="reportMainContentHeaderUpperPart">
                                            Personal Data
                                        </div>
                                        <div className="reportMainContentHeaderLowerPart">
                                            Full Name, Email, Phone, ID Code
                                        </div>
                                    </div>
                                </div>
                                <div className="inputFormForNewUser">
                                    <div className="singleInputLine spaceBottom">
                                        <div className="singleInputField">
                                            <div className="businessFormHeader">
                                                User Full Name
                                            </div>
                                            <Field type="text" name="fullName" className='businessInputValue'/>
                                            <div className="error">
                                                <ErrorMessage name="fullName"/>
                                            </div>
                                        </div>
                                        <div className="singleInputField">
                                            <div className="businessFormHeader">
                                                User Phone Number
                                            </div>
                                            <Field type="text" name="phoneNumber" className='businessInputValue'/>
                                            <div className="error">
                                                <ErrorMessage name="phoneNumber"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="singleInputLine">
                                        <div className="singleInputField">
                                            <div className="businessFormHeader">
                                                User Email Adress
                                            </div>
                                            <Field type="text" name="email" className='businessInputValue'/>
                                            <div className="error">
                                                <ErrorMessage name="email"/>
                                            </div>
                                        </div>
                                        <div className="singleInputField">
                                            <div className="businessFormHeader">
                                                User ID Code
                                            </div>
                                            <Field type="text" name="idCode" className='businessInputValue'/>
                                            <div className="error">
                                                <ErrorMessage name="idCode"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reportMainContentHeaderSection">
                                    <div className="createNewUserHeader">
                                        <div className="reportMainContentHeaderUpperPart">
                                            Address Data
                                        </div>
                                        <div className="reportMainContentHeaderLowerPart">
                                            Country, City, State, Street, Apartment Number, Postcode
                                        </div>
                                    </div>
                                </div>
                                <div className="inputFormForNewUser">
                                    <div className="singleInputLine spaceBottom">
                                        <div className="singleInputField">
                                            <div className="businessFormHeader">
                                                User Country
                                            </div>
                                            <Field type="text" name="country" className='businessInputValue'/>
                                            <div className="error">
                                                <ErrorMessage name="country"/>
                                            </div>
                                        </div>
                                        <div className="singleInputField">
                                            <div className="businessFormHeader">
                                                User Street
                                            </div>
                                            <Field type="text" name="street" className='businessInputValue'/>
                                            <div className="error">
                                                <ErrorMessage name="street"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="singleInputLine spaceBottom">
                                        <div className="singleInputField">
                                            <div className="businessFormHeader">
                                                User City
                                            </div>
                                            <Field type="text" name="city" className='businessInputValue'/>
                                            <div className="error">
                                                <ErrorMessage name="city"/>
                                            </div>
                                        </div>
                                        <div className="singleInputField">
                                            <div className="businessFormHeader">
                                                User Apartment Number
                                            </div>
                                            <Field type="text" name="apartmentNumber" className='businessInputValue'/>
                                            <div className="error">
                                                <ErrorMessage name="apartmentNumber"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="singleInputLine">
                                        <div className="singleInputField">
                                            <div className="businessFormHeader">
                                                User State
                                            </div>
                                            <Field type="text" name="state" className='businessInputValue'/>
                                            <div className="error">
                                                <ErrorMessage name="state"/>
                                            </div>
                                        </div>
                                        <div className="singleInputField">
                                            <div className="businessFormHeader">
                                                User Postcode
                                            </div>
                                            <Field type="text" name="postcode" className='businessInputValue'/>
                                            <div className="error">
                                                <ErrorMessage name="postcode"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

