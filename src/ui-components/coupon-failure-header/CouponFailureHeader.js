import React from "react-dom";
import './CouponFailureHeader.css'
import declined from '../../assets/img/declinedHeader.png'

export const CouponFailureHeader = () => {

    return (

        <>
            <div className="authNumbers">
                <div className="headerCircles failure">

                </div>
                <div className="numberLineBusiness redLine">
                </div>
                <div className="headerCircles failure">

                </div>
                <div className="numberLineBusiness redLine">
                </div>
                <div className="headerCircleCenter failure">
                    <img src={declined} alt=""/>
                </div>
                <div className="numberLineBusiness redLine">
                </div>
                <div className="headerCircles failure">

                </div>
                <div className="numberLineBusiness redLine">
                </div>
                <div className="headerCircles failure">

                </div>
            </div>

        </>

    )

}

