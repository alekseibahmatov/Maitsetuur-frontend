import React, {useEffect, useState} from "react";
import './Single-restaraunt.css'
import burx from "../../assets/img/burx.svg";
import share from "../../assets/img/share.svg";
import heart from "../../assets/img/Heart.svg";
import card from "../../assets/img/Gift Card.svg";
import meal from "../../assets/img/Meal.svg";
import waiter from "../../assets/img/Waiter.svg";
import ReactSwipe from 'react-swipe';
import resto from '../../assets/img/leha2.png'
import l1 from '../../assets/img/l1.png'
import left from '../../assets/img/icons8-chevron-left-30.png'
import right from '../../assets/img/icons8-chevron-right-30.png'
import address from '../../assets/img/icons8-address-28.png'
import phone from '../../assets/img/icons8-phone-28.png'
import clock from '../../assets/img/icons8-clocks-28.png'
import euro from '../../assets/img/icons8-bank-euro-28.png'
import PopupCertificate from "../../ui-components/popup-certificate/Popup-certificate";
import rightArrow from '../../assets/img/icons8-right-arrow-30.png'
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom';
import {table} from './data'
import Certificate from "../../ui-components/certificate/Certificate";
import Footer from "../../ui-components/footer/Footer";
import Explanation from "../../ui-components/explanation/Explanation";
import {Header} from "../../ui-components/header/Header";

export const SingleRestaurant = () => {
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

    const scrollToCertificate = () =>{
        document.getElementById('certificate').scrollIntoView({behavior: "smooth", block: "start"});
    }


    let reactSwipeEl1
    function contentNext1 (){
        reactSwipeEl1.next()
    }
    function contentPrevious1 (){
        reactSwipeEl1.prev()
    }

    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({
        name: '',
        description: '',
        images: [],
        address: '',
        phone: '',
        workingTime: '',
        averageBill: ''
    });


    useEffect(() => {
        const restaurantData = id ? table.find(item => item.id.toLowerCase() === id.toLowerCase()) : null;
        setRestaurant(restaurantData)
    }, [id,navigate]);

    return(
        <>
            <div className='bg' onClick={handleClick123}>
            <div className="realBg">
                <div className='container'>
                    <div className="preview">
                        <Header/>
                        <div className={isBurger ? 'burger_opened' : 'burger_closed'}>
                            <div className="closeBurger">
                                +
                            </div>
                            <div className="next" onClick={() => navigate('/')}>
                                Home
                            </div>
                            <div className="next" onClick={() => navigate('/connect')}>
                                Join us
                            </div>
                            <div className="next" onClick={scrollToCertificate}>
                                Certificate
                            </div>
                            <div className="next" onClick={() => navigate('/allrestaurants')}>
                                All the restaraunts
                            </div>
                            <div className="next" onClick={scrollToExplain}>
                                How does it work
                            </div>
                        </div>
                        <div className="singleRestaurantHeader">
                            {restaurant.name ?? 'Loading...'}
                        </div>
                        <div className="singleRestaurantDescription">
                            {restaurant.description ?? ''}
                        </div>
                        <div className="singleRestaurantRestaurant">
                            <div className="singleRestoDivided">
                            <div className="singleRestaurantRestaurantDescription">
                                About Restaurant
                            </div>
                            <div className="rightArrowResto">
                                <img src={rightArrow} alt=""/>
                            </div>
                            </div>
                            <div className="singleRestaurantRestaurantContent">
                                <div className="mobileImages">
                                    {restaurant.images.map((item,i) =>(
                                        <div key={i} className='imagesCarouselMobile'>
                                            <div className="singleMobileImage" style={{ backgroundImage: `url(${item})` }}>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="singleRestaurantLeft">
                                    <ReactSwipe
                                        key={restaurant.name}
                                        className="carousel"
                                        swipeOptions={{ continuous: false }}
                                        ref={el => (reactSwipeEl1 = el)}
                                    >
                                        {restaurant.images.map((image, index) => (
                                            <div key={index}>
                                                <div
                                                    className="singleRestaurantBlockImage"
                                                    style={{ backgroundImage: `url(${image})` }}
                                                ></div>
                                            </div>
                                        ))}
                                    </ReactSwipe>
                                    <div className="swipeButtons">
                                        <div className="singleRestaurantButtonLeft" onClick={contentPrevious1}>
                                            <img src={left} alt="" />
                                        </div>
                                        <div className="singleRestaurantButtonLeft" onClick={contentNext1}>
                                            <img src={right} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="singleRestaurantRight">
                                    <div className="fourThingsSection">
                                        <div className="singleSingleRestoSection">
                                            <div className="singleSingleRestoSectionImage">
                                                <img src={address} alt=""/>
                                            </div>
                                            <div className="singleSingleRestoSectionText">
                                                <div className="upperSingleText">
                                                    Address
                                                </div>
                                                <div className="lowerSingleText">
                                                    {restaurant.address ?? ''}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="singleSingleRestoSection">
                                            <div className="singleSingleRestoSectionImage">
                                                <img src={phone} alt=""/>
                                            </div>
                                            <div className="singleSingleRestoSectionText">
                                                <div className="upperSingleText">
                                                    Book a table
                                                </div>
                                                <div className="lowerSingleText">
                                                    {restaurant.phone ?? ''}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="singleSingleRestoSection">
                                            <div className="singleSingleRestoSectionImage">
                                                <img src={clock} alt=""/>
                                            </div>
                                            <div className="singleSingleRestoSectionText">
                                                <div className="upperSingleText">
                                                    Working time
                                                </div>
                                                <div className="lowerSingleText">
                                                    {/*todo: map new row after "," symbol*/}
                                                    {restaurant.workingTime ?? ''}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="singleSingleRestoSection">
                                            <div className="singleSingleRestoSectionImage">
                                                <img src={euro} alt=""/>
                                            </div>
                                            <div className="singleSingleRestoSectionText">
                                                <div className="upperSingleText">
                                                    Average Bill
                                                </div>
                                                <div className="lowerSingleText">
                                                    {restaurant.averageBill ?? ''}
                                                </div>
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
                    <Certificate></Certificate>
                    <Footer></Footer>
                </div>
            </div>
        </div>
        </>
    )

}
export default SingleRestaurant