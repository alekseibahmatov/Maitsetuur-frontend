import React, {useState} from 'react';
import addContract from "../../../assets/img/restaurant-business-information/contract-add.png";
import validContract from "../../../assets/img/restaurant-business-information/contract-valid.png";
import errorContract from "../../../assets/img/restaurant-business-information/contract-error.png";
import manager from '../../../assets/img/Businessman.png'
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {sellers, typeOfResto} from "./data";
import {WaiterSingleSchema} from "../../waiter-single/WaiterSingleSchema";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import {RestaurantBusinessInfoSchema} from "./RestaurantBusinessInfoSchema";
import {LimitedTextAreaBusiness} from "../../../ui-components/limited-text-area-business/LimitedTextAreaBusiness";
import PopupSumbit from "../../../ui-components/popup-sumbit/Popup-sumbit";
import './RestaurantBusinessInformation.css'
import authService from "../../../services/auth";
import toast from "react-hot-toast";
import adminServices from "../../../services/admin"

const initialValues = {
    restaurantName: "",
    restaurantDescription: "",
    restaurantEmail: "",
    managerEmail: "",
    restaurantPhone: "",
    country: "",
    state: "",
    street: "",
    city: "",
    postalCode: "",
    workingHours: "",
    averageBill: "",
    categories: "",
    photo: "",
    contact: "",
};

export const RestaurantBusinessInformation = () => {
    const [image, setImage] = useState(null);
    const [contractIcon, setContractIcon] = useState(false);
    const [popupSubmit, setPopupSubmit] = useState(false);
    const [photoName, setPhotoName] = useState("(No file chosen)");
    const [contractName, setContractName] = useState("(No file chosen)");
    const animatedComponents = makeAnimated();
    const MAX_FILENAME_LENGTH = 15;

    const handleChangeImage = e => {
        setPhotoName(truncateFilename(e.target.files[0].name));
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const handleChangeContract = e => {
        setContractName(truncateFilename(e.target.files[0].name));
        setContractIcon(true)
    }

    const toggleModal = () => {
        setPopupSubmit(!popupSubmit)
    }


    function truncateFilename(filename) {
        const extension = filename.slice(filename.lastIndexOf("."));
        const truncatedFilename = filename.substr(0, MAX_FILENAME_LENGTH - extension.length);
        return truncatedFilename + "..." + extension;
    }

    const customStyles = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: state.isSelected ? "#fff" : "#5541D7",
            backgroundColor: state.isSelected ? "#5541D7" : "#Fff",
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "#fff",
            padding: "7px 25px",
            border: "1px solid #5541D7",
            boxShadow: "none",
            borderRadius: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',

        }),

        dropdownIndicator: base => ({
            ...base,
            color: "#5541D7",
            marginLeft: '20px',
        }),
        singleValue: (defaultStyles) => ({...defaultStyles, color: "#5541D7"}),
        multiValueLabel: (defaultStyles) => ({...defaultStyles, color: "#5541D7"}),
        placeholder: (defaultStyles) => ({...defaultStyles, color: "#5541D7"}),
    };

    return <div className='rightBlock1'>
        <div className="businessHeader">
            <div className="businessHeader1">
                Restaurant Business Information
            </div>
            <div className="flexStyleDiv">
                <div onClick={toggleModal} className="buttonSample">
                    Submit
                </div>
                <div className="buttonSample red">
                    Delete
                </div>
            </div>
        </div>

        <div className="businessMain">
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    setTimeout(async () => {
                        const restructuredValues = {
                            restaurantName: values.restaurantName,
                            restaurantDescription: values.restaurantDescription,
                            restaurantEmail: values.restaurantEmail,
                            managerEmail: values.managerEmail,
                            restaurantPhone: values.restaurantName,
                            country: values.country,
                            state: values.state,
                            street: values.street,
                            city: values.city,
                            postalCode: values.postalCode,
                            workingHours: values.workingHours,
                            averageBill: values.averageBill,
                            categories: values.categories,
                            photo: values.photo.name,
                            contact: values.contact.name
                        };
                        console.log(restructuredValues)
                        try {
                            const result = await adminServices.createNewRestaurant(restructuredValues);
                            console.log(result)
                            toast.success("Success");
                            // setTimeout(() => {
                            //     // if (result.status === 200) {
                            //     // }
                            // }, 1000);
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
                                    {image && <img src={image} alt="" className='uploadImage'/>}
                                </div>
                                <div className="buttonInfo">
                                    <div className="buttonHeader">
                                        Upload photo
                                    </div>
                                    <label className="buttonSample1" htmlFor="photo">Browse</label>
                                    <input type="file" id="photo" name="photo" onChange={(e) => {
                                        props.setFieldValue('photo', e.currentTarget.files[0]);
                                        handleChangeImage(e)
                                    }}/>
                                    <div className="photoName">{photoName}</div>
                                    <div className="error">
                                        <ErrorMessage name="photo"/>
                                    </div>
                                </div>

                            </div>

                            <div className="businessSingleBlock">
                                <div className="businessSingleBlockImage">
                                    {contractIcon ? props.errors.contact ?
                                            <img src={errorContract} alt="contract image"/>
                                            : <img src={validContract} alt="contract image"/>
                                        : <img src={addContract} alt="contract image"/>
                                    }
                                </div>
                                <div className="buttonInfo">
                                    <div className="buttonHeader">
                                        Upload contract
                                    </div>
                                    <label className="buttonSample1" htmlFor="contact">Browse</label>
                                    <input type="file" id="contact" name="contact" onChange={(e) => {
                                        props.setFieldValue('contact', e.currentTarget.files[0]);
                                        handleChangeContract(e)
                                    }}/>
                                    <div className="photoName">{contractName}</div>
                                    <div className="error">
                                        <ErrorMessage name="contact"/>
                                    </div>
                                </div>
                            </div>

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

                        </div>

                        <div className="businessForm">

                            <div className="businessName">
                                <div className="businessFormHeader">
                                    Restaurant Name
                                </div>
                                <div className="businessInput">
                                    <Field className="businessInputValue" type="text" name="restaurantName"
                                           placeholder="Restaurant name..."/>
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
                                            placeholder="Type your message here"
                                        />
                                        <div className="charactersCount">{props.values.restaurantDescription.length} / 100</div>
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
                                               placeholder="Restaurant email..."/>
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
                                               placeholder="Restaurant manager's email..."/>
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
                                               placeholder="Restaurant phone number..."/>
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
                                        <Select className='myselect' options={sellers}
                                                defaultValue={sellers[0]} styles={customStyles}
                                                onChange={e => {
                                                    props.setFieldValue('country', e.label);
                                                }}
                                                components={{IndicatorSeparator: () => null}}/>
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
                                               placeholder="Restaurant State..."/>
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
                                               placeholder="Restaurant Street..."/>
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
                                               placeholder="Restaurant City..."/>
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
                                               placeholder="Restaurant Postal Code..."/>
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
                                               placeholder="Restaurant Working Time..."/>
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
                                               placeholder="Average Bill..."/>
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
                                <Select
                                    closeMenuOnSelect={true}
                                    components={animatedComponents}
                                    isMulti
                                    className='myselect'
                                    options={typeOfResto}
                                    styles={customStyles}
                                    onChange={e => {
                                        let categories = []
                                        e.map((elem) => {
                                            categories.push(elem.label)
                                        })
                                        props.setFieldValue('categories', categories);
                                    }}
                                />
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