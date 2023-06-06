import React, {useState} from "react";
import './All-restaraunt.css'
import burx from "../../assets/img/burx.svg";
import share from "../../assets/img/share.svg";
import resto from '../../assets/img/leha2.png'
import {waiters} from "../restaurant/list-of-waiters/data";
import {useNavigate} from "react-router-dom";
import {table} from '../single-restaraunt/data'
import Footer from "../../ui-components/footer/Footer";
import {Header} from "../../ui-components/header/Header";

export const AllRestaurant = () => {
    const navigate = useNavigate();

    const [isBurger, setIsBurger] = useState(false);
    const handleClick123 = event => {
        if (event.target.className === 'burx_img'){
            setIsBurger(true)
        }
        else {
            setIsBurger(false)
        }
    }
    const [search, setSearch] = useState('');

    const reatsaraunts = [
        {
            image: resto,
            text: 'r14',
        },
        {
            image: resto,
            text: 'Bruxx',
        },
        {
            image: resto,
            text: 'Om',
        },
        {
            image: resto,
            text: 'Levier',
        },
        {
            image: resto,
            text: 'r14',
        },
        {
            image: resto,
            text: 'Bruxx',
        },
        {
            image: resto,
            text: 'Om',
        },
        {
            image: resto,
            text: 'Levier',
        },
        {
            image: resto,
            text: 'r14',
        },
        {
            image: resto,
            text: 'Bruxx',
        },
        {
            image: resto,
            text: 'Om',
        },
        {
            image: resto,
            text: 'Levier',
        },

    ]

    return(

        <>
            <div className='bg' onClick={handleClick123}>
                <div className="realBg1">
                    <div className='container'>
                        <div className="preview">
                            <Header/>
                            <div className={isBurger ? 'burger_opened' : 'burger_closed'}>
                                <div className="closeBurger">
                                    +
                                </div>
                                <div className="next" onClick={() => navigate('/')}>
                                    Home
                                </div>
                                <div className="next" onClick={() => navigate('/connect')}>
                                    Join us
                                </div>
                            </div>
                            <div className="allRestaurantsHeader">
                            <div className="singleRestaurantHeader">
                                List of All Restaurants
                            </div>
                            <div className="allRestaurantDescription">
                                Our platform combines restaurants of different themes and concepts! Everyone can find something special for themselves and spend time alone or in a company.
                            </div>
                            </div>

                            <div className="searchForAllRestaurants">
                                <button type="submit" className="searchButtonForAllRestaurants">
                                    <i className="fa fa-search"/>
                                </button>
                                <input type="text" className="searchTermForAllRestaurants"
                                       onChange={(e) => setSearch(e.target.value)}
                                       placeholder="Name of the restaurant"/>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="unrealBgHeight">
                    <div className="container">
                        <div className="allRestaurantsList">
                            {table.filter((item) => {
                                return search.toLowerCase() === '' ? item : (item.carouselText.includes(search) || item.carouselText.toLowerCase().includes(search) || item.carouselText.toUpperCase().includes(search))
                            }).map((item,i) => (
                                <div className="singleRestaurantBlockAll"
                                     style={{ backgroundImage: `linear-gradient(to bottom,rgba(245, 246, 252, 0),rgba(27, 36, 105, 1)90%),url(${item.carouselImage})` }}>

                                    <div className="singleRestaurantBlockAllText">
                                        {item.carouselText}
                                    </div>
                                    <div className="readMoreButton" onClick={() => {navigate(`/singlerestaurant/${item.id}`)
                                        window.scrollTo(0, 0);}}>
                                        Read More
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </>

    )

}

export default AllRestaurant