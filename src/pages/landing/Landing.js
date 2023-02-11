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
import {LimitedTextArea} from "../../ui-components/limited-text-area/LimitedTextArea";

export default function Landing() {
    const navigate = useNavigate();
    let reactSwipeEl;
    let reactSwipeEl2;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isBurger, setIsBurger] = useState(false);

    const burgerToggle = () => {
        setIsBurger(current => !current);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    const handleClick123 = event => {
        if (event.target.className === 'burx_img'){
            setIsBurger(true)
        }
        else {
            setIsBurger(false)
        }
    }


    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);

    const [isFaq, setIsFaq] = useState(false);

    const scrollToCertificate = () =>{
        document.getElementById('certificate').scrollIntoView({behavior: "smooth", block: "start"});
    }

    const scrollToFaq = () =>{
        document.getElementById('faq').scrollIntoView({behavior: "smooth", block: "start"});
    }
    const handleClick = () => {
        setIsActive(current => !current);
    }

    function contentNext (){
        handleClick();
        reactSwipeEl.next()
    }
    function contentPrevious (){
        handleClick();
        reactSwipeEl.prev()
    }

    function contentNext1 (){
        handleClick1();
        reactSwipeEl2.next()
    }

    function contentPrevious1 (){
        handleClick1();
        reactSwipeEl2.prev()
    }

    const handleClick1 = () => {
        setIsActive1(current => !current);
        setIsFaq(current => !current);
    }

    function Select({ user, click, status }) {
        return (
            <li className={status ? "active" : 'nominal'} onClick={click}>
                {user}{" "}
            </li>
        );
    }
    const nominals = ["50€", "100€", "200€", "500€"];

    const [select, setSelect] = useState(false);

    const handleSelect = key => {
        setSelect(key)
        const global = nominals[key]
        const element = document.getElementById('1')
        element.innerHTML = global

    };


    const [isOpen, setIsOpen] = useState(false);

    let newDate = new Date();
    let date = newDate.getDate() + 1 + '.';
    let month = newDate.getMonth() + 1 + '.';
    let year = newDate.getFullYear() + 1;

    const images = [

        {
            src: l1,
            text: 'R14'
        },

        {
            src: l2,
            text: 'Om.House'
        },

        {
            src: l3,
            text: 'Bruxx'
        }

    ]

    const [faq, setFAQ] = React.useState([
        {
            question: 'How long does the certificate lasts?',
            answer: 'Certificate lasts for one years after the purchase, it can always be checked on the certificate',
            open: false
        },
        {
            question: 'Can i make my own budget for certificate?',
            answer: 'With any of your own preferences we are waiting for your email, after what we can provide the best solution',
            open: false
        },
        {
            question: 'How can i check the balance?',
            answer: 'Balance can be checked via the link on your email, with the name ' +
                'Check the balance ->',
            open: false
        },
        {
            question: 'Can i buy a few certificates for my company?',
            answer: 'Of course, by leaving the order we will be able to contact you and make everything you wanted within 2-3 days!',
            open: false
        },
        {
            question: 'How does thw certificate looks like?',
            answer: <div>You can check by clicking on this link <a className='blue' onClick={toggleModal}>Certificate.pdf</a></div>,
            open: false
        }
    ]);

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

    const toggleFAQ = index => {
        setFAQ(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }
            return item;
        }));
    }
    return (
        <div className='bg' onClick={handleClick123}>
            <div className="realBg">
                <div className='container'>
                    <div className="preview">
                        <div className="header">
                            <div className="burger">
                                <img src={burx} className='burx_img'></img>
                            </div>
                            <div className="logo">
                                MENU
                            </div>
                            <div className="share">
                                <div className="share_text">
                                    Share
                                </div>
                                <img src={share} className='share_img'></img>
                            </div>
                        </div>
                        <div className={isBurger ? 'burger_cont1' : 'burger_cont'}>
                            <div className="closeBurger">
                                CLOSE
                            </div>
                            <div className="next">
                                Join us
                            </div>
                            <div className="next" onClick={scrollToCertificate}>
                                Certificate
                            </div>
                            <div className="next">
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
                                    Give the best experience to those you love: the perfect gift for friends and loved ones for the New Year.
                                </div>
                            </div>
                            <div className="single_section">
                                <div className="section_icon">
                                    <img src={card} className='section_ion_img'></img>
                                </div>
                                <div className="section_text">
                                    Easy to give: buy online and email the recipient with personalized wishes.
                                </div>
                            </div>
                            <div className="single_section">
                                <div className="section_icon">
                                    <img src={meal} className='section_ion_img'></img>
                                </div>
                                <div className="section_text">
                                    Convenient to use: just give the certificate number to pay the bill in the restaurant.
                                </div>
                            </div>
                            <div className="single_section">
                                <div className="section_icon">
                                    <img src={waiter} className='section_ion_img'></img>
                                </div>
                                <div className="section_text">
                                    More than 100 restaurants, cafes and bars in Tallinn. We add new ones every week.
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
                    <div className="certificate" id='certificate'>
                        <div className="certificate_header">
                            <div className="from">
                                <div className={isActive ? 'company' : "client"} onClick={contentPrevious}>
                                    From me
                                </div>
                                <div className={isActive ? 'client' : "company"} onClick={contentNext}>
                                    From Company
                                </div>
                            </div>
                            <div className="certificate_example" onClick={toggleModal}>
                                Example of certificate
                            </div>
                            <PopupCertificate isOpen={isModalOpen} toggleModal={toggleModal} />
                        </div>
                        <div className="content">
                            <div>
                                <ReactSwipe
                                    className="carousel"
                                    swipeOptions={{ continuous: true }}
                                    ref={el => (reactSwipeEl = el)}
                                >
                                    <div><div className="explain">
                                        Write a congratulation and indicate the address of the recipient!
                                    </div>
                                        <div className="choose">
                                            Choose your own nominal
                                        </div>
                                        <div className="main">
                                            <div className="left">
                                                <div className="knopki">
                                                    {nominals.map((name, key) => (
                                                        <Select
                                                            key={key}
                                                            status={select === key}
                                                            click={() => handleSelect(key)}
                                                            user={name}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="form">
                                                    <div className="from_who">
                                                        <input type='text' placeholder='From...' className='certificateInputValue'></input>
                                                    </div>
                                                    <div className="from_who">
                                                        <input type='text' placeholder='To...' className='certificateInputValue'></input>
                                                    </div>
                                                    <div className="from_who">
                                                        <input type='email' placeholder='Recipients e-mail...' className='certificateInputValue'></input>
                                                    </div>
                                                    <div className="from_who">
                                                        <input type='tel' placeholder='Recipients phone number...' className='certificateInputValue'></input>
                                                    </div>
                                                    <div className="from_who">
                                                        <LimitedTextArea limit={280} value='' />
                                                    </div>
                                                </div>
                                                <div className="pay">
                                                    Pay
                                                </div>
                                                <div className="confirm">
                                                    I agree with the <span className="no">Terms of personal data processing</span>.
                                                </div>

                                            </div>
                                            <div className="right">
                                                <div className="block">
                                                    <div className="description">
                                                        <div className="blockHeader1">
                                                            gift certificate
                                                        </div>
                                                        <div className="blockName1">
                                                            To the best restaurants in Tallinn
                                                        </div>
                                                        <div className="nominalAndDate">
                                                            <div className="nominal_value">
                                                                Nominal
                                                            </div>
                                                            <div className="date">
                                                                Valid until
                                                            </div>
                                                        </div>
                                                        <div className="values1">
                                                            <div className="nominalValue" id='1'>
                                                                {}
                                                            </div>
                                                            <div className="validDate">
                                                                {date}{month}{year}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div>
                                    <div><div className="explain3">
                                        Thank your employees with gift certificates and an unforgettable experience!
                                    </div>
                                        <div className="main1">
                                            <div className="left">
                                                <div className="form">
                                                    <div className="from_who">
                                                        <input type='text' placeholder='Name' className='certificateInputValue1'/>
                                                    </div>
                                                    <div className="from_who">
                                                        <input type='text' placeholder='Company name' className='certificateInputValue1'/>
                                                    </div>
                                                    <div className="from_who">
                                                        <input type='email' placeholder='Company e-mail' className='certificateInputValue1'/>
                                                    </div>
                                                    <div className="from_who">
                                                        <input type='tel' placeholder='Phone number' className='certificateInputValue1'/>
                                                    </div>
                                                    <div className="from_who">
                                                        <LimitedTextArea limit={280} value='' />
                                                    </div>
                                                </div>
                                                <div className="pay">
                                                    Order
                                                </div>
                                                <div className="confirm">
                                                    I agree with the <span className="termsLink">Terms of personal data processing</span>.
                                                </div>

                                            </div>
                                            <div className="right">
                                                <div className="block">
                                                    <div className="description">
                                                        <div className="blockHeader1">
                                                            gift certificate
                                                        </div>
                                                        <div className="blockName1">
                                                            To the best restaurants in Tallinn
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div>
                                </ReactSwipe>
                            </div>
                        </div>
                    </div>


                    <div className="infiniteCarousel">
                        <div className="carouselHeader">
                            Connected restaurants
                        </div>
                        <div className="carouselDescription">
                            Certificate gives an opportunity to visit the most popular and breathtaking restaurants of Tallinn
                        </div>
                        <div className="carouselMain">
                            <ImageCarousel images={images} interval={2000}></ImageCarousel>
                            <ImageCarousel images={images} interval={2000}></ImageCarousel>
                            <ImageCarousel images={images} interval={2000}></ImageCarousel>
                        </div>
                        <div className="allRestaurants">
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

                    <div className="explain1">
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
                            <div className="singleExplain1">
                                <div className="number">
                                    05
                                </div>
                                <div className="explainDescription">
                                    The recipient visits one or several restaurants - and rejoices your gift.
                                </div>
                            </div>
                            <div className="singleExplain2">
                                <div className="explainButtons">
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


                    <div className="faq1" id='faq'>
                        <div className="faqHeader">
                            <div className="from">
                                <div className={isActive1 ? 'company' : "client"} onClick={contentPrevious1}>
                                    Answers to the questions
                                </div>
                                <div className={isActive1 ? 'client' : "company"} onClick={contentNext1}>
                                    Ask a question
                                </div>
                            </div>
                        </div>
                        <div className="content">

                            <div>
                                <ReactSwipe
                                    className="carousel"
                                    swipeOptions={{ continuous: true }}
                                    ref={el => (reactSwipeEl2 = el)}
                                >
                                    <div><div className="faq">
                                        {/* Map over the FAQ items and render them */}
                                        {faq.map((item, index) => (
                                            <div key={index} className="faq-item">
                                                <button type="button" className={item.open ? 'open' : ''} onClick={() => toggleFAQ(index)}>
                                                    {item.question}
                                                    <span className="toggle-icon">
              {item.open ? '-' : '+'}
            </span>
                                                </button>
                                                {item.open && <p>{item.answer}</p>}
                                            </div>
                                        ))}
                                    </div></div>
                                    <div>
                                        <div className="infoAsk">
                                        <div className="askInfo1">
                                        If you have any questions which were not answered yet you can always contact us!
                                    </div>
                                        <div className="askInfo">
                                            ooonaebsiki@gollandskishturval.ee
                                        </div>
                                        <div className="askInfo">
                                            +372 5887 8456
                                        </div>
                                        <div className="askInfo">
                                            Kikri 2/1 Monday-Sunday 24/7
                                        </div>
                                        </div></div>

                                </ReactSwipe>

                            </div>

                        </div>

                    </div>

                    <div className="who">
                        <div className="leftWho">
                            <div className="company1">
                                MustVorst OÜ
                            </div>
                            <div className="company1">
                                Kiirki 2/3
                            </div>
                            <div className="company1">
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
    )
}