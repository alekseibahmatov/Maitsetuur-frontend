import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import toast from "react-hot-toast";

import uploadError from "../../../assets/img/restaurant-business-information/upload-error.png";
import contractImg from "../../../assets/img/restaurant-business-information/contract.png";
import addContract from "../../../assets/img/restaurant-business-information/contract-add.png";
import validContract from "../../../assets/img/restaurant-business-information/contract-valid.png";
import errorContract from "../../../assets/img/restaurant-business-information/contract-error.png";
import manager from '../../../assets/img/Businessman.png'

import {sellers, categoriesOfRestaurant} from "./data";
import {RestaurantBusinessInfoSchema} from "./RestaurantBusinessInfoSchema";
import PopupSumbit from "../../../ui-components/popup-sumbit/Popup-sumbit";
import {LoadingAnimation} from "../../../ui-components/loading-animation/LoadingAnimation";
import adminServices from "../../../services/admin"
import {customStyles} from "./customstyles";
import {downloadBlobFile, truncateFilename} from "./utils";
import {initialValuesCreate} from './formikInitialValues'

import './RestaurantBusinessInformation.css'


export const RestaurantBusinessInformation = () => {
    const navigate = useNavigate();
    const {restaurantId} = useParams();

    const [image, setImage] = useState(null);

    const [popupSubmit, setPopupSubmit] = useState(false);

    const [contractIcon, setContractIcon] = useState(false);
    const [photoName, setPhotoName] = useState(null);
    const [contractName, setContractName] = useState(null);

    const animatedComponents = makeAnimated();

    const [restaurantData, setRestaurantData] = useState(initialValuesCreate);

    useEffect(() => {
        if (restaurantId) {
            getRestaurantDataOnMount()
        }
    }, [restaurantId]);

    const getRestaurantDataOnMount = async () => {
        try {
            const result = await adminServices.getRestaurantData(restaurantId)
            setRestaurantData(result.data)
            console.log(result)

            const imagePreview = await adminServices.downloadFile(result.data.photo, "photo")
            setImage(URL.createObjectURL(imagePreview.data))

            // const waiterData = await adminServices.getWaiterData()

        } catch (error) {
            // navigate('/dashboard')
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
    }

    const handleChangeImage = async (e) => {
        setPhotoName(truncateFilename(e.target.files[0].name));
        // console.log(URL.createObjectURL(e.target.files[0]))
        const validImage = await checkImageURL(URL.createObjectURL(e.target.files[0]));
        console.log(validImage)
        if (validImage) {
            setImage(URL.createObjectURL(e.target.files[0]));
        } else {
            setImage(uploadError)
        }
        // console.log(checkImageURL(URL.createObjectURL(e.target.files[0])))
    }

    const handleChangeContract = e => {
        setContractName(truncateFilename(e.target.files[0].name));
        setContractIcon(true)
    }

    const toggleModal = () => {
        setPopupSubmit(!popupSubmit)
    }

    const checkImageURL = (url) => {
        return new Promise((resolve) => {
            try {
                const img = new Image();
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
                img.src = url;
            } catch (err) {
                toast.error("Something went wrong, try again")
            }

        });
    }


    return <div className='rightBlock1'>
        <div className="businessHeader">
            <div className="businessHeader1">
                {restaurantData.restaurantName ? restaurantData.restaurantName : !restaurantId ? "Create" : "Loading..."} Business
                Information
            </div>
            <div className="flexStyleDiv">
                <div onClick={toggleModal} className="buttonSample">
                    Submit
                </div>
                <div hidden={!restaurantId} className="buttonSample red">
                    Delete
                </div>
            </div>
        </div>

        <div className="businessMain">
            <Formik
                enableReinitialize={true}
                initialValues={restaurantData}
                onSubmit={(values, actions) => {
                    setTimeout(async () => {
                        console.log(values)
                        try {
                            const result = await adminServices.createNewRestaurant(values);
                            console.log(result)
                            toast.success("Success");
                            setTimeout(() => {
                                if (result.status === 200 && result.data.restaurantCode) {
                                    setPopupSubmit(false)
                                    navigate('/dashboard/restaurant-info/' + result.data.restaurantCode)
                                }
                            }, 1000);
                        } catch (error) {
                            console.log(error.code)
                            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
                        }

                        actions.setSubmitting(false);
                    }, 1000);
                }}
                validationSchema={RestaurantBusinessInfoSchema}
            >
                {(props: FormikProps<any>) => (
                    <Form>
                        <PopupSumbit actionName="Submit" props={props} isOpen={popupSubmit} toggleModal={toggleModal}/>
                        <div className="businessMainHeader">
                            <div className="businessSingleBlock">
                                <div className="businessSingleBlockImage1">
                                    {image ? <img src={image} alt="upload business photo"
                                                  className={image === uploadError ? 'uploadImageError' : 'uploadImage'}/> : restaurantId ?
                                        <LoadingAnimation/> : null}
                                </div>
                                <div className="buttonInfo">
                                    <div className="buttonHeader">
                                        Upload photo (png/jpg)
                                    </div>
                                    <label className="buttonSample1" htmlFor="photo">Browse</label>
                                    <button disabled={!image} hidden={!restaurantId}
                                            className={!image ? "buttonSample1 buttonSampleDisabled" : "buttonSample1"}
                                            type="button"
                                            onClick={() => downloadBlobFile(restaurantData, "photo", "image/png")}>Download
                                    </button>

                                    <input type="file" id="photo" name="photo" onChange={(e) => {
                                        props.setFieldValue('photo', e.currentTarget.files[0]);
                                        handleChangeImage(e)
                                    }}/>
                                    <div
                                        className="photoName">{photoName || restaurantId ? photoName : "(No file chosen)"}
                                    </div>
                                    <div className="error">
                                        <ErrorMessage name="photo"/>
                                    </div>
                                </div>

                            </div>

                            <div className="businessSingleBlock">
                                <div className="businessSingleBlockImage">
                                    {contractIcon ? props.errors.contract ?
                                            <img src={errorContract} alt="contract image"/>
                                            : <img src={validContract} alt="contract image"/>
                                        : restaurantId ? <img src={contractImg} alt="contract image"/> :
                                            <img src={addContract} alt="contract image"/>
                                    }
                                </div>
                                <div className="buttonInfo">
                                    <div className="buttonHeader">
                                        Upload contract (pdf)
                                    </div>
                                    <label className="buttonSample1" htmlFor="contract">Browse</label>
                                    <button disabled={!image} hidden={!restaurantId}
                                            className={!image ? "buttonSample1 buttonSampleDisabled" : "buttonSample1"}
                                            type="button"
                                            onClick={() => downloadBlobFile(restaurantData, "contact", "application/pdf")}>Download
                                    </button>

                                    <input type="file" id="contract" name="contract" onChange={(e) => {
                                        props.setFieldValue('contract', e.currentTarget.files[0]);
                                        handleChangeContract(e)
                                    }}/>
                                    <div
                                        className="photoName">{contractName || restaurantId ? contractName : "(No file chosen)"}
                                    </div>
                                    <div className="error">
                                        <ErrorMessage name="contract"/>
                                    </div>
                                </div>
                            </div>

                            {restaurantId ?
                                <div className="businessSingleBlock">
                                    <div className="businessSingleBlockImage">
                                        <img src={manager} alt="businessPhoto"/>
                                    </div>
                                    <div className="buttonInfo">
                                        <div className="buttonHeader">
                                            Manager Information
                                        </div>
                                        <div className="buttonSample1">
                                            Browse
                                        </div>
                                    </div>
                                </div>
                                : null}


                        </div>

                        <div className="businessForm">

                            <div className="businessName">
                                <div className="businessFormHeader">
                                    Restaurant Name
                                </div>
                                <div className="businessInput">
                                    <Field className="businessInputValue" type="text" name="restaurantName"
                                           placeholder={restaurantData && !restaurantId ? "Restaurant name..." : "Loading..."}/>
                                    <div className="error">
                                        <ErrorMessage name="restaurantName"/>
                                    </div>
                                </div>
                            </div>

                            <div className="businessName">
                                <div className="businessFormHeader">
                                    Business Description (max 100 words)
                                </div>
                                <div className="businessInput">
                                    <div className="textAreaWrapper">
                                        <Field
                                            as="textarea"
                                            type="text"
                                            className='businessInputValue fullHeight'
                                            id="restaurantDescription"
                                            name="restaurantDescription"
                                            placeholder={restaurantData && !restaurantId ? "Restaurant description..." : "Loading..."}
                                        />
                                        <div
                                            className="charactersCount">{props?.values?.restaurantDescription?.length} /
                                            100
                                        </div>
                                    </div>
                                    <div className="error">
                                        <ErrorMessage name="restaurantDescription"/>
                                    </div>
                                </div>
                            </div>

                            <div className="mailPhone">
                                <div className="leftContent">
                                    <div className="businessFormHeader">
                                        Email
                                    </div>
                                    <div className="businessInput">
                                        <Field className="businessInputValue" type="email" name="restaurantEmail"
                                               placeholder={restaurantData && !restaurantId ? "Restaurant email..." : "Loading..."}/>
                                        <div className="error">
                                            <ErrorMessage name="restaurantEmail"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="leftContent">
                                    <div className="businessFormHeader">
                                        Manager's Email
                                    </div>
                                    <div className="businessInput">
                                        <Field className="businessInputValue" type="email" name="managerEmail"
                                               placeholder={restaurantData && !restaurantId ? "Restaurant manager's email..." : "Loading..."}/>
                                        <div className="error">
                                            <ErrorMessage name="managerEmail"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="rightContent">
                                    <div className="businessFormHeader">
                                        Phone Number
                                    </div>
                                    <div className="businessInput">
                                        <Field className="businessInputValue" type="text" name="restaurantPhone"
                                               placeholder={restaurantData && !restaurantId ? "Restaurant phone number..." : "Loading..."}/>
                                        <div className="error">
                                            <ErrorMessage name="restaurantPhone"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="countryCity">

                                <div className="singleCountryBlock">
                                    <div className="businessFormHeader">
                                        Country
                                    </div>
                                    <div className="businessInput1">
                                        {props.initialValues?.country || !restaurantId ?
                                            <Select options={sellers}
                                                    defaultValue={sellers.find((seller) => seller.label === props.initialValues?.country)}
                                                    styles={customStyles}
                                                    onChange={e => {
                                                        console.log(e)
                                                        props.setFieldValue('country', e.label);
                                                    }}
                                                    components={{IndicatorSeparator: () => null}}/>
                                            :
                                            <div style={{textAlign: "center", marginTop: 20}}>Loading...</div>
                                        }
                                    </div>
                                    <div className="error">
                                        <ErrorMessage name="country"/>
                                    </div>
                                </div>

                                <div className="singleCountryBlock">
                                    <div className="businessFormHeader">
                                        State
                                    </div>
                                    <div className="businessInput">
                                        <Field className="businessInputValue" type="text" name="state"
                                               placeholder={restaurantData && !restaurantId ? "Restaurant State..." : "Loading..."}/>
                                        <div className="error">
                                            <ErrorMessage name="state"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="singleCountryBlock">
                                    <div className="businessFormHeader">
                                        Street
                                    </div>
                                    <div className="businessInput">
                                        <Field className="businessInputValue" type="text" name="street"
                                               placeholder={restaurantData && !restaurantId ? "Restaurant Street..." : "Loading..."}/>
                                        <div className="error">
                                            <ErrorMessage name="street"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="singleCountryBlock">
                                    <div className="businessFormHeader">
                                        City
                                    </div>
                                    <div className="businessInput">
                                        <Field className="businessInputValue" type="text" name="city"
                                               placeholder={restaurantData && !restaurantId ? "Restaurant City..." : "Loading..."}/>
                                        <div className="error">
                                            <ErrorMessage name="city"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="singleCountryBlock">
                                    <div className="businessFormHeader">
                                        Postal Code
                                    </div>
                                    <div className="businessInput">
                                        <Field className="businessInputValue" type="text" name="postalCode"
                                               placeholder={restaurantData && !restaurantId ? "Restaurant Postal Code..." : "Loading..."}/>
                                        <div className="error">
                                            <ErrorMessage name="postalCode"/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="workBill">
                                <div className="leftContent">
                                    <div className="businessFormHeader">
                                        Working time
                                    </div>
                                    <div className="businessInput">
                                        <Field className="businessInputValue" type="text" name="workingHours"
                                               placeholder={restaurantData && !restaurantId ? "Working Time (Mon-Fri 12:30-23, Sat-Sun 13-00)" : "Loading..."}/>
                                        <div className="error">
                                            <ErrorMessage name="workingHours"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="rightContent">
                                    <div className="businessFormHeader">
                                        Average bill
                                    </div>
                                    <div className="businessInput">
                                        <Field className="businessInputValue" type="text" name="averageBill"
                                               placeholder={restaurantData && !restaurantId ? "Average Bill..." : "Loading..."}/>
                                        <div className="error">
                                            <ErrorMessage name="averageBill"/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="typeOfRestaurantSelect">
                                <div className="businessFormHeader">
                                    Type of restaurant
                                </div>
                                {props.initialValues?.categories || !restaurantId ?
                                    <Select
                                        closeMenuOnSelect={true}
                                        components={animatedComponents}
                                        isMulti
                                        defaultValue={categoriesOfRestaurant.find((category) => props.initialValues?.categories.includes(category.label))}
                                        options={categoriesOfRestaurant}
                                        styles={customStyles}
                                        onChange={e => {
                                            let categories = []
                                            e.map((elem) => {
                                                categories.push(elem.label)
                                            })
                                            props.setFieldValue('categories', categories);
                                        }}
                                    />
                                    :
                                    <div style={{textAlign: "center", marginTop: 20}}>Loading...</div>
                                }

                                <div className="error">
                                    <ErrorMessage name="categories"/>
                                </div>
                            </div>

                        </div>
                    </Form>
                )}
            </Formik>

        </div>

    </div>;
}