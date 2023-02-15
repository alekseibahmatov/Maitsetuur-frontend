import React, {useState} from 'react';
import contract from "../../../assets/img/contract.png";
import manager from '../../../assets/img/Businessman.png'
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {sellers, typeOfResto} from "./data";
import {WaiterSingleSchema} from "../../waiter-single/WaiterSingleSchema";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import {RestaurantBusinessInfoSchema} from "./RestaurantBusinessInfoSchema";
import {LimitedTextArea} from "../../../ui-components/limited-text-area/LimitedTextArea";

const initialValues = {
    restaurantName: "",
    restaurantDescription: "",
    email: "",
    mobilePhone: "",
    country: "",
    province: "",
    city: "",
    postcode: "",
    workingTime: "",
    averageBill: "",
};

export const RestaurantBusinessInformation = () => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("(No file chosen)");
    const animatedComponents = makeAnimated();

    const handleChangeImage = e => {
        setFileName(e.target.files[0].name);
        setImage(URL.createObjectURL(e.target.files[0]));
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

    return <div className='rightBlock11'>
        <div className="businessHeader">
            <div className="businessHeader1">
                Restaurant Business Information
            </div>
            <div className="flexStyleDiv">
                <div className="buttonSample">
                    Submit
                </div>
                <div className="buttonSample red">
                    Delete
                </div>
            </div>
        </div>

        <div className="businessMain">

            <div className="businessMainHeader">
                <div className="businessSingleBlock">
                    <div className="businessSingleBlockImage1">
                        {image && <img src={image} alt="" className='uploadImage'/>}
                    </div>

                    <div className="buttonInfo">
                        <div className="buttonHeader">
                            Upload photo
                        </div>
                        <div className="buttonSample1"
                             onClick={() => document.getElementById("inputFile").click()}>
                            Browse
                        </div>
                        <div className='noFile'>
                            ({fileName})
                        </div>
                        <input
                            id="inputFile"
                            type="file"
                            onChange={handleChangeImage}
                            style={{display: 'none'}}
                        />
                    </div>
                </div>
                <div className="businessSingleBlock">
                    <div className="businessSingleBlockImage">
                        <img src={contract} alt="businessPhoto"/>
                    </div>
                    <div className="buttonInfo">
                        <div className="buttonHeader">
                            Upload contract
                        </div>
                        <div className="buttonSample1">
                            Browse
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


            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        console.log(values)
                        actions.setSubmitting(false);
                    }, 1000);
                }}
                validationSchema={RestaurantBusinessInfoSchema}
            >
                {(props: FormikProps<any>) => (
                    <Form>
                        <div className="businessForm">

                            <div className="businessName">

                                <div className="businessFormHeader">
                                    Business Name
                                </div>
                                <div className="businessInput">
                                    <input type="text" className='businessInputValue'
                                           placeholder='Resto name...'/>
                                </div>
                            </div>

                            <div className="businessName">

                                <div className="businessFormHeader">
                                    Business Description (max 100 words)
                                </div>
                                <div className="businessInput">
                                    <LimitedTextArea limit={100} value=''/>
                                </div>
                            </div>

                            <div className="mailPhone">
                                <div className="leftContent">
                                    <div className="businessFormHeader">
                                        Email
                                    </div>
                                    <div className="businessInput">
                                        <input type="email" className='businessInputValue half'
                                               placeholder='Email...'/>
                                    </div>
                                </div>
                                <div className="rightContent">


                                    <div className="businessFormHeader">
                                        Phone Number
                                    </div>
                                    <div className="businessInput">
                                        <input type="phone" className='businessInputValue half'
                                               placeholder='Phone...'/>
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
                                                components={{IndicatorSeparator: () => null}}/>
                                    </div>
                                </div>

                                <div className="singleCountryBlock">
                                    <div className="businessFormHeader">
                                        Province
                                    </div>
                                    <div className="businessInput">
                                        <input type="email" className='businessInputValue half'
                                               placeholder='Province...'/>
                                    </div>
                                </div>

                                <div className="singleCountryBlock">
                                    <div className="businessFormHeader">
                                        City
                                    </div>
                                    <div className="businessInput">
                                        <input type="email" className='businessInputValue half'
                                               placeholder='City...'/>
                                    </div>
                                </div>

                                <div className="singleCountryBlock">
                                    <div className="businessFormHeader">
                                        Postal Code
                                    </div>
                                    <div className="businessInput">
                                        <input type="email" className='businessInputValue half'
                                               placeholder='Postal Code...'/>
                                    </div>
                                </div>

                            </div>

                            <div className="workBill">
                                <div className="leftContent">
                                    <div className="businessFormHeader">
                                        Working time
                                    </div>
                                    <div className="businessInput">
                                        <input type="text" className='businessInputValue half'
                                               placeholder='Working time...'/>
                                    </div>
                                </div>
                                <div className="rightContent">


                                    <div className="businessFormHeader">
                                        Average bill
                                    </div>
                                    <div className="businessInput">
                                        <input type="text" className='businessInputValue half'
                                               placeholder='Average bill...'/>
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
                                />
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>

    </div>;
}