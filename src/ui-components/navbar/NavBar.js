import React from 'react';
import user from "../../assets/img/Container.png";
import "./NavBar.css"
import Burger from "../../ui-components/burger/burger";
import logo from '../../assets/img/smallKolbaska.png'

export const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="menuLogo">
                    <img src={logo} alt="" className='menuLogoImage'/>
                </div>
                <div className="burgerMenu">
                    <Burger/>
                </div>
                <div className="scanAndUser">
                    <div className="scan">
                        Scan QR code
                    </div>
                    <div className="user">
                        <div className="userImage">
                            <img src={user} alt="user" className='userImg'/>
                        </div>
                        <div className="userInfo">
                            <div className="userUsername">
                                Bahsmak
                            </div>
                            <div className="userDescription">
                                Lisik
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}