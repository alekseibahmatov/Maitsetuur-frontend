import React from "react-dom";
import './BusinessAuth.css'
import {useState} from "react";
import {ErrorMessage, Field} from "formik";
import arrow from '../../assets/img/Arrow 11.svg'
import example from '../../assets/img/Group 630.svg'
import {LimitedTextArea} from "../../ui-components/limited-text-area/LimitedTextArea";
import {LimitedTextAreaCoupon} from "../../ui-components/limited-text-area-coupon/LimitedTextAreaCoupon";

export const Step3CouponExample = () =>{

    const [step, setStep] = useState(2);

    return (

        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Add Coupon Configuration
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
                        <div className="couponExampleLeftRight">
                            <div className="leftSideCouponInput">
                                <div className="inputHeader">
                                    Coupons amount
                                </div>
                                <div className="inputAuthentication">
                                    <input className="inputAuthenticationInput" type="text"
                                           name="fullName"
                                           placeholder="Input coupons amount"/>
                                </div>
                                <div className="singleCheckBox">
                                    <label className="form-control">
                                        <input type="checkbox" name="checkbox" className='input'/>
                                    </label>
                                    <div className='checkBoxText'>
                                        The coupons wont be personal?
                                    </div>
                                </div>
                                <div className="inputAuthenticationWrapper">
                                <div className="inputAuthentication">
                                    <input className="inputAuthenticationInput paddingRight" type="text"
                                           name="fullName"
                                           placeholder="Input coupons amount"/>
                                </div>
                                    <div  className="numbersForCoupon">
                                        1
                                    </div>
                                </div>
                                <div className="singleCheckBox">
                                    <label className="form-control">
                                        <input type="checkbox" name="checkbox" className='input'/>
                                    </label>
                                    <div className='checkBoxText'>
                                        Will coupons have the same nominal value?
                                    </div>
                                </div>
                                <div className="inputAuthenticationWrapper">
                                <div className="inputAuthentication">
                                    <input className="inputAuthenticationInput paddingRight " type="text"
                                           name="fullName"
                                           placeholder="Input coupons amount"/>
                                </div>
                                    <div  className="numbersForCoupon ">
                                        2
                                    </div>
                                </div>
                                <div className="singleCheckBox">
                                    <label className="form-control">
                                        <input type="checkbox" name="checkbox" className='input'/>
                                    </label>
                                    <div className='checkBoxText'>
                                        Will coupons have the same greeting text?
                                    </div>
                                </div>
                                <div className="inputAuthenticationWrapper">
                                <div className="inputAuthentication">
                                    <LimitedTextAreaCoupon limit={100} value='' />
                                </div>
                                    <div  className="numbersForCoupon top10">
                                        3
                                    </div>
                                </div>
                            </div>
                            <div className="rightSideCouponExample">
                                <div className="headerWithArrow">
                                    <div className="couponExampleHeader">
                                        Coupon Example
                                    </div>
                                    <div className="arrowCouponExample">
                                        <img src={arrow} alt="" className='arrowCoupon'/>
                                    </div>
                                </div>
                                <div className="mainExampleSvg">
                                    <img src={example} alt="" className='exampleCoupon'/>
                                </div>
                            </div>
                        </div>
                        <div className="alignFlexBusiness">
                            <button type="button"  className="loginButton">
                                Next step
                            </button>
                            <button type="button"
                                    className="loginButtonBack">
                                Go back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}