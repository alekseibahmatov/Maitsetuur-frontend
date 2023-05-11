import React from "react";

export const PersonalCouponOrderHeader = ({step}) => {
    return (
        <>

            <div className="authNumbers">
                <div className={step > 0 ? "singleNumber activated" : "singleNumber"}>
                    1
                </div>
                <div className={step > 1 ? "numberLine activated" : "numberLine"}/>
                <div className={step > 1 ? "singleNumber activated" : "singleNumber"}>
                    2
                </div>
                <div className={step > 2 ? "numberLine activated" : "numberLine"}/>
                <div className={step > 2 ? "singleNumber activated" : "singleNumber"}>
                    3
                </div>
                <div className={step > 3 ? "numberLine activated" : "numberLine"}/>
                <div className={step > 3 ? "singleNumber activated" : "singleNumber"}>
                    4
                </div>
            </div>

            <div className="loginFormHeader">
                Please fill out the multiple step form
                with required info
            </div>

        </>
    )
}

export default PersonalCouponOrderHeader
