import React, {useState} from "react";
import './Login.css'

export const Login = () => {

    const [input, setInput] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState({
        username: '',
        password: '',
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
                case "username":
                    if (!value) {
                        stateObj[name] = "Please enter Email.";
                    }
                    break;

                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
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
                Login to Present Perfect
            </div>
            <div className="loginFormForm">
            <div className="loginForm">
                <div className="loginFormHeader">
                    Login to Present Perfect Management
                </div>
                <div className="authentication">
                    <div className="inputHeader">
                        Your Email
                    </div>
                    <div className="inputAuthentication">
                        <input type="text"
                               name="username"
                               placeholder='Enter your Email'
                               value={input.username}
                               onChange={onInputChange}
                               onBlur={validateInput} className='inputAuthenticationInput'/>
                        {error.username && <span className='err'>{error.username}</span>}
                    </div>
                    <div className="inputHeader">
                        Your Password
                    </div>
                    <div className="inputAuthentication">
                        <input type="password"
                            name="password"
                            placeholder='Enter your Password'
                            value={input.password}
                            onChange={onInputChange}
                            onBlur={validateInput} className='inputAuthenticationInput'/>
                        {error.password && <span className='err'>{error.password}</span>}
                    </div>

                </div>
                <div className="forgetPass">
                    Forgot password?
                </div>
                <div className="loginButton">
                    Login
                </div>
            </div>
            </div>
        </div>

    )

}

export default Login