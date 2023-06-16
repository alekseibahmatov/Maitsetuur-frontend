import React, {useState} from "react";
import './Qrcode.css'
import scanQrGif from '../../assets/img/qrcode/scan-qr-code.gif'
import code from '../../assets/img/qrcode/big-qr.svg'
import qr from '../../assets/img/qrcode.png'
import {QrScanner} from '@yudiel/react-qr-scanner';
import {
    LoadingAnimationCircular
} from "../../ui-components/loading-animation/loading-animaiton-circular/LoadingAnimationCircular";
import toast from "react-hot-toast";
import Qrcodesuccess from "../qrcodesuccess/Qrcodesuccess";

export const Qrcode = () => {
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
                    <div className="qrcodeMain">
                        <div className="qcodeMainContent">
                            <div className="qrcodeMainHeader">
                                Skaneeri QR-koodi
                            </div>

                            <div className="qrcodeMainHeaderImage">
                                <img src={scanQrGif} alt=""/>
                            </div>

                            <div className="qrcodeMainText">
                                Palun suunake kaamera sertifikaadi QR-koodile
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
                                                    <div className="qrLoadingText">QR-koodi töötlemine...</div>
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
                                        Skaneeri QR-koodi
                                    </div>
                                </div>

                                :

                                <div className='qrcodeScanButton' onClick={() => toggleCamera()}>
                                    <div className="qrcodeScanButtonText" id='qrButton'>
                                        Mine tagasi
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
