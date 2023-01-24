import React, {useEffect, useState} from 'react';
import './Dashboard.css'
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {NavBar} from "../../ui-components/navbar/NavBar";
import {SideBar} from "../../ui-components/sidebar/SideBar";
import {TypesOfRestaurants} from "../admin/types-of-restaurants/TypesOfRestaurants";
import {ListOfWaiters} from "../restaurant/list-of-waiters/ListOfWaiters";
import {useLocation} from 'react-router-dom'
import {LIST_OF_WAITERS, MAIN_DASHBOARD, RESTO_BUSINESS_INFO, TYPES_OF_RESTO} from "../../routes";
import {MainStats} from "../admin/main-stats/MainStats";
import {RestaurantBusinessInformation} from "../admin/resto-business-info/RestaurantBusinessInformation";

export const Dashboard = () => {
    const [activeChild, setActiveChild] = useState(MAIN_DASHBOARD);
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.split('/')[2];
        setActiveChild(path);
    }, [location.pathname]);


    return (
        <div className='content'>
            <NavBar key={'nav'}/>
            <div className="main">
                <SideBar/>
                <>
                    {
                        (() => {
                            switch (activeChild) {
                                case TYPES_OF_RESTO:
                                    return <TypesOfRestaurants key={TYPES_OF_RESTO}/>
                                case LIST_OF_WAITERS:
                                    return <ListOfWaiters key={LIST_OF_WAITERS}/>
                                case MAIN_DASHBOARD:
                                    return <MainStats key={MAIN_DASHBOARD}/>
                                case RESTO_BUSINESS_INFO:
                                    return <RestaurantBusinessInformation key={RESTO_BUSINESS_INFO}/>
                            }
                        })()
                    }
                </>
            </div>
        </div>
    );
}

export default Dashboard;
