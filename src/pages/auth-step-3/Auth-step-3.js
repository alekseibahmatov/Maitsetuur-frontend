import React from "react";
import './Auth-step-3.css'

export const AuthStep3 = () =>{

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
                            <div className="singleNumber activated">
                                3
                            </div>
                        </div>
                        <div className="loginFormHeader">
                            Please fill out the multiple step form
                            with your personal info
                        </div>
                        <div className="authentication">
                            <div className="inputHeader">
                                Your password
                            </div>
                            <div className="inputAuthentication">
                                <input type="password" className='inputAuthenticationInput' placeholder='Input your password'/>
                            </div>
                            <div className="inputHeader">
                                Repeat Your Password
                            </div>
                            <div className="inputAuthentication">
                                <input type="password" className='inputAuthenticationInput' placeholder='Repeat your password'/>
                            </div>
                        </div>
                        <div className="loginButton">
                            Proceed To Login
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
export default AuthStep3