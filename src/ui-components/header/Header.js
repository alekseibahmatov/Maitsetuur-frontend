import React, {useState} from "react";
import headerMenuIcon from "../../assets/img/landing/header-menu-icon.svg";
import instagramHeaderIcon from "../../assets/img/landing/header-instagram-icon.svg";
import {useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    const openInstagram = () => {
        window.open('https://www.instagram.com/maitsetuur/', '_blank', 'noopener,noreferrer');
    };

    return (

        <>
            <div className="header">
                <div className="burger">
                    <img src={headerMenuIcon} className='burx_img'/>
                </div>
                <div className="logoLanding" onClick={() => navigate('/')}>
                    MAITSETUUR
                </div>
                <div className="instaBg">
                    <div className="share" onClick={openInstagram}>
                        <img src={instagramHeaderIcon} className='share_img'/>
                    </div>
                </div>
            </div>
        </>

    )

}
