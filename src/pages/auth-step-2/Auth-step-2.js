import React from "react";
import './Auth-step-2.css'

export const AuthStep2 = () => {

    return(

        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Add your personal information
                </div>
                <div className="loginFormForm">
                    <div className="loginForm">
                        <div className="authNumbers">
                            <div className="singleNumber activated">
                                1
                            </div>
                            <div className="numberLine">
                            </div>
                            <div className="singleNumber activated">
                                2
                            </div>
                            <div className="numberLine">
                            </div>
                            <div className="singleNumber">
                                3
                            </div>
                        </div>
                        <div className="loginFormHeader">
                            Please fill out the multiple step form
                            with your personal info
                        </div>
                        <div className="authentication">
                            <div className="inputHeader">
                                Your Country
                            </div>
                            <div className="inputAuthentication">
                                <input type="text" className='inputAuthenticationInput' placeholder='Input your country'/>
                            </div>
                            <div className="inputHeader">
                                Your City
                            </div>
                            <div className="inputAuthentication">
                                <input type="text" className='inputAuthenticationInput' placeholder='Input your city'/>
                            </div>
                            <div className="inputHeader">
                                Your State
                            </div>
                            <div className="inputAuthentication">
                                <input type="text" className='inputAuthenticationInput' placeholder='Input your state'/>
                            </div>
                            <div className="inputHeader">
                                Your Street
                            </div>
                            <div className="inputAuthentication">
                                <input type="text" className='inputAuthenticationInput' placeholder='Input your street'/>
                            </div>
                            <div className="inputHeader">
                                Your Apartment Number
                            </div>
                            <div className="inputAuthentication">
                                <input type="text" className='inputAuthenticationInput' placeholder='Input your apartment number'/>
                            </div>
                            <div className="inputHeader">
                                Your Postcode
                            </div>
                            <div className="inputAuthentication">
                                <input type="text" className='inputAuthenticationInput' placeholder='Input your postcode'/>
                            </div>
                        </div>
                        <div className="loginButton">
                            Go to next step
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
export default AuthStep2