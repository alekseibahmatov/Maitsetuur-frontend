import React, {useState} from "react";
import './Qrcode.css'
import logoout from '../../assets/img/logout.svg'
import camera from '../../assets/img/Camera.png'
import code from '../../assets/img/code.png'
import qr from '../../assets/img/qrcode.png'
import {useNavigate} from "react-router-dom";
import {QrScanner} from '@yudiel/react-qr-scanner';
import {
    LoadingAnimationCircular
} from "../../ui-components/loading-animation/loading-animaiton-circular/LoadingAnimationCircular";
import toast from "react-hot-toast";
import Qrcodesuccess from "../qrcodesuccess/Qrcodesuccess";

export const Qrcode = () => {
    const navigate = useNavigate();
    const [showCamera, setShowCamera] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [scanned, setScanned] = useState(false);
    const [data, setData] = useState({});

    // const expected = {
    //     name: 'vasja',
    //     remainingValue: '10',
    //     certificate_id: '2a7566b2-afa7-41c8-97ee-601ff822e6b5'
    // };

    const handleScan = (data) => {
        console.log('scanned')
        setScanned(true);
        setTimeout(() => {
            if (data !== {}) {
                try {
                    setData(JSON.parse(data))
                    toast.success('QR Code Successfully Scanned')
                    setShowForm(true)
                } catch {
                    toast.error('Try another QR code')
                }
            }
            setShowCamera(false);
            setScanned(false);
        }, 2000);
    };

    const toggleCamera = () => {
        console.log('pizda')
        setShowCamera(!showCamera)
    }

    return (
        <>


            {!showForm ?
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


                                {showCamera ?

                                    <div className="qrcodeScannerCamera">

                                        <QrScanner
                                            scanDelay={3000}
                                            onDecode={handleScan}
                                            style={{width: "100%"}}
                                            stopStream={scanned}
                                        />

                                        {scanned && (
                                            <div className="qrLoadingBlockWrapper">
                                                <div className="qrLoadingWrapper">
                                                    <LoadingAnimationCircular/>
                                                    <div className="qrLoadingText">Processing QR code...</div>
                                                </div>
                                                <div className="qrLoadingBackground"/>
                                            </div>
                                        )}

                                    </div>

                                    :

                                    <div className="qrcodeImage">
                                        <img src={code} alt=""/>
                                        <div className="line">
                                        </div>
                                    </div>

                                }


                            </div>


                            {!showCamera ?

                                <div className="qrcodeScanButton" onClick={() => toggleCamera()}>
                                    <img src={qr} alt="" className='qrcodeScanButtonImage'/>
                                    <div className="qrcodeScanButtonText" id='qrButton'>
                                        Scan QR Code
                                    </div>
                                </div>

                                :

                                <div className='qrcodeScanButton' onClick={() => toggleCamera()}>
                                    <div className="qrcodeScanButtonText" id='qrButton'>
                                        Get back
                                    </div>
                                </div>

                            }

                        </div>
                    </div>
                </div>
                :
                <Qrcodesuccess data={data}/>
            }

        </>
    )
}

export default Qrcode