import React from "react-dom";
import './BusinessAuth.css'
import {useState} from "react";
import {ErrorMessage, Field} from "formik";
import left from '../../assets/img/cheevronLeft.svg'
import right from '../../assets/img/cheevronRight.svg'
import ProgressBar from "@ramonak/react-progress-bar";
import {LimitedTextAreaCoupon} from "../../ui-components/limited-text-area-coupon/LimitedTextAreaCoupon";
import tick from '../../assets/img/tick.svg'

export const Step42 = () =>{

    const [step, setStep] = useState(3);

    return (

        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Add Coupon Data
                </div>
                <div className="loginFormForm">
                    <div className="loginFormBusiness">
                        <div className="authNumbers">
                            <div className="singleNumber activated">
                                1
                            </div>
                            <div className="numberLineBusiness">
                            </div>
                            <div className={step > 0 ? "singleNumber activated" : "singleNumber"}>
                                2
                            </div>
                            <div className="numberLineBusiness">
                            </div>
                            <div className={step > 1 ? "singleNumber activated" : "singleNumber"}>
                                3
                            </div>
                            <div className="numberLineBusiness">
                            </div>
                            <div className={step > 2 ? "singleNumber activated" : "singleNumber"}>
                                4
                            </div>
                            <div className="numberLineBusiness">
                            </div>
                            <div className={step > 3 ? "singleNumber activated" : "singleNumber"}>
                                5
                            </div>
                        </div>
                        <div className="loginFormHeader">
                            Please fill out the multiple step form
                            with required info
                        </div>
                        <div className="inputBoards">
                            <div className="doneProcessWithSwipes">
                                <div className="cheevronLeft">
                                    <img src={left} alt=""/>
                                </div>
                                <div className="howManyAreDone">
                                    <div className="howManyAreDoneUpper">
                                        28 out of 28
                                    </div>
                                    <div className="howManyAreDoneLower">
                                        Certificates ready
                                    </div>
                                </div>
                                <div className="cheevronRight">
                                    <img src={right} alt=""/>
                                </div>
                            </div>
                            <div className="progressBar">
                                <img src={tick} alt="" className='doneTick'/>
                                <ProgressBar completed={100}
                                             className="wrapperProgress"
                                             isLabelVisible={false}
                                             height = '7px'
                                             bgColor = '#5541D7'
                                             baseBgColor = '#ffffff'
                                />
                            </div>
                            <div className="inputHeader">
                                Recipient Full Name
                            </div>
                            <div className="inputAuthentication">
                                <input className="inputAuthenticationInput" type="text"
                                       name="fullName"
                                       placeholder="Input full name"/>
                            </div>
                            <div className="inputHeader">
                                Recipient Email
                            </div>
                            <div className="inputAuthentication">
                                <input className="inputAuthenticationInput" type="text"
                                       name="fullName"
                                       placeholder="Input recipient email"/>
                            </div>
                            <div className="inputHeader">
                                Coupon nominal
                            </div>
                            <div className="inputAuthentication">
                                <input className="inputAuthenticationInput" type="text"
                                       name="fullName"
                                       placeholder="Input coupon nominal"/>
                            </div>
                            <div className="inputHeader">
                                Recipient Congratulations
                            </div>
                            <LimitedTextAreaCoupon limit={250} value=''></LimitedTextAreaCoupon>
                            <button  className="loginButtonBusinessSmall">
                                Go back to configuration step
                            </button>
                            <button  className="proceedPaymentButton done">
                                Proceed to payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}