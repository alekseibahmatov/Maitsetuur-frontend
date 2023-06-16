import React from "react";
import './Success.css'
import salami from '../../assets/img/Salami.png'
import {useNavigate} from "react-router-dom";


export const Success = () =>{
    const navigate = useNavigate();

    return(

        <>
            <div className="qrcodeContent">

                <div className="salami">
                    <img src={salami} alt=""/>
                </div>

                <div className="scanSuccess">
                    Success
                </div>
                <div className="scanDescription">
                    You’ve successfully activated
                    our certificate
                </div>

                <div className="confirmQrButton" onClick={() => navigate('/qrcode')}>
                    Go back
                </div>
            </div>
        </>

    )

}
export default Success
