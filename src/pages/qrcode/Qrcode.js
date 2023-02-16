import React, {useEffect, useState} from "react";
import './Qrcode.css'
import logoout from '../../assets/img/logout.svg'
import camera from '../../assets/img/Camera.png'
import code from '../../assets/img/code.png'
import qr from '../../assets/img/qrcode.png'
import {useNavigate} from "react-router-dom";
import { Spin } from "antd";
import {QrScanner} from '@yudiel/react-qr-scanner';

export const Qrcode = () => {

    const [choose, setChoose] = useState('false');
    const navigate = useNavigate();
    const [scanned, setScanned] = useState(false);

    const handleScan = (data) => {
        if (data && !scanned) {
            setScanned(true);
        }
    };

    useEffect(() => {
        if (scanned) {
            setTimeout(() => {
                navigate("/success");
            }, 2000);
        }
    }, [scanned, navigate]);

    const handleError = (error) => {
        console.error(error);
    };

    const toggleCamera = () => {
        setChoose(current => !current)
    }
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
                        <div className="qrcodeScanner">

                        <div className={choose ? "qrcodeImage" : 'none'}>
                            <img src={code} alt=""/>
                            <div className="line">
                            </div>
                        </div>
                            <div className={ choose ? 'none' : "qrcodeScannerCamera"}>
                                {!choose && !scanned && (<QrScanner
                                    delay={300}
                                    onError={handleError}
                                    onDecode={handleScan}
                                    style={{ width: "100%" }}
                                    stopStream={scanned}
                                />)}
                                {scanned && (<div
                                    className='centerForSpin'
                                >
                                    <Spin size="large" tip="Processing QR code..." />
                                </div>)}
                            </div>
                        </div>
                        <div className={choose ? "qrcodeScanButton" : 'none'} onClick={toggleCamera}>
                            <img src={qr} alt="" className='qrcodeScanButtonImage'/>
                            <div className="qrcodeScanButtonText" id='qrButton'>
                                Scan QR Code
                            </div>
                        </div>
                        <div className={ choose ? 'none' : "qrcodeScanButton"} onClick={toggleCamera}>
                            <div className="qrcodeScanButtonText" id='qrButton'>
                                Get back
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Qrcode