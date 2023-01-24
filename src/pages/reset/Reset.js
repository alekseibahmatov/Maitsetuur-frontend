import React, {useState} from "react";
import './Reset.css'

export const Reset = () =>{

    const [input, setInput] = useState({
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({
        password: '',
        confirmPassword: ''
    })

    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {
                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (input.password && value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }

    return (



        <div className='loginContent'>

            <div className="loginHeader">
                Reset Password
            </div>
            <div className="loginFormForm">
                <div className="loginForm">
                    <div className="loginFormHeader">
                        Reset Password for genryeiter@gmail.com
                    </div>
                    <div className="authentication">
                        <div className="inputHeader">
                            New Password
                        </div>
                        <div className="inputAuthentication">
                            <input type="password"
                                   name="password"
                                   placeholder='Enter your new Password'
                                   value={input.password}
                                   onChange={onInputChange}
                                   onBlur={validateInput} className='inputAuthenticationInput'/>
                            {error.password && <span className='err'>{error.password}</span>}
                        </div>
                        <div className="inputHeader">
                            Repeat Password
                        </div>
                        <div className="inputAuthentication">
                            <input type="password"
                                   name="confirmPassword"
                                   placeholder='Repeat your new Password'
                                   value={input.confirmPassword}
                                   onChange={onInputChange}
                                   onBlur={validateInput} className='inputAuthenticationInput'/>
                            {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                        </div>
                    </div>
                    <div className="loginButton">
                        Reset password
                    </div>
                </div>
            </div>
        </div>

    )


}


export default Reset