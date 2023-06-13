import React, {useState} from "react";
import PopupCertificate from "../popup-certificate/Popup-certificate";
import ReactSwipe from "react-swipe";
import PrivacyPolicy from "../privacy-policy/Privacy-policy";
import {CertificateBusinessForm, CertificatePersonalForm} from "./forms";


export const Certificate = () => {
    const [selectedNominal, setSelectedNominal] = useState('€€');
    const [isActive, setIsActive] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    let reactSwipeEl;

    const handleClick = () => {
        console.log(isActive)
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
                            From me
                        </div>
                        <div className={isActive ? 'client' : "company"} onClick={contentNext}>
                            From Company
                        </div>
                    </div>
                    <div className="certificate_example" onClick={toggleModal}>
                        Example of certificate
                    </div>
                    <PopupCertificate isOpen={isModalOpen} toggleModal={toggleModal}/>
                </div>

                <div className="content">

                    <ReactSwipe
                        className="carousel"
                        swipeOptions={{continuous: false, disableScroll: true, speed: 550}}
                        ref={el => (reactSwipeEl = el)}
                    >
                        <div>
                            <div className="explain">
                                Write a congratulation and indicate the address of the recipient!
                            </div>
                            <div className="choose">
                                Choose your own nominal
                            </div>
                            <div className="main">
                                <div className="left">
                                    <CertificatePersonalForm
                                        selectedNominal={selectedNominal}
                                        setSelectedNominal={setSelectedNominal}
                                        togglePrivacy={togglePrivacy} />
                                </div>
                                <div className="right">
                                    <div className="block">
                                        <div className="description">
                                            <div className="blockHeaderCertificateSide">
                                                gift certificate
                                            </div>
                                            <div className="blockNameCertificateSide">
                                                To the best restaurants in Estonia
                                            </div>
                                            <div className="nominalAndDate">
                                                <div className="nominal_value">
                                                    Nominal
                                                </div>
                                                <div className="date">
                                                    Valid until
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
                                Thank your employees with gift certificates and an unforgettable experience!
                            </div>
                            <div className="main">
                                <div className="left">
                                    <CertificateBusinessForm togglePrivacy={togglePrivacy}/>
                                </div>
                                <div className="right">
                                    <div className="block">
                                        <div className="description">
                                            <div className="blockHeaderCertificateSide">
                                                gift certificate
                                            </div>
                                            <div className="blockNameCertificateSide">
                                                To the best restaurants in Tallinn
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
