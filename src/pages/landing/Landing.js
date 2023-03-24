import './Landing.css';
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ImageCarousel from "../../ui-components/carousel/Carousel";
import burx from '../../assets/img/burx.svg'
import share from '../../assets/img/share.svg';
import card from '../../assets/img/Gift Card.svg';
import heart from '../../assets/img/Heart.svg';
import meal from '../../assets/img/Meal.svg';
import waiter from '../../assets/img/Waiter.svg';
import l1 from '../../assets/img/l1.png';
import l2 from '../../assets/img/l2.png';
import l3 from '../../assets/img/l3.png';
import {click} from "@testing-library/user-event/dist/click";
import PopupCertificate from "../../ui-components/popup-certificate/Popup-certificate";
import ReactSwipe from 'react-swipe';
import {LimitedTextAreaLanding} from "../../ui-components/limited-text-area-landing/LimitedTextAreaLanding";
import cross from '../../assets/img/cross.png'
import {table} from '../single-restaraunt/data'
import Certificate from "../../ui-components/certificate/Certificate";
import Footer from "../../ui-components/footer/Footer";
import Explanation from "../../ui-components/explanation/Explanation";
import Faq from "../../ui-components/faq/Faq";

export default function Landing() {
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

    const scrollToCertificate = () =>{
        document.getElementById('certificate').scrollIntoView({behavior: "smooth", block: "start"});
    }

    const scrollToFaq = () =>{
        document.getElementById('faq').scrollIntoView({behavior: "smooth", block: "start"});
    }


    const advantages = [
        {
           img: l1,
           header: 'Jopka Jopka',
           description: 'The recipient is definitely freaking out'

        },
        {
            img: l2,
            header: 'Any holiday',
            description: 'On any holiday dad will again grapple with grandfather drunk'

        },
        {
            img: l3,
            header: 'Little Choose',
            description: 'Restaurants in Estonia can be counted on one hand'

        },
    ]

    return (
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
                            <div className="next" onClick={() => navigate('/connect')}>
                                Join us
                            </div>
                            <div className="next" onClick={scrollToCertificate}>
                                Certificate
                            </div>
                            <div className="next" onClick={() => navigate('/allrestaurants')}>
                                All the restaraunts
                            </div>
                            <div className="next" onClick={scrollToFaq}>
                                Contact us
                            </div>
                        </div>
                        <div className="salutation">
                            Gift Certificate to the
                        </div>
                        <div className="salutation">
                            best restaurants in Estonia
                        </div>
                        <div className="four_section">
                            <div className="single_section">
                                <div className="section_icon">
                                    <img src={heart} className='section_ion_img'></img>
                                </div>
                                <div className="section_text">
                                    <span className='dashed'>Give the best</span> experience to those you love: the perfect gift for friends and loved ones for the New Year.
                                </div>
                            </div>
                            <div className="single_section">
                                <div className="section_icon">
                                    <img src={card} className='section_ion_img'></img>
                                </div>
                                <div className="section_text">
                                    <span className='dashed'>Easy to give: </span> buy online and email the recipient with personalized wishes.
                                </div>
                            </div>
                            <div className="single_section">
                                <div className="section_icon">
                                    <img src={meal} className='section_ion_img'></img>
                                </div>
                                <div className="section_text">
                                    <span className='dashed'>Convenient to use: </span> just give the certificate number to pay the bill in the restaurant.
                                </div>
                            </div>
                            <div className="single_section">
                                <div className="section_icon">
                                    <img src={waiter} className='section_ion_img'></img>
                                </div>
                                <div className="section_text">
                                    <span className='dashed'>More than 100 restaurants </span>, cafes and bars in Tallinn. We add new ones every week.
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                            <div className="present" onClick={scrollToCertificate}>
                                Make a gift
                            </div>
                            <div className="business" onClick={scrollToCertificate}>
                                For business
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="unrealBg">
                <div className="container">
                    <Certificate></Certificate>
                    <div className="infiniteCarousel">
                        <div className="carouselHeader">
                            Connected restaurants
                        </div>
                        <div className="carouselDescription">
                            Certificate gives an opportunity to visit the most popular and breathtaking restaurants of Tallinn
                        </div>
                        <div className="carouselMain">
                            <ImageCarousel images={table} interval={2000}></ImageCarousel>
                            <ImageCarousel images={table} interval={2000}></ImageCarousel>
                            <ImageCarousel images={table} interval={2000}></ImageCarousel>
                        </div>
                        <div className="allRestaurants" onClick={() => {navigate('/allrestaurants');
                            window.scrollTo(0, 0);
                        }}>
                            Whole restaurants list
                        </div>
                    </div>

                    <div className="advantages">
                        <div className="advantagesHeader">
                            Our advantages
                        </div>
                        <div className="advantagesMain">
                            {advantages.map((item,i) => (
                                <div className="singleAdvantage">
                                    <div className="advantageImg"
                                         style={{ backgroundImage: `linear-gradient(to bottom,rgba(245, 246, 252, 0),rgba(27, 36, 105, 1)90%),url(${item.img})`}}
                                    >
                                    </div>
                                    <div className="advantageDescription">
                                        <div className="advHeader">
                                            {item.header}
                                        </div>
                                        <div className="advDescription">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Explanation></Explanation>
                    <Faq></Faq>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}