import React, {useEffect, useRef, useState} from 'react';
import user from "../../assets/img/Container.png";
import "./NavBar.css"
import Burger from "../../ui-components/burger/burger";
import logo from '../../assets/img/smallKolbaska.png'

export const NavBar = () => {
    const divRef = useRef(null);
    const [firstLetter, setFirstLetter] = useState(null);

    useEffect(() => {
        const firstLetter = divRef.current.textContent[0]
        setFirstLetter(firstLetter)
    }, []);

    return (
        <>
            <div className="navbar" id='navbar'>
                <div className="menuLogo">

                    <img src={logo} alt="" className='menuLogoImage'/>
                </div>
                <div className="burgerMenu">
                    <Burger/>
                </div>
                <div className="scanAndUser">
                    <div className="user">
                        <div className="userImage">
                            <div className="userImg">
                                {firstLetter}
                            </div>
                        </div>
                        <div className="userInfo">
                            <div className="userUsername" ref={divRef}>
                                Bashmack
                            </div>
                            <div className="userDescription">
                                Manager
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
