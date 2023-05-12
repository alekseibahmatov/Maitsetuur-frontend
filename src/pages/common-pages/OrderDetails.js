import React, {useEffect, useState} from "react";
import '../business-coupon-order/BusinessAuth.css'
import sausage from '../../assets/img/sosiska.png'
import TableForPayment from "../../ui-components/table-for-payment/TableForPayment";
import BusinessCouponOrderHeader from "../../ui-components/business-coupon-order-header/BusinessCouponOrderHeader";
import {useNavigate, useParams} from "react-router-dom";
import {BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION, BUSINESS_COUPON_ORDER_ADD_COUPON_DATA} from "../../routes";
import customerServices from "../../services/customer";

export const OrderDetails = () => {
    const {orderToken} = useParams();
    const navigate = useNavigate();
    const [step, setStep] = useState(4);
    const [isLoading, setIsLoading] = useState(true);
    const [paymentValidationResult, setPaymentValidationResult] = useState(null);

    const validatePayment = async () => {
        setIsLoading(true);
        try {
            await Promise.all([
                new Promise((resolve) => setTimeout(resolve, 2000)),
                customerServices.validatePayment(orderToken)
                    .then(result => setPaymentValidationResult(result))
                    .catch(error => setPaymentValidationResult(false))
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        validatePayment();
    }, []);

    if (isLoading) {
        return (
            <div className="loading">
                <h2>Loading...</h2>
            </div>
        );
    }

    const storedData = localStorage.getItem('businessFormData');
    // if (!storedData) {
    //     navigate(BUSINESS_COUPON_ORDER_ADD_BUSINESS_INFORMATION);
    //     return null;
    // }

    const parsedData = storedData ? JSON.parse(storedData) : null;
    // if (!parsedData.generalCouponObject) {
    //     navigate(BUSINESS_COUPON_ORDER_ADD_COUPON_DATA);
    //     return null;
    // }

    const coupons = parsedData ? parsedData.generalCouponObject : [];

    const nominalValues = [...new Set(coupons.map(coupon => coupon.nominalValue))];

    const items = nominalValues.map(nominalValue => {
        const filteredCoupons = coupons.filter(coupon => coupon.nominalValue === nominalValue);
        const quantity = filteredCoupons.length;
        const price = parseFloat(nominalValue);
        return {item: `Certificate ${nominalValue}$`, quantity, price};
    }).sort((a, b) => a.price - b.price);

    const total = items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);


    return (

        <>
            {paymentValidationResult ?
                <div className="loginContent">
                    <div className="loginHeader">
                        Order details
                    </div>
                    <div className="loginFormForm">
                        <div className="loginFormBusiness">
                            <BusinessCouponOrderHeader step={step}/>
                            <div className="successMessage">
                                <div className="sausageLogoImage">
                                    <img src={sausage} alt="" className='smallSosiskaLehi'/>
                                </div>
                                <div className="thankYouMessage">
                                    Thank you for purchase!
                                </div>
                            </div>
                            <div className="inputBoards">
                                <TableForPayment items={items} total={total}/>
                                <div className="downloadReceipt">
                                    Download order receipt
                                </div>
                                <button onClick={() => {
                                    navigate('/')
                                    localStorage.removeItem('businessFormData')
                                }} className="loginButtonBusiness">
                                    Get Back To Homepage
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                : <h1>Failure
                    <br/>
                    <button onClick={() => window.location.reload()}>try again</button>
                </h1>}

        </>

    )

}
