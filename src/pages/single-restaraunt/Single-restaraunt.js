import React, {useState} from "react";
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

export const SingleRestaraunt = () => {
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

    const handleClick = () => {
        setIsActive(current => !current);
    }
    const scrollToExplain = () =>{
        document.getElementById('explain').scrollIntoView({behavior: "smooth", block: "start"});
    }

    const scrollToCertificate = () =>{
        document.getElementById('certificate').scrollIntoView({behavior: "smooth", block: "start"});
    }

    let reactSwipeEl;
    let reactSwipeEl1
    function contentNext (){
        handleClick()
        reactSwipeEl.next()
    }
    function contentPrevious (){
        handleClick()
        reactSwipeEl.prev()
    }
    function contentNext1 (){
        reactSwipeEl1.next()
    }
    function contentPrevious1 (){
        reactSwipeEl1.prev()
    }

    const LimitedTextarea = ({ rows, cols, value, limit }) => {
        const [content, setContent] = React.useState(value.slice(0, limit));

        const setFormattedContent = React.useCallback(
            text => {
                setContent(text.slice(0, limit));
            },
            [limit, setContent]
        );

        return (
            <>
      <textarea
          className='congrats'
          placeholder='Congratulations text...'
          rows={rows}
          cols={cols}
          onChange={event => setFormattedContent(event.target.value)}
          value={content}
      />
                <div className='wordCount'>
                    {content.length}/{limit}
                </div>
            </>
        );
    };
    let newDate = new Date();
    let date = newDate.getDate() + 1 + '.';
    let month = newDate.getMonth() + 1 + '.';
    let year = newDate.getFullYear() + 1;

    const nominals = ["50€", "100€", "200€", "500€"];

    const [select, setSelect] = useState(false);

    const handleSelect = key => {
        setSelect(key)
        const global = nominals[key]
        const element = document.getElementById('1')
        element.innerHTML = global

    };
    function Select({ user, click, status }) {
        return (
            <li className={status ? "active" : 'nominal'} onClick={click}>
                {user}{" "}
            </li>
        );
    }

    const [isActive, setIsActive] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const images = [
        resto,
        resto,
        resto
    ]


    return(
        <><div className='bg' onClick={handleClick123}>
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
                            <div className="next" onClick={() => navigate('/connect')}>
                                Join us
                            </div>
                            <div className="next" onClick={scrollToCertificate}>
                                Certificate
                            </div>
                            <div className="next" onClick={() => navigate('/allrestaraunts')}>
                                All the restaraunts
                            </div>
                            <div className="next" onClick={scrollToExplain}>
                                How does it work
                            </div>
                        </div>
                        <div className="singleRestaurantHeader">
                            R14 Wine Restaurant
                        </div>
                        <div className="singleRestaurantDescription">
                            R14 WINE RESTAURANT is a fancy place where you can spend your time with family or your friends!
                            It has very big selection of wines combined with delicious food! It also has Michelin guide recommendation!
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
                                    {images.map((item,i) =>(
                                        <div key={i} className='imagesCarouselMobile'>
                                            <div className="singleMobileImage" style={{ backgroundImage: `url(${item})` }}>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="singleRestaurantLeft">

                                    <ReactSwipe
                                        className="carousel"
                                        swipeOptions={{ continuous: false }}
                                        ref={el => (reactSwipeEl1 = el)}
                                    >
                                        <div>
                                            <div className="singleRestaurantBlockImage">

                                            </div>
                                        </div>
                                        <div>
                                            <div className="singleRestaurantBlockImage">

                                            </div>
                                        </div>
                                        <div>
                                            <div className="singleRestaurantBlockImage">

                                            </div>
                                        </div>
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
                                                    Rottermani 14, 13528
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
                                                    +372 53482050
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
                                                    M-S 12:00 - 24:00
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
                                                    50-60 euros
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
                    <div className="explain1" id='explain'>
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
                                    swipeOptions={{ continuous: false, disableScroll: true }}
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
                                                    <div className="text">
                                                        <LimitedTextarea limit={280} value='' />
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
                                                    <div className="text">
                                                        <LimitedTextarea limit={280} value='' />
                                                    </div>
                                                </div>
                                                <div className="pay">
                                                    Order
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
                                                    </div>
                                                </div>
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
        </>
    )

}
export default SingleRestaraunt