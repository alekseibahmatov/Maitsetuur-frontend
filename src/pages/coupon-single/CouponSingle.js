import React, {useState, useEffect} from "react";
import './Coupon-single.css'
import PopupSumbit from "../../ui-components/popup-sumbit/Popup-sumbit";
import {Form, Field, Formik, FormikProps, ErrorMessage} from "formik";
import {CouponSingleSchema} from "./CouponSingleSchema";
import {Link, useNavigate, useParams} from "react-router-dom";
import adminServices from "../../services/admin";
import toast from "react-hot-toast";
import dots from "../../assets/img/dots.png";
import {
    LoadingAnimationCircular
} from "../../ui-components/loading-animation/loading-animaiton-circular/LoadingAnimationCircular";
import {table} from "../waiter-single/data";


export const CouponSingle = () => {
    const navigate = useNavigate();
    const {couponId} = useParams();
    const [actionType, setActionType] = useState(null);
    const [popupSubmit, setPopupSubmit] = useState(false);
    const [couponData, setCouponData] = useState({});
    const [fromData, setFromData] = useState({});
    const [toData, setToData] = useState({});

    useEffect(() => {
        if (couponId) {
            getCouponDataOnMount()
        }
    }, [couponId]);

    const getCouponDataOnMount = async () => {
        try {
            const result = await adminServices.getCouponData(couponId)
            setCouponData(result.data)
            console.log(result)
            await getUserData(result.data);
        } catch (error) {
            // navigate('/dashboard')
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
    }

    const getUserData = async (data) => {
        try {
            const fromResult = await adminServices.getWaiterData(data.fromId);
            const toResult = await adminServices.getWaiterData(data.toId);
            setFromData(fromResult.data);
            setToData(toResult.data);
            console.log(data);
            console.log(fromResult.data);
            console.log('toResult.data');
            console.log(toResult.data);
        } catch (error) {
            toast.error('Opss... Something went wrong');
        }
    };

    const toggleModal = (action) => {
        setActionType(action)
        setPopupSubmit(!popupSubmit)
    }

    const modifiedInitialValues = {
        toFullName: toData.fullName,
        toEmail: toData.email,
        fromFullName: fromData.fullName,
        fromEmail: fromData.email,
        fromPhone: fromData.phone,
        fromAddress: fromData.address?.street,
        value: couponData.value,
        remainingValue: couponData.remainingValue,
        description: couponData.description,
        createdAt: couponData.createdAt,
        validUntil: couponData.validUntil,
    };

    return (
        <div className='rightBlock1'>

            <div className="businessHeader">
                <div className="businessHeader1">
                    {!couponId ? "Create" : '#' + couponId} Coupon
                    Information
                </div>
                <div className="flexStyleDiv">
                    <div className="buttonSample" onClick={() => toggleModal(couponId ? "Update" : "Create")}>
                        {couponId ? "Update" : "Create"}
                    </div>
                    <div className="buttonSample red" onClick={() => toggleModal("Delete")} hidden={!couponId}>
                        Delete
                    </div>
                </div>
            </div>

            <div className="couponsMain">
                <Formik
                    enableReinitialize={true}
                    initialValues={modifiedInitialValues}
                    onSubmit={(values, actions) => {
                        setTimeout(async () => {
                            console.log(values)
                            try {
                                let result;
                                console.log(actionType)
                                if (actionType === 'Create') {
                                    result = await adminServices.createNewCoupon(values);
                                } else if (actionType === 'Update') {
                                    console.log(values)
                                    const updateModifiedValues = {
                                        id: couponId,
                                        senderUserId: couponData.fromId,
                                        holderUserId: couponData.toId,
                                        value: values.value,
                                        remainingValue: values.remainingValue,
                                        validUntil: values.validUntil,
                                        description: values.description
                                    }
                                    result = await adminServices.updateCouponData(updateModifiedValues);
                                } else if (actionType === 'Delete') {
                                    result = await adminServices.deleteCoupon(couponId);
                                }

                                console.log(result)
                                toast.success(result.data.message ? result.data.message : 'Sucksess');
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
                    validationSchema={CouponSingleSchema}
                >
                    {(props: FormikProps<any>) => (
                        <Form>
                            <PopupSumbit actionName={actionType} props={props} isOpen={popupSubmit}
                                         toggleModal={toggleModal}/>

                            <h2>Receiver/Sender Data</h2>
                            <div className="specialBlock">

                                <div className="leftSideBlock">

                                    <div className="businessName">
                                        <div className="businessFormHeader">
                                            Receiver Full Name
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInput">
                                                <Field className="businessInputValue" type="text" name="toFullName"
                                                       disabled
                                                       placeholder={couponData && !couponId ? "Receiver Full Name..." : "Loading..."}/>
                                                <div className="error">
                                                    <ErrorMessage name="toFullName"/>
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
                                                       name="toEmail" disabled
                                                       placeholder={couponData && !couponId ? "Input receiver's email" : "Loading..."}/>
                                                <div className="error">
                                                    <ErrorMessage name="toEmail"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="businessName">
                                        <div className="businessFormHeader">
                                            Receiver Phone
                                        </div>
                                    </div>

                                </div>

                                <div className="rightSideBlock">

                                    <div className="rightContent">
                                        <div className="businessFormHeader">
                                            Sender Full Name
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="fromFullName" disabled
                                                       placeholder={couponData && !couponId ? "Input sender's full name" : "Loading..."}/>
                                                <div className="error">
                                                    <ErrorMessage name="fromFullName"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rightContent">
                                        <div className="businessFormHeader">
                                            Sender Email
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="fromEmail" disabled
                                                       placeholder={couponData && !couponId ? "Input sender's email" : "Loading..."}/>
                                                <div className="error">
                                                    <ErrorMessage name="fromEmail"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rightContent">
                                        <div className="businessFormHeader">
                                            Sender Phone
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="fromPhone" disabled
                                                       placeholder={couponData && !couponId ? "Input sender's phone" : "Loading..."}/>
                                                <div className="error">
                                                    <ErrorMessage name="fromPhone"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rightContent">
                                        <div className="businessFormHeader">
                                            Sender Address
                                        </div>
                                        <div className="businessInput">
                                            <div className="businessInputWrapper">
                                                <Field className="businessInputValue" type="text"
                                                       name="fromAddress" disabled
                                                       placeholder={couponData && !couponId ? "Input sender's address" : "Loading..."}/>
                                                <div className="error">
                                                    <ErrorMessage name="fromAddress"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="divider"/>


                            <h2 style={{marginBottom: 40}}>Coupon Data</h2>


                            <div className="mailPhone">

                                <div className="leftContent">
                                    <div className="businessFormHeader">
                                        Nominal
                                    </div>
                                    <div className="businessInput">
                                        <div className="businessInputWrapper">
                                            <Field className="businessInputValue" type="text"
                                                   name="value"
                                                   placeholder={couponData && !couponId ? "Input nominal" : "Loading..."}/>
                                            <div className="error">
                                                <ErrorMessage name="value"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="leftContent">
                                    <div className="businessFormHeader">
                                        Remaining Nominal
                                    </div>
                                    <div className="businessInput">
                                        <div className="businessInputWrapper">
                                            <Field className="businessInputValue" type="text"
                                                   name="remainingValue"
                                                   placeholder={couponData && !couponId ? "Remaining Nominal" : "Loading..."}/>
                                            <div className="error">
                                                <ErrorMessage name="remainingValue"/>
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
                                                   name="createdAt" disabled
                                                   placeholder={couponData && !couponId ? "example 12-12-12" : "Loading..."}/>
                                            <div className="error">
                                                <ErrorMessage name="createdAt"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="leftContent">
                                    <div className="businessFormHeader">
                                        Valid until
                                    </div>
                                    <div className="businessInput">
                                        <div className="businessInputWrapper">
                                            <Field className="businessInputValue" type="text"
                                                   name="validUntil"
                                                   placeholder={couponData && !couponId ? "example 12-12-12" : "Loading..."}/>
                                            <div className="error">
                                                <ErrorMessage name="validUntil"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="businessFormHeader">
                                    Description (max 100 words)
                                </div>
                                <div className="businessInput">
                                    <div className="textAreaWrapper">
                                        <Field
                                            as="textarea"
                                            type="text"
                                            className='businessInputValue fullHeight'
                                            id="description"
                                            name="description"
                                            placeholder={couponData && !couponId ? "Description..." : "Loading..."}
                                        />
                                        <div
                                            className="charactersCount">{props?.values?.description?.length ?? 0} /
                                            100
                                        </div>
                                    </div>
                                    <div className="error">
                                        <ErrorMessage name="description"/>
                                    </div>
                                </div>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>

            <div className="waitersMain" style={{display: "block"}}>

                <div className="couponListHeader">
                    <div className="couponListHeaderName">
                        <h2>
                            Transactions List
                        </h2>
                    </div>
                    <div className="features">
                        <img src={dots} alt="features"/>
                    </div>
                </div>
                <div className="overflownContent">
                    {!couponData ?
                        <div className="loadingWrapper">
                            <LoadingAnimationCircular/>
                        </div>
                        :
                        couponData?.transactions?.length === 0 ? <h1 className="noDataList">No data...</h1> :
                            <table>
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Value</th>
                                    <th scope="col">Place</th>
                                    <th scope="col">Waiter ID</th>
                                    <th scope="col">Waiter Email</th>
                                    <th scope="col">Created At</th>
                                </tr>
                                </thead>
                                <tbody>
                                {couponData?.transactions?.map((item, i) => (
                                    <tr>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.value}</td>
                                        <td>
                                            <Link to={`/dashboard/restaurant-info/${item.restaurantCode}`}>
                                                {item.restaurantName}
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={`/dashboard/waiter-info/${item.waiterId}`}>
                                                {item.waiterId}
                                            </Link>
                                        </td>
                                        <td>{item.waiterEmail}</td>
                                        <td>{item.createdAt}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                    }
                </div>
            </div>
        </div>
    )
}

export default CouponSingle
