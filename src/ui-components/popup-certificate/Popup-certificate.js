import React, {useEffect} from 'react';
import './Popup-certificate.css'
import cross from '../../assets/img/cross.png'
import qrcodeImg from '../../assets/img/qrCodeCertificate.png'
import qrcode from "../../assets/img/qrCodeCertificate.png";
import certificate from '../../assets/img/certificate/certificate-example.svg'

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
                        <div>
                            <div className="certificatePdf">
                                <img src={cross} style={{float: 'right'}} className='crossClose' onClick={toggleModal}/>
                                <div className="certificateExample">
                                    <img height={500} src={certificate} className='certificateImageExample'/>
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

