import React from "react";

export const BusinessCouponOrderHeader = ({step}) => {


    return (
        <>

            <div className="authNumbers">
                <div className="singleNumber activated">
                    1
                </div>
                <div className={step > 0 ? "numberLineBusiness activated" : "numberLineBusiness"}>
                </div>
                <div className={step > 0 ? "singleNumber activated" : "singleNumber"}>
                    2
                </div>
                <div className={step > 1 ? "numberLineBusiness activated" : "numberLineBusiness"}>
                </div>
                <div className={step > 1 ? "singleNumber activated" : "singleNumber"}>
                    3
                </div>
                <div className={step > 2 ? "numberLineBusiness activated" : "numberLineBusiness"}>
                </div>
                <div className={step > 2 ? "singleNumber activated" : "singleNumber"}>
                    4
                </div>
                <div className={step > 3 ? "numberLineBusiness activated" : "numberLineBusiness"}>
                </div>
                <div className={step > 3 ? "singleNumber activated" : "singleNumber"}>
                    5
                </div>
            </div>

            <div className="loginFormHeader">
                Please fill out the multiple step form
                with required info
            </div>

        </>
    )
}

export default BusinessCouponOrderHeader
