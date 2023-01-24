import React, {useEffect} from 'react';
import "./SideBar.css"
import classnames from "classnames";
import menu from "../../assets/img/Menu 7.png";
import graph from "../../assets/img/graph.png";
import color from "../../assets/img/color.png";
import vector from "../../assets/img/vector111.png";
import group from "../../assets/img/Group (1).png";
import icon from "../../assets/img/icon.png";
import {useNavigate, useLocation} from "react-router-dom";
import {LIST_OF_WAITERS, MAIN_DASHBOARD, RESTO_BUSINESS_INFO, TYPES_OF_RESTO} from "../../routes";

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
        navigate('/dashboard/' + child)
    }

    return (
        <>
            <div className="sideBar">
                <div className="sideButtons">
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
                        <img src={menu} alt="" className={classnames({
                            'buttonImage': true,
                            'buttonImageSelected': path === TYPES_OF_RESTO
                        })}/>
                    </div>
                    <div onClick={() => handleClick(LIST_OF_WAITERS)}
                         className={classnames({
                             'singleButton': true,
                             'selected': path === LIST_OF_WAITERS
                         })}>
                        <img src={graph} alt="" className={classnames({
                            'buttonImage': true,
                            'buttonImageSelected': path === LIST_OF_WAITERS
                        })}/>
                    </div>
                    <div onClick={() => handleClick(RESTO_BUSINESS_INFO)}
                         className={classnames({
                             'singleButton': true,
                             'selected': path === RESTO_BUSINESS_INFO
                         })}>
                        <img src={vector} alt="" className={classnames({
                            'buttonImage': true,
                            'buttonImageSelected': path === RESTO_BUSINESS_INFO
                        })}/>
                    </div>
                    <div onClick={() => handleClick(5)}
                         className={classnames({
                             'singleButton': true,
                             'selected': path === 5
                         })}>
                        <img src={group} alt="" className={classnames({
                            'buttonImage': true,
                            'buttonImageSelected': path === 5
                        })}/>
                    </div>
                    <div onClick={() => handleClick(6)}
                         className={classnames({
                             'singleButton': true,
                             'selected': path === 6
                         })}>
                        <img src={icon} alt="" className={classnames({
                            'buttonImage': true,
                            'buttonImageSelected': path === 6
                        })}/>
                    </div>
                </div>
            </div>
        </>
    )
}