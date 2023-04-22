import React, { useEffect } from 'react';
import './Popup-certificate.css'
import cross from '../../assets/img/cross.png'
import qrcodeImg from '../../assets/img/qrCodeCertificate.png'

function PopupCertificate({isOpen, toggleModal}) {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-contentCertificate">
                        <img src={cross} style={{float : 'right'}} className='crossClose' onClick={toggleModal}/>
                        <div>
                            <div className="certificatePopup">
                                <div className="leftCertificatePopup">
                                    <div className="leftCertificatePopupHeader">
                                        M E N U
                                    </div>
                                    <div className="questionAnswerCertificate">
                                        <div className="questionCertificate">
                                            From who
                                        </div>
                                        <div className="answerCertificate">
                                            Best colleges
                                        </div>
                                    </div>
                                    <div className="questionAnswerCertificate">
                                        <div className="questionCertificate">
                                            To
                                        </div>
                                        <div className="answerCertificate">
                                            Mr. Great Taste
                                        </div>
                                    </div>
                                    <div className="questionAnswerCertificate">
                                        <div className="questionCertificate">
                                            Wishes
                                        </div>
                                        <div className="answerCertificate">
                                            I hope this present will find you well, best luck and enjoy your dinner!
                                        </div>
                                    </div>
                                    <div className="questionAnswerCertificate">
                                        <div className="questionCertificate">
                                            Scan it!
                                        </div>
                                        <div className="qrCodeCertificate">
                                            <img src={qrcodeImg} alt="" className='qrCodeCertificateImage'/>
                                        </div>
                                    </div>
                                    <div className="furtherInfo">
                                        Further info can be found on <a className='blueLink'>maitsetuur.ee</a>
                                    </div>
                                </div>
                                <div className="rightCertificatePopup">
                                    <div className="shadow">
                                    <div className="certificateImageBlock">
                                        <div className="descriptionCertificatePopup">
                                            <div className="blockHeaderCertificatePopup">
                                                gift certificate
                                            </div>
                                            <div className="blockNameCertificatePopup">
                                                To the best restaurants in Tallinn
                                            </div>
                                            <div className="nominalAndDateCertificatePopup">
                                                <div className="nominal_valueCertificatePopup">
                                                    Nominal
                                                </div>
                                                <div className="dateCertificatePopup">
                                                    Valid until
                                                </div>
                                            </div>
                                            <div className="valuesCertificatePopup">
                                                <div className="nominalValueCertificatePopup">
                                                    100$
                                                </div>
                                                <div className="validDateCertificatePopup">
                                                    01.02.2024
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
            )}
        </>
    );
}

export default PopupCertificate;

