import React, {useEffect, useState} from "react";
import PopupCertificate from "../popup-certificate/Popup-certificate";
import ReactSwipe from "react-swipe";
import PrivacyPolicy from "../privacy-policy/Privacy-policy";
import {CertificateBusinessForm, CertificatePersonalForm} from "./forms";

export const Certificate = ({reactSwipeEl}) => {
    const [selectedNominal, setSelectedNominal] = useState('€€');
    const [isActive, setIsActive] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const certificateBlock = document.getElementById("certificate");

    const handleClick = () => {
        if (reactSwipeEl.getPos() === 0) {
            console.log('jopa')
            certificateBlock?.classList?.add("certificateBusiness")
        } else if (reactSwipeEl.getPos() === 1) {
            certificateBlock?.classList?.remove("certificateBusiness")
        }
        setIsActive(current => !current);
    }

    const contentNext = () => {
        handleClick();
        reactSwipeEl.next()
    }

    const contentPrevious = () => {
        handleClick();
        reactSwipeEl.prev()
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    const togglePrivacy = () => {
        setIsPrivacyOpen(!isPrivacyOpen);
    }

    let newDate = new Date();
    let date = newDate.getDate() + 1 + '.';
    let month = newDate.getMonth() + 1 + '.';
    let year = newDate.getFullYear() + 1;

    return (
        <>
            <div className="certificate" id='certificate'>

                <div className="certificate_header">
                    <div className="from">
                        <div className={isActive ? 'company' : "client"} onClick={contentPrevious}>
                            Minu poolt
                        </div>
                        <div className={isActive ? 'client' : "company"} id="business" onClick={contentNext}>
                            Ettevõtte poolt
                        </div>
                    </div>
                    <div className="certificate_example" onClick={toggleModal}>
                        Sertifikaadi näide
                    </div>
                    <PopupCertificate isOpen={isModalOpen} toggleModal={toggleModal}/>
                </div>

                <div className="content">

                    <ReactSwipe
                        id="slider"
                        className="carousel"
                        swipeOptions={{
                            continuous: false,
                            disableScroll: true,
                            speed: 550,
                        }}
                        ref={el => {
                            reactSwipeEl = el
                        }}
                    >
                        <div>
                            <div className="explain">
                                Kirjutage õnnitlus ja märkige saaja aadress!
                            </div>
                            <div className="choose">
                                Valige sertifikaadi nominaal
                            </div>
                            <div className="main">
                                <div className="left">
                                    <CertificatePersonalForm
                                        selectedNominal={selectedNominal}
                                        setSelectedNominal={setSelectedNominal}
                                        togglePrivacy={togglePrivacy}/>
                                </div>
                                <div className="right">
                                    <div className="block">
                                        <div className="description">
                                            <div className="blockHeaderCertificateSide">
                                                kingitussertifikaat
                                            </div>
                                            <div className="blockNameCertificateSide">
                                                Eesti parimatesse restoranidesse
                                            </div>
                                            <div className="nominalAndDate">
                                                <div className="nominal_value">
                                                    Nominaal
                                                </div>
                                                <div className="date">
                                                    Kehtib kuni
                                                </div>
                                            </div>
                                            <div className="values">
                                                <div className="validDate">
                                                    {date}{month}{year}
                                                </div>
                                                <div className="nominalValue" id='1'>
                                                    {selectedNominal + '€'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="explainForCompany">
                                Tänage oma töötajaid kinkekaartide ja unustamatu elamusega!
                            </div>
                            <div className="main">
                                <div className="left">
                                    <CertificateBusinessForm togglePrivacy={togglePrivacy}/>
                                </div>
                                <div className="right">
                                    <div className="block" style={{height: 410}}>
                                        <div className="description" style={{padding: 0}}>
                                            <div className="blockHeaderCertificateSide">
                                                kingitussertifikaat
                                            </div>
                                            <div className="blockNameCertificateSide">
                                                Eesti parimatesse restoranidesse
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </ReactSwipe>
                </div>
            </div>
            <PrivacyPolicy isOpen={isPrivacyOpen} toggleModal={togglePrivacy}/>
        </>
    )

}
export default Certificate
