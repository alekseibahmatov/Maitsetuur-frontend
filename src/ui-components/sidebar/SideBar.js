import React, {useEffect, useState} from 'react';
import "./SideBar.css"
import classnames from "classnames";
import menu from "../../assets/img/menu.png";
import graph from "../../assets/img/graph.png";
import color from "../../assets/img/color.png";
import vector from "../../assets/img/vector.png";
import group from "../../assets/img/group.png";
import icon from "../../assets/img/icon.png";
import sausage from '../../assets/img/smallKolbaska.png'
import cross from '../../assets/img/Less Than.png'
import {useNavigate, useLocation} from "react-router-dom";
import {LIST_OF_COUPONS, LIST_OF_WAITERS, MAIN_DASHBOARD, RESTO_BUSINESS_INFO, TYPES_OF_RESTO} from "../../routes";
import authService from "../../services/auth";

export const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let path = location.pathname.split('/')[2];

    useEffect(() => {
        path = location.pathname.split('/')[2];
        console.log(path)

    }, [location.pathname]);

    const handleClick = (child) => {
        console.log(child)
        document.getElementById('hiddenObject').classList.add('opacity0');
        navigate('/dashboard/' + child)
    }

    const handleLogout = () => {
        authService.logout()
        navigate('/')
    }

    const [isOpen, setIsOpen] = useState(false);
    const [hasTimeoutOccurred, setHasTimeoutOccurred] = useState(false);

    const onHover = () => {
        setIsOpen(true);
        document.getElementById('bm-overlay-sideBar').classList.add('shadowActive');
        document.getElementById('navbar').classList.remove('navbar');
        document.getElementById('navbar').classList.add('navbarZindex');
            setTimeout(() => {
                document.getElementById('sidebar').classList.add('pointerEventsNone');
            }, 1);
        setTimeout(() => {
                document.getElementById('hiddenObject').classList.add('opacity0');
                }, 660);
    };

    const onHoverRemove = () => {
        setIsOpen(false);
        document.getElementById('bm-overlay-sideBar').classList.remove('shadowActive');
        document.getElementById('navbar').classList.add('navbar');
        document.getElementById('navbar').classList.remove('navbarZindex');
        document.getElementById('hiddenObject').classList.remove('opacity0');
        document.getElementById('sidebar').classList.remove('pointerEventsNone');
    };


    return (
        <>

            <div className='sideBar' id='sidebar' onMouseEnter={() => onHover()}>
                <div onClick={() => handleClick(MAIN_DASHBOARD)}
                     id='hiddenObject'
                     className={classnames({
                         'arrowSidebar': true,
                     })}>
                    <img src={cross} alt="" className={classnames({
                        'buttonImage': true,
                        'translateX' : true,
                    })}/>
                </div>
                <div
                    className={classnames({
                        'sideButtons': true,
                    })}
                >

                    <div onClick={() => handleClick(MAIN_DASHBOARD)}
                         className={classnames({
                             'singleButton': true,
                             'selected': path === MAIN_DASHBOARD
                         })}>
                        <img src={color} alt="" className={classnames({
                            'buttonImage': true,
                            'buttonImageSelected': path === MAIN_DASHBOARD
                        })}/>
                    </div>
                    <div onClick={() => handleClick(TYPES_OF_RESTO)}
                         className={classnames({
                             'singleButton': true,
                             'selected': path === TYPES_OF_RESTO
                         })}>
                        <img src={vector} alt="" className={classnames({
                            'buttonImage': true,
                            'buttonImageSelected': path === TYPES_OF_RESTO
                        })}/>
                    </div>
                    <div onClick={() => handleClick(LIST_OF_WAITERS)}
                         className={classnames({
                             'singleButton': true,
                             'selected': path === LIST_OF_WAITERS
                         })}>
                        <img src={color} alt="" className={classnames({
                            'buttonImage': true,
                            'buttonImageSelected': path === LIST_OF_WAITERS
                        })}/>
                    </div>
                    <div onClick={() => handleClick(RESTO_BUSINESS_INFO)}
                         className={classnames({
                             'singleButton': true,
                             'selected': path === RESTO_BUSINESS_INFO
                         })}>
                        <img src={color} alt="" className={classnames({
                            'buttonImage': true,
                            'buttonImageSelected': path === RESTO_BUSINESS_INFO
                        })}/>
                    </div>
                    <div onClick={() => handleClick(LIST_OF_COUPONS)}
                         className={classnames({
                             'singleButton': true,
                             'selected': path === LIST_OF_COUPONS
                         })}>
                        <img src={vector} alt="" className={classnames({
                            'buttonImage': true,
                            'buttonImageSelected': path === LIST_OF_COUPONS
                        })}/>
                    </div>
                    <div onClick={() => handleLogout()}
                         className={classnames({
                             'singleButton': true,
                             'selected': path === 6
                         })}>
                        <img src={group} alt="" className={classnames({
                            'buttonImage': true,
                        })}/>
                    </div>
                </div>
            </div>

                <div className={`contentBurger ${isOpen ? 'open' : ''}`}>

                    <div className="sideBar1" onMouseLeave={() => onHoverRemove()}>
                        <div
                            className={classnames({
                                'sideButtons1': true,
                            })}
                        >
                            <div className="sausageHeader">
                                <div className="sausageImageHeader">
                                    <img src={sausage} alt="" className='menuLogoImage'/>
                                </div>
                                <div className="closeCrossImage">
                                    <img src={cross} alt=""/>
                                </div>
                            </div>
                            <div className="allTheButtons">
                            <div onClick={() => handleClick(MAIN_DASHBOARD)}
                                 className={classnames({
                                     'singleButton1': true,
                                     'selected': path === MAIN_DASHBOARD
                                 })}>
                                <div className='buttonText'>Dashboard</div>
                            </div>
                            <div onClick={() => handleClick(TYPES_OF_RESTO)}
                                 className={classnames({
                                     'singleButton1': true,
                                     'selected': path === TYPES_OF_RESTO
                                 })}>

                                <div className='buttonText'>Resto info</div>
                            </div>
                            <div onClick={() => handleClick(LIST_OF_WAITERS)}
                                 className={classnames({
                                     'singleButton1': true,
                                     'selected': path === LIST_OF_WAITERS
                                 })}>

                                <div className='buttonText'>Resto List</div>
                            </div>
                            <div onClick={() => handleClick(RESTO_BUSINESS_INFO)}
                                 className={classnames({
                                     'singleButton1': true,
                                     'selected': path === RESTO_BUSINESS_INFO
                                 })}>

                                <div className='buttonText'>Coupon List</div>
                            </div>
                            <div onClick={() => handleClick(LIST_OF_COUPONS)}
                                 className={classnames({
                                     'singleButton1': true,
                                     'selected': path === LIST_OF_COUPONS
                                 })}>

                                <div className='buttonText'>Create Waiter</div>
                            </div>
                            <div onClick={() => handleLogout()}
                                 className={classnames({
                                     'singleButton1': true,
                                 })}>
                                <div className='buttonText'>Log Out</div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>


        </>
    )
}