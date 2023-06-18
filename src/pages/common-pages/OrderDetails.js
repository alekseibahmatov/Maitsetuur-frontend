import React, {useEffect, useState} from "react";
import '../business-coupon-order/BusinessAuth.css'
import sausage from '../../assets/img/sosiska.png'
import TableForPayment from "../../ui-components/table-for-payment/TableForPayment";
import BusinessCouponOrderHeader from "../../ui-components/business-coupon-order-header/BusinessCouponOrderHeader";
import {useNavigate, useLocation} from "react-router-dom";
import customerServices from "../../services/customer";
import {CouponSucessHeader} from "../../ui-components/coupon-sucess-header/CouponSucessHeader";
import {CouponFailureHeader} from "../../ui-components/coupon-failure-header/CouponFailureHeader";
import declineMain from '../../assets/img/declinedMiddle.png'
import {PaymentSuccess} from "../../ui-components/payment-status/PaymentSuccess";
import {PaymentFailure} from "../../ui-components/payment-status/PaymentFailure";

export const OrderDetails = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const orderToken = searchParams.get('order-token');

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
                    .then(result => {
                        setPaymentValidationResult(result?.data?.success)
                    })
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


    return (

        <>
            {paymentValidationResult ?
                // payment success
                <PaymentSuccess/>
                :
                // payment failed
                <PaymentFailure/>
            }

        </>

    )

}
