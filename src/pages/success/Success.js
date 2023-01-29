import React from "react";
import './Success.css'
import salami from '../../assets/img/Salami.png'


export const Success = () =>{

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

                <div className="confirmQrButton">
                    Go back
                </div>
            </div>
        </>

    )

}
export default Success