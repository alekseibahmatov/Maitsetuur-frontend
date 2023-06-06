import React from "react-dom";
import burx from "../../assets/img/icons8-квадратное-меню-30.png";
import insta from "../../assets/img/icons8-instagram-30.png";

export const Header = () => {

    return (

        <>
            <div className="header">
                <div className="burger">
                    <img src={burx} className='burx_img'/>
                </div>
                <div className="logoLanding">
                    MAITSETUUR
                </div>
                <div className="share">
                    <img src={insta} className='share_img'/>
                </div>
            </div>
        </>

    )

}