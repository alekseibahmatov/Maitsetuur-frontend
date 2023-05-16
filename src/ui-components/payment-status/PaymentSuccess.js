import React from "react";
import {CouponSucessHeader} from "../coupon-sucess-header/CouponSucessHeader";
import TableForPayment from "../table-for-payment/TableForPayment";

export const PaymentSuccess = () =>{

    return (

        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Order details
                </div>
                <div className="loginFormForm">
                    <div className="loginFormBusiness">
                        <CouponSucessHeader/>
                        <div className="couponPaymentHeader">
                            Payment Successful
                        </div>
                        <div className="couponPaymentDescription">
                            Your payment was successful and you can
                            start using your certificate whenever you want!
                        </div>
                        <div className="inputBoards">
                            <TableForPayment/>
                            <div className="downloadReceipt">
                                Download order receipt
                            </div>
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