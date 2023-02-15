import React, {useState} from "react";
import './Qrcode.css'
import logoout from '../../assets/img/logout.svg'
import camera from '../../assets/img/Camera.png'
import code from '../../assets/img/code.png'
import qr from '../../assets/img/qrcode.png'
import {useNavigate} from "react-router-dom";
import {QrScanner} from '@yudiel/react-qr-scanner';

export const Qrcode = () => {


    return (
        <>
            <div className="qrcodeContent">
                <div className="qrcodeContentHeader">
                    <div className="qrcodeLogoutButton">
                        <img src={logoout} alt=""/>
                    </div>
                    <div className="qrcodeLogoutText">
                        Log out
                    </div>
                </div>
                <div className="qrcodeMain">
                    <div className="qcodeMainContent">
                        <div className="qrcodeMainHeader">
                            Scan QR Code
                        </div>
                        <div className="qrcodeMainHeaderImage">
                            <img src={camera} alt=""/>
                        </div>
                        <div className="qrcodeMainText">
                            Please scan point camera on
                            QR code from the certificate
                        </div>
                        <div className="qrcodeImage">
                            <img src={code} alt=""/>
                            <div className="line">
                            </div>
                        </div>
                        <div className="qrcodeScanButton">
                            <img src={qr} alt="" className='qrcodeScanButtonImage'/>
                            <div className="qrcodeScanButtonText">
                                Scan QR Code
                            </div>
                        </div>
                        <QrScanner
                            onDecode={(result) => console.log(result)}
                            onError={(error) => console.log(error?.message)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Qrcode