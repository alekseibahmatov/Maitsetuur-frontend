import React, {useState} from "react";
import './Connect.css'
import burx from "../../assets/img/burx.svg";
import share from "../../assets/img/share.svg";
import {useNavigate} from "react-router-dom";
import Footer from "../../ui-components/footer/Footer";
import Explanation from "../../ui-components/explanation/Explanation";

export const Connect = () =>{
    const navigate = useNavigate();
    const [isBurger, setIsBurger] = useState(false);
    const handleClick123 = event => {
        if (event.target.className === 'burx_img'){
            setIsBurger(true)
        }
        else {
            setIsBurger(false)
        }
    }
    const scrollToExplain = () =>{
        document.getElementById('explain').scrollIntoView({behavior: "smooth", block: "start"});
    }

    const [formData, setFormData] = useState({
        from: "",
        companyName: "",
        fromMail: "",
        fromPhone: '',
    });

    const [emailValid, setEmailValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);

    const isFilled = formData.from &&
        formData.companyName &&
        formData.fromMail &&
        formData.fromPhone &&
        emailValid &&
        phoneValid;

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const validateEmail = (email) => {
        // email validation regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        // phone number validation regular expression
        const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        return phoneRegex.test(phone);
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmailValid(validateEmail(value));
        handleChange(e);
    };

    const handlePhoneChange = (e) => {
        const { value } = e.target;
        setPhoneValid(validatePhone(value));
        handleChange(e);
    };


    return(

        <>
            <div className='bg' onClick={handleClick123}>
                <div className="realBg">
                    <div className='container'>
                        <div className="preview">
                            <div className="header">
                                <div className="burger">
                                    <img src={burx} className='burx_img'></img>
                                </div>
                                <div className="logoLanding">
                                    MENU
                                </div>
                                <div className="share">
                                    <div className="share_text">
                                        Share
                                    </div>
                                    <img src={share} className='share_img'></img>
                                </div>
                            </div>
                            <div className={isBurger ? 'burger_opened' : 'burger_closed'}>
                                <div className="closeBurger">
                                    +
                                </div>
                                <div className="next" onClick={() => navigate('/')}>
                                    Home
                                </div>
                                <div className="next" onClick={() => navigate('/allrestaurants')}>
                                    All the restaraunts
                                </div>
                                <div className="next" onClick={scrollToExplain} >
                                    How does it work
                                </div>
                            </div>
                            <div className="singleRestaurantHeader">
                                Connect your own restaurant
                            </div>
                            <div className="singleRestaurantDescription">
                                The more of us participate, the more customers we serve!
                            </div>
                            <div className="leaveForApply">
                                <div className="leaveForApplyHeader">
                                    Submit your application
                                </div>
                                <div className="leaveForApplyMain">
                                    <div className="leaveForApplyLeft">
                                        <div className="form">
                                            <div className="from_who">
                                                <input type='text' placeholder='Name' className='certificateInputValue'
                                                name='from'
                                                value={formData.from}
                                                onChange={handleChange}
                                                ></input>
                                            </div>
                                            <div className="from_who">
                                                <input type='text' placeholder='Restaurant' className='certificateInputValue'
                                                       name='companyName'
                                                       value={formData.companyName}
                                                       onChange={handleChange}
                                                ></input>
                                            </div>
                                            <div className="from_who">
                                                <input type='email' placeholder='E-mail' className={`certificateInputValue ${
                                                    !emailValid ? "invalid" : ""
                                                }`}
                                                       name='fromMail'
                                                       value={formData.fromMail}
                                                       onChange={handleEmailChange}/>
                                                {!emailValid && (
                                                    <div className="error">Please enter a valid email address</div>
                                                )}
                                            </div>
                                            <div className="from_who">
                                                <input type='text' placeholder='Phone number'
                                                       className={`certificateInputValue ${
                                                           !phoneValid ? "invalid" : ""
                                                       }`}
                                                       name='fromPhone'
                                                       value={formData.fromPhone}
                                                       onChange={handlePhoneChange}/>
                                                {!phoneValid && (
                                                    <div className="error">
                                                        Please enter a valid phone number
                                                    </div>)}
                                            </div>
                                        </div>
                                        <div className="lowerLeaverForApply">
                                            <div className={`pay ${isFilled ? "filled" : ""}`}>
                                                Send
                                            </div>
                                            <div className="confirmTerms">
                                                I agree with the <span className="blue">Terms of personal data processing</span>.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="leaveForApplyRight">
                                        <div className="leaveForApplyRightHeader">
                                            How to enter the programme?
                                        </div>
                                        <div className="leaverForApplySteps">
                                            <div className="leaveForApplySingleStep">
                                                <div className="leaverForApplyNumber">
                                                    01
                                                </div>
                                                <div className="leaveForApplyAnswer">
                                                    Fill out the form with the necessary information, the manager will contact you.
                                                </div>
                                            </div>
                                            <div className="leaveForApplySingleStep">
                                                <div className="leaverForApplyNumber">
                                                    02
                                                </div>
                                                <div className="leaveForApplyAnswer">
                                                    We connect the restaurant to the program, issue instructions for integration at the box office or integrate it ourselves.
                                                </div>
                                            </div>
                                            <div className="leaveForApplySingleStep">
                                                <div className="leaverForApplyNumber">
                                                    03
                                                </div>
                                                <div className="leaveForApplyAnswer">
                                                    We carry out the calculation in the agreed period, excluding the agency fee.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="unrealBg">
                    <div className="container">
                        <Explanation></Explanation>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </>

    )

}
export default Connect