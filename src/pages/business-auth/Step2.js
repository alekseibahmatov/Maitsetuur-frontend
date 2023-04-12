import React from "react-dom";
import './BusinessAuth.css'
import {useState} from "react";
import {ErrorMessage, Field} from "formik";

export const Step2 = () =>{

    const [step, setStep] = useState(1);

    return (

        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Add Business Address
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
                            <div className="inputHeader">
                                Your Country
                            </div>
                            <div className="inputAuthentication">
                                <input className="inputAuthenticationInput" type="text"
                                       name="fullName"
                                       placeholder="Input your country"/>
                            </div>
                            <div className="inputHeader">
                                You city
                            </div>
                            <div className="inputAuthentication">
                                <input className="inputAuthenticationInput" type="text"
                                       name="fullName"
                                       placeholder="Input your city"/>
                            </div>
                            <div className="inputHeader">
                                Your State
                            </div>
                            <div className="inputAuthentication">
                                <input className="inputAuthenticationInput" type="text"
                                       name="fullName"
                                       placeholder="Input your state"/>
                            </div>
                            <div className="inputHeader">
                                Your Street
                            </div>
                            <div className="inputAuthentication">
                                <input className="inputAuthenticationInput" type="text"
                                       name="fullName"
                                       placeholder="Input your street"/>
                            </div>
                            <div className="inputHeader">
                                Your House Number
                            </div>
                            <div className="inputAuthentication">
                                <input className="inputAuthenticationInput" type="text"
                                       name="fullName"
                                       placeholder="Input your house number"/>
                            </div>
                            <div className="inputHeader">
                                Your Postcode
                            </div>
                            <div className="inputAuthentication">
                                <input className="inputAuthenticationInput" type="text"
                                       name="fullName"
                                       placeholder="Input your postcode"/>
                            </div>
                            <div className="alignFlexBottom">
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
            </div>
        </>

    )

}