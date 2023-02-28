import React, {useState} from "react";
import './All-restaraunt.css'
import burx from "../../assets/img/burx.svg";
import share from "../../assets/img/share.svg";
import resto from '../../assets/img/leha2.png'
import {waiters} from "../restaurant/list-of-waiters/data";
import {useNavigate} from "react-router-dom";

export const AllRestaraunt = () => {
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
                            <div className="header">
                                <div className="burger">
                                    <img src={burx} className='burx_img'></img>
                                </div>
                                <div className="logo">
                                    MENU
                                </div>
                                <div className="share">
                                    <div className="share_text">
                                        Share
                                    </div>
                                    <img src={share} className='share_img'></img>
                                </div>
                            </div>
                            <div className={isBurger ? 'burger_cont1' : 'burger_cont'}>
                                <div className="closeBurger">
                                    CLOSE
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

                            <div className="search1">
                                <button type="submit" className="searchButton1">
                                    <i className="fa fa-search"/>
                                </button>
                                <input type="text" className="searchTerm1"
                                       onChange={(e) => setSearch(e.target.value)}
                                       placeholder="Name of the restaurant"/>

                            </div>




                        </div>
                    </div>
                </div>
                <div className="unrealBg1">
                    <div className="container">
                        <div className="allRestaurantsList">
                            {reatsaraunts.filter((item) => {
                                return search.toLowerCase() === '' ? item : (item.text.includes(search) || item.text.toLowerCase().includes(search) || item.text.toUpperCase().includes(search))
                            }).map((item,i) => (
                                <div className="singleRestaurantBlockAll"
                                     style={{ backgroundImage: `linear-gradient(to bottom,rgba(245, 246, 252, 0),rgba(27, 36, 105, 1)90%),url(${item.image})` }}>

                                    <div className="singleRestaurantBlockAllText">
                                        {item.text}
                                    </div>
                                    <div className="readMoreButton">
                                        Read More
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="who">
                            <div className="leftWho">
                                <div className="company1">
                                    MustVorst OÜ
                                </div>
                                <div className="company1">
                                    Kiirki 2/3
                                </div>
                                <div className="company1">
                                    Reg. No 2281337
                                </div>
                            </div>
                            <div className="rightWho">
                                <div className="numberMail">
                                    372 5887 8456
                                </div>
                                <div className="numberMail">
                                    must@vorst.ee
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}

export default AllRestaraunt