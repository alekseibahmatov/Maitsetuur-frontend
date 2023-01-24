import React, {useState} from 'react';
import "./TypesOfRestaurants.css"
import Select from "react-select";
import {places, restaurants, sellers} from "./data";
import {customStyles} from "./styles";

export const TypesOfRestaurants = () => {
    const [search1, setSearch1] = useState('');
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedOption, setSelectedOption] = useState(sellers[0]);
    const [bookList, setBookList] = useState(places[selectedOption.value]);

    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre);
    }

    const filteredRestaurants = restaurants.filter(restaurant => {
        return selectedGenre === null || restaurant.genre === selectedGenre;
    });

    function handleChange(selectedOption) {
        setSelectedOption(selectedOption);
        setBookList(places[selectedOption.value]);
    }


    return <div className='rightBlock1'>

        <div className="waitersHeader">
            Types of restaurants
        </div>

        <div className="typeOfRestaurant">
            <div className="leftBlockRestaurants">
                <div className="searchAndDots1">
                    <div className="search">
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"/>
                        </button>
                        <input type="text" className="searchTerm"
                               onChange={(e) => setSearch1(e.target.value)}
                               placeholder="Search here...."/>
                    </div>
                </div>
                <div className="typeButtons">
                    <div
                        className={!selectedGenre ? 'typeButtonSingleChoosen' : 'typeButtonSingle'}
                        onClick={() => handleGenreSelect(null)}>
                        All
                    </div>
                    <div
                        className={selectedGenre === 'China' ? 'typeButtonSingleChoosen' : 'typeButtonSingle'}
                        onClick={() => handleGenreSelect('China')}>
                        China
                    </div>
                    <div
                        className={selectedGenre === 'Asia' ? 'typeButtonSingleChoosen' : 'typeButtonSingle'}
                        onClick={() => handleGenreSelect('Asia')}>
                        Asia
                    </div>
                    <div
                        className={selectedGenre === 'Russian' ? 'typeButtonSingleChoosen' : 'typeButtonSingle'}
                        onClick={() => handleGenreSelect('Russian')}>
                        Russian
                    </div>
                    <div
                        className={selectedGenre === 'Estonian' ? 'typeButtonSingleChoosen' : 'typeButtonSingle'}
                        onClick={() => handleGenreSelect('Estonian')}>
                        Estonian
                    </div>
                </div>
                <div className="listOfRestaurants">
                    {filteredRestaurants.filter((item) => {
                        return search1.toLowerCase() === '' ? item : (item.title.includes(search1) || item.title.toLowerCase().includes(search1))
                    }).map((item, i) => (<div className="singleRestaurant" key={item.id}>
                        <div className="restaurantImage">
                            {item.image}
                        </div>
                        <div className="restaurantName">
                            {item.title}
                        </div>
                        <div className="restaurantAvgBill">
                            {item.price}
                        </div>
                    </div>))}
                </div>
            </div>
            <div className="rightBlockRestaurants">

                <div className="rightBlockRestaurantsHeader">

                    <div className="nameOfResto">
                        Most popular places
                    </div>

                    <div className="selector">
                        <Select className='myselect' options={sellers} defaultValue={sellers[0]}
                                styles={customStyles} onChange={handleChange}
                                components={{IndicatorSeparator: () => null}}/>
                    </div>
                </div>
                <div className="allRestoItems">
                    {bookList.map((item, i) => (<div className="singleItemResto" key={i}>
                        <div className="singleItemRestoImage">
                            {item.image}
                        </div>

                        <div className="singleItemRestoTittle">
                            {item.title}
                        </div>

                        <div className="singleItemRestoItems">
                            {item.items}
                        </div>
                    </div>))}
                </div>
            </div>

        </div>


    </div>
}