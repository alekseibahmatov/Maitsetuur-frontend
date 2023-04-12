import React from "react-dom";
import './BusinessAuth.css'
import {useState} from "react";
import {ErrorMessage, Field} from "formik";

export const Step1 = () =>{

    const [step, setStep] = useState(0);

    return (

        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Add Business Information
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
                            Business Name
                        </div>
                        <div className="inputAuthentication">
                            <input className="inputAuthenticationInput" type="text"
                                   name="fullName"
                                   placeholder="Input business name"/>
                        </div>
                            <div className="inputHeader">
                                Business Code
                            </div>
                            <div className="inputAuthentication">
                                <input className="inputAuthenticationInput" type="text"
                                       name="fullName"
                                       placeholder="Input business code"/>
                            </div>
                            <div className="inputHeader">
                                Business KRKM
                            </div>
                            <div className="inputAuthentication">
                                <input className="inputAuthenticationInput" type="text"
                                       name="fullName"
                                       placeholder="Input business KRKM"/>
                            </div>
                            <div className="inputHeader">
                                Business Email
                            </div>
                            <div className="inputAuthentication">
                                <input className="inputAuthenticationInput" type="text"
                                       name="fullName"
                                       placeholder="Input business email"/>
                            </div>
                            <button  className="loginButtonBusiness">
                                Next step
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}