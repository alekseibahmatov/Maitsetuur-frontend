import React, {useState} from "react";
import './Qrcode.css'
import logoout from '../../assets/img/logout.svg'
import camera from '../../assets/img/Camera.png'
import code from '../../assets/img/code.png'
import qr from '../../assets/img/qrcode.png'
import {useNavigate} from "react-router-dom";
import {QrReader}  from "react-qr-reader";

export const Qrcode = () => {
    const navigate = useNavigate();

    const [selected, setSelected] = useState("environment");
    const [startScan, setStartScan] = useState(false);
    const [loadingScan, setLoadingScan] = useState(false);
    const [data, setData] = useState("");

    const handleScan = async (scanData) => {
        setLoadingScan(true);
        console.log(`loaded data data`, scanData);
        if (scanData && scanData !== "") {
            console.log(`loaded >>>`, scanData);
            setData(scanData);
            setStartScan(false);
            setLoadingScan(false);
        }
    };
    const handleError = (err) => {
        console.error(err);
    };


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
                        <div className="qrcodeScanButton"
                             onClick={() => setStartScan(!startScan)}>
                            <img src={qr} alt="" className='qrcodeScanButtonImage'/>
                            <div className="qrcodeScanButtonText">
                                Scan QR Code
                            </div>
                        </div>
                        {startScan && (
                            <>
                                <select onChange={(e) => setSelected(e.target.value)}>
                                    <option value={"environment"}>Back Camera</option>
                                    <option value={"user"}>Front Camera</option>
                                </select>
                                <QrReader
                                    constraints={{ facingMode: 'environment' }}
                                    delay={300}
                                    onError={handleError}
                                    onScan={handleScan}
                                    // chooseDeviceId={()=>selected}
                                    resolution={1280}
                                    style={{ width: "100%" }}
                                />
                            </>
                        )}
                        {loadingScan && <p>Loading</p>}
                        {data !== "" && <p>{data}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Qrcode