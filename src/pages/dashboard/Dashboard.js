import React from 'react';
import './Dashboard.css'
import 'font-awesome/css/font-awesome.min.css';
import {NavBar} from "../../ui-components/navbar/NavBar";
import {SideBar} from "../../ui-components/sidebar/SideBar";
import {Outlet} from 'react-router-dom'

export const Dashboard = () => {
    return (
        <div className='content'>
            <NavBar key={'nav'} />
            <div className="main">
                <SideBar/>
                <Outlet/>
            </div>
        </div>
    );
}

export default Dashboard;
