import React from "react";
import './Fail.css'
import sausage from "../../assets/img/sosiska.png";

export const Fail = () =>{

    return(

        <>
            <div className="qrcodeContent">

                <div className="salami1">
                    <img src={sausage} alt="" className='siskaSosiska'/>
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
                <div className="scanDescription">
                    Please don’t hesitate to contact us,
                    and write on our email:
                </div>
                <div className="support">
                    support@mustvorst.ee
                </div>
            </div>
        </>

    )

}

export default Fail
