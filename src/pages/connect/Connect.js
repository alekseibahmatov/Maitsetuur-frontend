import React, {useState} from "react";
import './Connect.css'
import burx from "../../assets/img/burx.svg";
import share from "../../assets/img/share.svg";
import {useNavigate} from "react-router-dom";

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
                                                <input type='text' placeholder='Name' className='certificateInputValue'></input>
                                            </div>
                                            <div className="from_who">
                                                <input type='text' placeholder='Restaurant' className='certificateInputValue'></input>
                                            </div>
                                            <div className="from_who">
                                                <input type='email' placeholder='E-mail' className='certificateInputValue'></input>
                                            </div>
                                            <div className="from_who">
                                                <input type='text' placeholder='Phone number' className='certificateInputValue'></input>
                                            </div>
                                        </div>
                                        <div className="lowerLeaverForApply">
                                            <div className="sendApplication">
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
                        <div className="explainSection" id='explain'>
                            <div className="explainHeader">
                                How does it work
                            </div>
                            <div className="explainMain">
                                <div className="singleExplain">
                                    <div className="number">
                                        01
                                    </div>
                                    <div className="explainDescription">
                                        You choose the denomination of the certificate and pay for a gift by card or in internet banking.
                                    </div>
                                </div>
                                <div className="singleExplain">
                                    <div className="number">
                                        02
                                    </div>
                                    <div className="explainDescription">
                                        We send the certificate to your email or recipient. If you decide for yourself hand over the certificate, print it out or send a link in the messenger.
                                    </div>
                                </div>
                                <div className="singleExplain">
                                    <div className="number">
                                        03
                                    </div>
                                    <div className="explainDescription">
                                        The recipient selects any restaurant you want to go to by certificate.
                                    </div>
                                </div>
                                <div className="singleExplain">
                                    <div className="number">
                                        04
                                    </div>
                                    <div className="explainDescription">
                                        The restaurant accepts a certificate from the guest by six digit number.
                                    </div>
                                </div>
                                <div className="singleExplainWithoutBorder">
                                    <div className="number">
                                        05
                                    </div>
                                    <div className="explainDescription">
                                        The recipient visits one or several restaurants - and rejoices your gift.
                                    </div>
                                </div>
                                <div className="singleExplainMargin">
                                    <div className="explainButtons">
                                        <div className="present" onClick={() => navigate('/')} >
                                            Make a gift
                                        </div>
                                        <div className="business" onClick={() => navigate('/')}>
                                            For business
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="who">
                            <div className="leftWho">
                                <div className="companyName">
                                    MustVorst OÜ
                                </div>
                                <div className="companyName">
                                    Kiirki 2/3
                                </div>
                                <div className="companyName">
                                    Reg. No 2281337
                                </div>
                            </div>
                            <div className="rightWho">
                                <div className="numberMail">
                                    372 5887 8456
                                </div>
                                <div className="numberMail">
                                    must@vorst.ee
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )

}
export default Connect