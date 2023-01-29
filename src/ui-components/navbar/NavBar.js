import React from 'react';
import logo from "../../assets/img/Logo.png";
import user from "../../assets/img/Container.png";
import "./NavBar.css"
import Burger from "../../ui-components/burger/burger";

export const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logoAndName">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="name">
                        Present Perfect Management for R14 restaurant
                    </div>
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