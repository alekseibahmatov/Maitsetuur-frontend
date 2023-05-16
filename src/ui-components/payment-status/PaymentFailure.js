import React from "react";
import {CouponFailureHeader} from "../coupon-failure-header/CouponFailureHeader";
import declineMain from "../../assets/img/declinedMiddle.png";

export const PaymentFailure = () =>{

    return (

        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Order details
                </div>
                <div className="loginFormForm">
                    <div className="loginFormBusiness">
                        <CouponFailureHeader/>
                        <div className="couponPaymentHeader">
                            Payment Failed
                        </div>

                        <div className="couponPaymentDescription redText">
                            We are not able to process
                            your payment. Please try again
                        </div>
                        <div className="couponFailureImage">
                            <img src={declineMain} alt="" className='couponFailureImg'/>
                        </div>
                        <div className="couponGoBackButton">
                            Go back
                        </div>
                        <div className="couponContactUs">
                            Please don’t hesitate to contact us,
                            and write on our email:
                        </div>
                        <div className="couponMail">
                            support@maitsetuur.ee
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}