import React from "react";
import './Auth-step-1.css'

export const AuthStep1 = () =>{

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
                            <div className="singleNumber">
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
                                Your Full Name
                            </div>
                            <div className="inputAuthentication">
                                <input type="text" className='inputAuthenticationInput' placeholder='Input your name'/>
                            </div>
                            <div className="inputHeader">
                                Your Mobile Phone
                            </div>
                            <div className="inputAuthentication">
                                <input type="text" className='inputAuthenticationInput' placeholder='Input your mobile phone'/>
                            </div>
                            <div className="inputHeader">
                                Your ID Code
                            </div>
                            <div className="inputAuthentication">
                                <input type="text" className='inputAuthenticationInput' placeholder='Input your ID code'/>
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
export default AuthStep1