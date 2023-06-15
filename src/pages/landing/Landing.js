import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import './Landing.css';
import ImageCarousel from "../../ui-components/carousel/Carousel";
import card from '../../assets/img/Gift Card.svg';
import heart from '../../assets/img/Heart.svg';
import meal from '../../assets/img/Meal.svg';
import waiter from '../../assets/img/Waiter.svg';
import l1 from '../../assets/img/l1.png';
import l2 from '../../assets/img/l2.png';
import l3 from '../../assets/img/l3.png';
import {table} from '../single-restaraunt/data'
import Certificate from "../../ui-components/certificate/Certificate";
import Footer from "../../ui-components/footer/Footer";
import Explanation from "../../ui-components/explanation/Explanation";
import Faq from "../../ui-components/faq/Faq";
import PrivacyPolicy from "../../ui-components/privacy-policy/Privacy-policy";
import {Header} from "../../ui-components/header/Header";
import {scrollTop} from "../business-coupon-order/tools";

export default function Landing() {
    const navigate = useNavigate();
    let reactSwipeEl;

    const [isBurger, setIsBurger] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const scrollToCertificate = (index) => {
        document.getElementById('certificate').scrollIntoView({behavior: "smooth", block: "start"});
    }

    const scrollToFaq = () => {
        document.getElementById('faq').scrollIntoView({behavior: "smooth", block: "start"});
    }


    const advantages = [
        {
            img: l1,
            header: 'Unique experience',
            description: 'Kingitus, mida ei ole tehtud enne teid - saaja on kindlasti rõõmus.'

        },
        {
            img: l2,
            header: 'Mis tahes puhkus',
            description: 'Sünnipäeva, pulmade või isegi äripartneri eduka tehingu sõlmimise puhul.'

        },
        {
            img: l3,
            header: 'Korduvkasutatav sertifikaat',
            description: 'Sertifikaadi omanik saab sama sertifikaati kasutada mitu korda.'

        },
    ]

    const handleClickMenu = event => {
        if (event.target.className === 'burx_img' && !isBurger) {
            setIsBurger(true)
        } else {
            setIsBurger(false)
        }
    }

    return (
        <div className='bg' onClick={handleClickMenu}>
            <div className="realBg">
                <div className='container'>
                    <div className="preview">
                        <Header/>
                        <div className={isBurger ? 'burger_opened' : 'burger_closed'}>
                            <div className="next" onClick={scrollToCertificate}>
                                Sertifikaat
                            </div>
                            <div className="next" onClick={scrollToFaq}>
                                Võtke meiega ühendust
                            </div>
                            <div className='next' onClick={toggleModal}>
                                Privaatsuspoliitika
                            </div>
                        </div>
                        <PrivacyPolicy isOpen={isModalOpen} toggleModal={toggleModal}/>
                        <div className="salutation-wrapper">
                            <div className="salutation">
                                KINGITUS SERTIFIKAAT PARIMATESSE RESTORANIDESSE EESTIS
                            </div>
                        </div>
                        <div className="four_section">
                            <div className="single_section">
                                <div className="section_icon">
                                    <img src={heart} className='section_ion_img'/>
                                </div>
                                <div className="section_text">
                                    <span className='dashed'>Kingi parim: </span>kogemus neile, keda armastad:
                                    ideaalne kingitus sõpradele ja lähedastele uueks aastaks.
                                </div>
                            </div>
                            <div className="single_section">
                                <div className="section_icon">
                                    <img src={card} className='section_ion_img'/>
                                </div>
                                <div className="section_text">
                                    <span className='dashed'>Lihtne kinkida: </span>
                                    ostke veebist ja saatke saajale e-posti teel isiklikud soovid.
                                </div>
                            </div>
                            <div className="single_section">
                                <div className="section_icon">
                                    <img src={meal} className='section_ion_img'/>
                                </div>
                                <div className="section_text">

                                    <span className='dashed'>Mugav kasutada: </span>
                                    anna lihtsalt QR-kood sertifikaadilt, et maksta restoranis arve.
                                </div>
                            </div>
                            <div className="single_section">
                                <div className="section_icon">
                                    <img src={waiter} className='section_ion_img'/>
                                </div>
                                <div className="section_text">

                                    <span className='dashed'>Rohkem kui 100 restorani</span>
                                    , kohvikut ja baari Tallinnas. Lisame iga nädal uusi.
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                            <div className="present" onClick={() => scrollToCertificate()}>
                      Tee kingitus
                            </div>
                            <div className="business" onClick={() => scrollToCertificate(1)}>
                                Ettevõttele
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="unrealBg">
                <div className="container">

                    <Certificate/>

                    <div className="infiniteCarousel">
                        <div className="carouselHeader">
                            Ühendatud restoranid
                        </div>
                        <div className="carouselDescription">
                            Sertifikaat annab võimaluse külastada Eesti populaarseimaid ja hingematvaimaid restorane
                        </div>
                        <div className="carouselMain">
                            <ImageCarousel images={table} interval={4000}/>
                            <ImageCarousel images={table} interval={4000}/>
                            <ImageCarousel images={table} interval={4000}/>
                        </div>
                        <div className="present allRestaurantsMobile">
                            Kõik Restoranid
                        </div>
                    </div>

                    <div className="advantages">
                        <div className="advantagesHeader">
                            Meie eeliseid
                        </div>
                        <div className="advantagesMain">
                            {advantages.map((item, i) => (
                                <div className="singleAdvantage">
                                    <div className="advantageImg"
                                         style={{backgroundImage: `linear-gradient(to bottom,rgba(245, 246, 252, 0),rgba(27, 36, 105, 1)90%),url(${item.img})`}}
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

                    <Explanation/>
                    <Faq/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
