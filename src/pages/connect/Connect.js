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
                        <Explanation></Explanation>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </>

    )

}
export default Connect