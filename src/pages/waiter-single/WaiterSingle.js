import React, {useState} from "react";
import './WaiterSingle.css'
import dots from "../../assets/img/dots.png";
import PopupSumbit from "../../ui-components/popup-sumbit/Popup-sumbit";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import {WaiterSingleSchema} from "./WaiterSingleSchema";
import {table} from './data'

const initialValues = {
    fullName: "",
    mobilePhone: "",
    idCode: "",
    country: "",
    city: "",
    state: "",
    street: "",
    apartmentNumber: "",
    postcode: "",
    email: "",
    restaurantName: "",
};

export const WaiterSingle = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div className='content'>

            <div className="waitersMainContent">
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            console.log(values)
                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    validationSchema={WaiterSingleSchema}
                >
                    {(props: FormikProps<any>) => (
                        <Form>
                            <div className="businessHeader">
                                <div className="businessHeader1">
                                    Waiter’s Account for R14
                                </div>
                                <div className="flexStyleDiv">
                                    <button type="button" className="buttonSample" onClick={toggleModal}>
                                        Submit
                                    </button>
                                    <button type="button" className="buttonSample red" onClick={toggleModal}>
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="couponsMain">
                                <div className="mailPhone">
                                    <div className="leftContent">
                                        <div className="businessFormHeader">
                                           Full Name
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="fullName"
                                                       placeholder="Input full name"/>
                                                <div className="error">
                                                    <ErrorMessage name="fullName"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rightContent">
                                        <div className="businessFormHeader">
                                            Phone number
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="mobilePhone"
                                                       placeholder="Input phone number"/>
                                                <div className="error">
                                                    <ErrorMessage name="mobilePhone"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mailPhone">
                                    <div className="leftContent">
                                        <div className="businessFormHeader">
                                            Id Code
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="idCode"
                                                       placeholder="Input id code"/>
                                                <div className="error">
                                                    <ErrorMessage name="idCode"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rightContent">
                                        <div className="businessFormHeader">
                                            Country
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="country"
                                                       placeholder="Input Country"/>
                                                <div className="error">
                                                    <ErrorMessage name="country"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mailPhone">
                                    <div className="leftContent">
                                        <div className="businessFormHeader">
                                            City
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="city"
                                                       placeholder="Input city"/>
                                                <div className="error">
                                                    <ErrorMessage name="city"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rightContent">
                                        <div className="businessFormHeader">
                                            State
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="state"
                                                       placeholder="Input state"/>
                                                <div className="error">
                                                    <ErrorMessage name="state"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mailPhone">
                                    <div className="leftContent">
                                        <div className="businessFormHeader">
                                            Street
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="street"
                                                       placeholder="Input street"/>
                                                <div className="error">
                                                    <ErrorMessage name="street"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rightContent">
                                        <div className="businessFormHeader">
                                            Apartment number
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="apartmentNumber"
                                                       placeholder="Input apartment number"/>
                                                <div className="error">
                                                    <ErrorMessage name="apartmentNumber"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mailPhone">
                                    <div className="leftContent">
                                        <div className="businessFormHeader">
                                            Email
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="email"
                                                       placeholder="Input email"/>
                                                <div className="error">
                                                    <ErrorMessage name="email"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rightContent">
                                        <div className="businessFormHeader">
                                           Post code
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="postcode"
                                                       placeholder="Input post code"/>
                                                <div className="error">
                                                    <ErrorMessage name="postcode"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mailPhone">
                                    <div className="halfContent">
                                        <div className="businessFormHeader">
                                            Restaurant name
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="restaurantName"
                                                       placeholder="Input restaurant name"/>
                                                <div className="error">
                                                    <ErrorMessage name="restaurantName"/>
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

                <div className="waitersMain" style={{display: "block"}}>

                    <div className="couponListHeader">
                        <div className="couponListHeaderName">
                            List of waiter’s submited coupons
                        </div>
                        <div className="features">
                            <img src={dots} alt="features"/>
                        </div>
                    </div>
                    <div className="overflownContent">
                        <table>
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Device Name</th>
                                <th scope="col">Log time</th>
                                <th scope="col">Log Date</th>
                                <th scope="col">Amount of Coupons</th>
                                <th scope="col">Scanned money</th>
                                <th scope="col">Bill difference</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>

                            <tbody>

                            {table.map((item, i) => (

                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.date}</td>
                                    <td>{item.revenue}</td>
                                    <td>{item.netProfit}</td>
                                    <td>{item.moneyWasted}</td>
                                    <td>{item.dots}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )

}


export default WaiterSingle