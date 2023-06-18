import React from "react";
import './Fail.css'
import sausage from "../../assets/img/sosiska.png";
import {useNavigate} from "react-router-dom";

export const Fail = () => {
    const navigate = useNavigate();

    return (

        <>
            <div className="qrcodeContent">

                <div className="salami1">
                    <img src={sausage} alt="" className='siskaSosiska'/>
                </div>

                <div className="scanSuccess">
                    Error
                </div>
                <div className="scanDescription">
                    Sertifikaat ei ole enam kehtiv
                </div>

                <div onClick={() => navigate('/qrcode')} className="confirmQrButton">
                    Tagasi
                </div>
                <div className="scanDescription">
                    Palun võtke meiega julgelt ühendust, ja kirjutage meie e-posti aadressile:
                </div>
                <div className="support">
                    support@mustvorst.ee
                </div>
            </div>
        </>

    )

}

export default Fail
