import React, {useEffect, useState} from "react";
import '../business-coupon-order/BusinessAuth.css'
import sausage from '../../assets/img/sosiska.png'
import TableForPayment from "../../ui-components/table-for-payment/TableForPayment";
import BusinessCouponOrderHeader from "../../ui-components/business-coupon-order-header/BusinessCouponOrderHeader";
import {useNavigate, useLocation} from "react-router-dom";
import customerServices from "../../services/customer";

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
            {!paymentValidationResult ?
                // payment success
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
                                <TableForPayment/>
                                <div className="downloadReceipt">
                                    Download order receipt
                                </div>
                                <button onClick={() => {
                                    navigate('/')
                                    if (location.pathname.includes('personal-coupon-order')) {
                                        localStorage.removeItem('personalFormData')
                                    }
                                    if (location.pathname.includes('business-coupon-order')) {
                                        localStorage.removeItem('businessFormData')
                                    }
                                }} className="loginButtonBusiness">
                                    Get Back To Homepage
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                :
                // payment failed
                <h1>payment failed
                    <br/>
                    <button onClick={() => window.location.reload()}>try again</button>
                </h1>
            }

        </>

    )

}
