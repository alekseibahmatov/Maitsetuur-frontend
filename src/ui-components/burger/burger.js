import React, {useEffect, useRef, useState} from "react";
import { slide as Menu } from 'react-burger-menu'
import './burger.css'
import {useLocation, useNavigate} from "react-router-dom";
import {LIST_OF_COUPONS, LIST_OF_WAITERS, MAIN_DASHBOARD, RESTO_BUSINESS_INFO, TYPES_OF_RESTO} from "../../routes";
import classnames from "classnames";
import color from "../../assets/img/color.png";
import menu from "../../assets/img/menu.png";
import graph from "../../assets/img/graph.png";
import vector from "../../assets/img/vector.png";
import group from "../../assets/img/group.png";
import icon from "../../assets/img/icon.png";
import close from '../../assets/img/Less Than.png'
import user from "../../assets/img/Container.png";
import authService from "../../services/auth";
import sausage from '../../assets/img/sosiska.png'

const Burger = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const divRef = useRef(null);
    const [firstLetter, setFirstLetter] = useState(null);
    useEffect(() => {
        const firstLetter = divRef.current.textContent[0]
        setFirstLetter(firstLetter)
    }, []);
    let path = location.pathname.split('/')[2];

    useEffect(() => {
        path = location.pathname.split('/')[2];
        console.log(path)
    }, [location.pathname]);

    const handleClick = (child) => {
        console.log(child)
        navigate('/dashboard/' + child)
    }

    const handleLogout = () => {
        authService.logout()
        navigate('/')
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function handleMenuStateChange(state) {
        setIsMenuOpen(state.isOpen);
    }

    return (
        <>
        <Menu onStateChange={handleMenuStateChange}
            customCrossIcon={ <img src={close} /> }
              styles={{
                  bmCross: {
                      width: '45px',
                      height: '45px',
                      // adjust the size as desired
                  },
                  bmCrossButton : {
                      width: '45px',
                      height: '45px',
                  },
                  bmMenuWrap : {
                      overflow: 'hidden',
                  },
              }}
        >
            <div className="showProfile">
                <div className="sausage">
                    <img src={sausage} alt="" className='sausageImg'/>
                </div>
                <div className="user1">
                    <div className="userImage">
                        <div className="userImgBurger">
                            {firstLetter}
                        </div>
                    </div>
                    <div className="userInfo1">
                        <div className="userUsername" ref={divRef}>
                            Bahsmak
                        </div>
                        <div className="userDescription">
                            Lisik
                        </div>
                    </div>
                </div>
            </div>
            <div className="burgerButtons">
                <div onClick={() => handleClick(MAIN_DASHBOARD)}
                     className={classnames({
                         'singleButton1': true,
                         'selected': path === MAIN_DASHBOARD
                     })}>
                    <img src={color} alt="" className={classnames({
                        'buttonImage': true,
                        'buttonImageSelected': path === MAIN_DASHBOARD
                    })}/>
                    <div className='buttonText'>Dashboard</div>
                </div>
                <div onClick={() => handleClick(TYPES_OF_RESTO)}
                     className={classnames({
                         'singleButton1': true,
                         'selected': path === TYPES_OF_RESTO
                     })}>
                    <img src={menu} alt="" className={classnames({
                        'buttonImage': true,
                        'buttonImageSelected': path === TYPES_OF_RESTO
                    })}/>
                    <div className='buttonText'>Resto info</div>
                </div>
                <div onClick={() => handleClick(LIST_OF_WAITERS)}
                     className={classnames({
                         'singleButton1': true,
                         'selected': path === LIST_OF_WAITERS
                     })}>
                    <img src={graph} alt="" className={classnames({
                        'buttonImage': true,
                        'buttonImageSelected': path === LIST_OF_WAITERS
                    })}/>
                    <div className='buttonText'>Resto List</div>
                </div>
                <div onClick={() => handleClick(RESTO_BUSINESS_INFO)}
                     className={classnames({
                         'singleButton1': true,
                         'selected': path === RESTO_BUSINESS_INFO
                     })}>
                    <img src={menu} alt="" className={classnames({
                        'buttonImage': true,
                        'buttonImageSelected': path === RESTO_BUSINESS_INFO
                    })}/>
                    <div className='buttonText'>Coupon List</div>
                </div>
                <div onClick={() => handleClick(LIST_OF_COUPONS)}
                     className={classnames({
                         'singleButton1': true,
                         'selected': path === LIST_OF_COUPONS
                     })}>
                    <img src={vector} alt="" className={classnames({
                        'buttonImage': true,
                        'buttonImageSelected': path === LIST_OF_COUPONS
                    })}/>
                    <div className='buttonText'>Create Waiter</div>
                </div>
                <div onClick={() => handleLogout()}
                     className={classnames({
                         'singleButton1': true,
                     })}>
                    <img src={group} alt="" className={classnames({
                        'buttonImage': true,
                    })}/>
                    <div className='buttonText'>Logout</div>
                </div>
            </div>
        </Menu>
        </>
    )

}

export default Burger