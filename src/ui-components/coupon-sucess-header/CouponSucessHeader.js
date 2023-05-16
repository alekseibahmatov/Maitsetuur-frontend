import React from "react-dom";
import './CouponSucessHeader.css'
import payment from '../../assets/img/paymentSuc.png'

export const CouponSucessHeader = () => {

    return (

     <>
         <div className="authNumbers">
             <div className="headerCircles">

             </div>
             <div className="numberLineBusiness greenLine">
             </div>
             <div className="headerCircles">

             </div>
             <div className="numberLineBusiness greenLine">
             </div>
             <div className="headerCircleCenter">
                 <img src={payment} alt=""/>
             </div>
             <div className="numberLineBusiness greenLine">
             </div>
             <div className="headerCircles">

             </div>
             <div className="numberLineBusiness greenLine">
             </div>
             <div className="headerCircles">

             </div>
         </div>

     </>

    )

}

