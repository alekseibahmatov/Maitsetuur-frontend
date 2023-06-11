import React from "react-dom";
import burx from "../../assets/img/icons8-квадратное-меню-30.png";
import insta from "../../assets/img/icons8-instagram-30.png";

export const Header = () => {

    const openInstagram = () => {
        window.open('https://www.instagram.com/maitsetuur/', '_blank', 'noopener,noreferrer');
    };

    return (

        <>
            <div className="header">
                <div className="burger">
                    <img src={burx} className='burx_img'/>
                </div>
                <div className="logoLanding">
                    MAITSETUUR
                </div>
                <div className="instaBg">
                <div className="share"  onClick={openInstagram}>
                    <img src={insta} className='share_img'/>
                </div>
                </div>
            </div>
        </>

    )

}