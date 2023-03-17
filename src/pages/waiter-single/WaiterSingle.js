import React, {useState, useEffect} from "react";
import './WaiterSingle.css'
import dots from "../../assets/img/dots.png";
import PopupSumbit from "../../ui-components/popup-sumbit/Popup-sumbit";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import {WaiterSingleSchema} from "./WaiterSingleSchema";
import {table} from './data'
import {Link, useNavigate, useParams} from "react-router-dom";
import adminServices from "../../services/admin";
import toast from "react-hot-toast";
import {initialValuesCreate} from "../admin/resto-business-info/formikInitialValues";
import manager from "../../assets/img/Businessman.png";
import {
    LoadingAnimationCircular
} from "../../ui-components/loading-animation/loading-animaiton-circular/LoadingAnimationCircular";
import authService from "../../services/auth";
import jwt_decode from "jwt-decode";
import managerServices from "../../services/manager"

const initialValues = {
    fullName: "",
    phone: "",
    personalCode: "",
    country: "",
    city: "",
    state: "",
    street: "",
    apartmentNumber: "",
    zipCode: "",
    email: "",
    restaurantName: "",
};


export const WaiterSingle = () => {
    const {waiterId} = useParams();
    const navigate = useNavigate();
    const [waiterData, setWaiterData] = useState({});
    const [isAdmin, setAdmin] = useState(false);
    const [actionType, setActionType] = useState(null);
    const authUser = authService.getAuthUser();
    const decodedRoles = jwt_decode(authUser.token)?.roles;


    const modifiedValues = {
        fullName: waiterData.fullName,
        email: waiterData.email,
        phone: waiterData.phone,
        street: waiterData?.address?.street,
        apartmentNumber: waiterData?.address?.apartmentNumber,
        city: waiterData?.address?.city,
        state: waiterData?.address?.state,
        zipCode: waiterData?.address?.zipCode,
        country: waiterData?.address?.country,
        personalCode: waiterData.personalCode,
        activated: waiterData.activated,
        deleted: waiterData.deleted,
        activationCode: waiterData.activationCode,
        transactions: waiterData.transactions,
        restaurantId: waiterData.restaurantId,
        logins: waiterData.logins,
        roleNames: waiterData.roleNames
    };

    const [popupSubmit, setPopupSubmit] = useState(false);

    const toggleModal = (action) => {
        setActionType(action)
        setPopupSubmit(!popupSubmit)
    }

    const getWaiterDataOnMount = async () => {
        try {
            const result = await adminServices.getWaiterData(waiterId)
            setWaiterData(result.data)

            console.log(result)
        } catch (error) {
            // navigate('/dashboard')
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
    }

    useEffect(() => {
        setAdmin(decodedRoles?.includes('ROLE_ADMIN'))

        if (waiterId) {
            getWaiterDataOnMount()
        }
    }, [waiterId]);

    return (<div className='content'>

            <div className="waitersMainContent">
                <div className="businessHeader">
                    <div className="businessHeader1">
                        {waiterData.fullName ? waiterData.fullName : !waiterId ? "Create" : "Loading..."} Waiter’s
                        Account for R14
                    </div>
                    <div className="flexStyleDiv">
                        <div onClick={() => toggleModal(waiterId ? "Update" : "Create")} className="buttonSample">
                            {waiterId ? "Update" : "Create"}
                        </div>
                        <div onClick={() => toggleModal("Delete")} className="buttonSample red">
                            Delete
                        </div>

                    </div>
                </div>
                <Formik
                    enableReinitialize={true}
                    initialValues={modifiedValues}
                    onSubmit={(values, actions) => {
                        setTimeout(async () => {
                            console.log(values)
                            try {
                                let result;
                                console.log(actionType)
                                if (isAdmin) {
                                    if (actionType === 'Update') {
                                        result = await adminServices.updateWaiterData(values);
                                    }
                                } else {
                                    if (actionType === 'Create') {
                                        result = await managerServices.createNewWaiter(values);
                                    } else if (actionType === 'Update') {
                                        result = await managerServices.updateWaiterData(values);
                                    } else if (actionType === 'Delete') {
                                        result = await managerServices.deleteWaiter(waiterId);
                                    }
                                }


                                console.log(result)
                                toast.success('Restaurant Created Successfully');
                                // setTimeout(() => {
                                //     if (result.status === 200 && result.data.restaurantCode) {
                                //         setPopupSubmit(false)
                                //         navigate('/dashboard/restaurant-info/' + result.data.restaurantCode)
                                //     }
                                // }, 1000);
                            } catch (error) {
                                console.log(error.code)
                                toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
                            }

                            actions.setSubmitting(false);
                        }, 1000);
                    }}
                    validationSchema={WaiterSingleSchema}
                >
                    {(props: FormikProps<any>) => (<Form>
                        <PopupSumbit actionName={actionType} props={props} isOpen={popupSubmit}
                                     toggleModal={toggleModal}/>
                        <div className="couponsMain">
                            {isAdmin ? <div className="businessSingleBlock">
                                <div className="businessSingleBlockImage">
                                    <img src={manager} alt="businessPhoto"/>
                                </div>
                                <div className="buttonInfo">
                                    <div className="buttonHeader">
                                        Restaurant Information
                                    </div>
                                    <div className="buttonSample1"
                                         onClick={() => navigate('/dashboard/restaurant-info/' + waiterData?.restaurantCode)}>
                                        Browse
                                    </div>
                                </div>
                            </div> : null}
                            <div className="mailPhone">
                                <div className="leftContent">
                                    <div className="businessFormHeader">
                                        Full Name
                                    </div>
                                    <div className="businessInput">
                                        <div className="businessInputWrapper">
                                            <Field className="businessInputValue" type="text"
                                                   name="fullName"
                                                   placeholder={waiterData && !waiterId ? "Input full name..." : "Loading..."}/>
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
                                                   name="phone"
                                                   placeholder={waiterData && !waiterId ? "Input phone number..." : "Loading..."}/>
                                            <div className="error">
                                                <ErrorMessage name="phone"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mailPhone">
                                <div className="leftContent">
                                    <div className="businessFormHeader">
                                        Personal Code
                                    </div>
                                    <div className="businessInput">
                                        <div className="businessInputWrapper">
                                            <Field className="businessInputValue" type="text"
                                                   name="personalCode"
                                                   placeholder={waiterData && !waiterId ? "Input personal code..." : "Loading..."}/>
                                            <div className="error">
                                                <ErrorMessage name="personalCode"/>
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
                                                   placeholder={waiterData && !waiterId ? "Input personal code..." : "Loading..."}/>

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
                                                   placeholder={waiterData && !waiterId ? "Input city..." : "Loading..."}/>
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
                                                   placeholder={waiterData && !waiterId ? "Input state..." : "Loading..."}/>
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
                                                   placeholder={waiterData && !waiterId ? "Input street..." : "Loading..."}/>
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
                                                   placeholder={waiterData && !waiterId ? "Input apartment number..." : "Loading..."}/>
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
                                                   placeholder={waiterData && !waiterId ? "Input apartment email..." : "Loading..."}/>
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
                                                   name="zipCode"
                                                   placeholder={waiterData && !waiterId ? "Input post code..." : "Loading..."}/>
                                            <div className="error">
                                                <ErrorMessage name="zipCode"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Form>)}
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
                        {!waiterData.transactions ?
                            <div className="loadingWrapper">
                                <LoadingAnimationCircular/>
                            </div>
                            :
                            waiterData?.transactions?.length === 0 ? <h1 className="noDataList">No data...</h1> :
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
                                    {waiterData.transactions.map((item, i) => (
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
                        }
                    </div>
                </div>

                {isAdmin ?
                    <div className="waitersMain" style={{display: "block"}}>
                        <div className="couponListHeader">
                            <div className="couponListHeaderName">
                                List of logged devices
                            </div>
                            <div className="features">
                                <img src={dots} alt="features"/>
                            </div>
                        </div>
                        <div className="overflownContent">
                            {!waiterData.login ? <div className="loadingWrapper">
                                <LoadingAnimationCircular/>
                            </div> : waiterData?.transactions?.length === 0 ?
                                <h1 className="noDataList">No data...</h1> :
                                <table>
                                    <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Device Name</th>
                                        <th scope="col">Last Logged</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Device metadata</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {waiterData.transactions.map((item, i) => (<tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.deviceName}</td>
                                        <td>{item.lastLogged}</td>
                                        <td>{item.location}</td>
                                        <td>{item.deviceMetadata}</td>
                                    </tr>))}
                                    </tbody>
                                </table>
                            }
                        </div>
                    </div>
                    : null}
            </div>
        </div>
    )
}


export default WaiterSingle