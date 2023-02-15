import React, {useState} from 'react';
import Select from 'react-select'
import './Admin-restaraunt.css'
import logo from '../../assets/img/Logo.png'
import user from '../../assets/img/Container.png'
import graph from '../../assets/img/graph.png'
import color from '../../assets/img/color.png'
import group from '../../assets/img/Group (1).png'
import icon from '../../assets/img/icon.png'
import menu from '../../assets/img/Menu 7.png'
import vector from '../../assets/img/vector111.png'
import up from '../../assets/img/up.png'
import down from '../../assets/img/down.png'
import dots from '../../assets/img/dots.png'
import 'font-awesome/css/font-awesome.min.css';
import resto from '../../assets/img/Image Placeholder.png'
import small from '../../assets/img/small.png'
import contract from '../../assets/img/contract.png'
import makeAnimated from 'react-select/animated'
import classnames from 'classnames';
import PopupAdmin from "../../ui-components/popup-admin/Popup-admin";
import {LimitedTextArea} from "../../ui-components/limited-text-area/LimitedTextArea";

export const App = () => {

    const [content, setContent] = useState(1);
    const [search, setSearch] = useState('');
    const [search1, setSearch1] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("(No file chosen)");

    const handleChangeImage = e => {
        setFileName(e.target.files[0].name);
        setImage(URL.createObjectURL(e.target.files[0]));
    }


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }


    const handleClick = (id) => {
        setContent(id);
    }

    const restaurants = [
        { id: 1, title: 'Sashimi', genre: 'Asia', image: <img src={resto} alt='resto'/>, price: '$22' },
        { id: 2, title: 'Unagi', genre: 'Russian', image: <img src={resto} alt='resto'/>, price: '$22' },
        { id: 3, title: 'R14', genre: 'China', image: <img src={resto} alt='resto'/>, price: '$22' },
        { id: 4, title: 'Miso', genre: 'China', image: <img src={resto} alt='resto'/>, price: '$22' },
        { id: 5, title: 'Bruxx', genre: 'Italian', image: <img src={resto} alt='resto'/>, price: '$22' },
        { id: 6, title: 'Gaysex', genre: 'Asia', image: <img src={resto} alt='resto'/>, price: '$22' },
        { id: 7, title: 'Sashimi', genre: 'Asia', image: <img src={resto} alt='resto'/>, price: '$22' },
        { id: 8, title: 'Unagi', genre: 'Russian', image: <img src={resto} alt='resto'/>, price: '$22' },
        { id: 9, title: 'R14', genre: 'China', image: <img src={resto} alt='resto'/>, price: '$22' },
        { id: 10, title: 'Miso', genre: 'China', image: <img src={resto} alt='resto'/>, price: '$22' },
        { id: 11, title: 'Bruxx', genre: 'Italian', image: <img src={resto} alt='resto'/>, price: '$22' },
        { id: 12, title: 'Gaysex', genre: 'Asia', image: <img src={resto} alt='resto'/>, price: '$22' },
    ];



    const places = {
        'best' : [
            { id: 1, title: 'Sashimi', items: '430 items', image: <img src={small} alt='small'/>},
            { id: 2, title: 'Kyoto', items: '350 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '290 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '289 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '288 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '287 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '286 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '275 items', image: <img src={small} alt='small'/>},

        ],
        'cock' : [
            { id: 4, title: 'Bruxx', items: '45 items', image: <img src={small} alt='small'/>},
            { id: 5, title: 'om House', items: '23 items', image: <img src={small} alt='small'/>},
            { id: 6, title: 'Sashimi', items: '12 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '11 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '10 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '9 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '8 items', image: <img src={small} alt='small'/>},

        ],
        'dick' : [
            { id: 7, title: 'Levier', items: '66 items', image: <img src={small} alt='small'/>},
            { id: 8, title: 'McDonalds', items: '11 items', image: <img src={small} alt='small'/>},
            { id: 9, title: 'Hesburger', items: '10 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '9 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '8 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '7 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '6 items', image: <img src={small} alt='small'/>},
            { id: 3, title: 'R14', items: '2 items', image: <img src={small} alt='small'/>},
        ]

    }

    const [selectedGenre, setSelectedGenre] = useState(null);

    const handleGenreSelect = (genre) => {
        setSelectedGenre(genre);
    }

    const filteredRestaurants = restaurants.filter(restaurant => {
        return selectedGenre === null || restaurant.genre === selectedGenre;
    });



    const table = [
        { id: '01', name: 'Sashimi', quantity: '30', date: 'February 14 2021'  , revenue: '$293.01', netProfit: '$710.68' , moneyWasted: '€21.68', dots: <img src={dots}/>},
        { id: '02', name: 'Leha', quantity: '30', date: 'February 14 2021'  , revenue: '$123.01', netProfit: '$712.68' , moneyWasted: '€0.68', dots: <img src={dots}/>},
        { id: '03', name: 'Leha', quantity: '30', date: 'February 14 2021'  , revenue: '$123.01', netProfit: '$712.68' , moneyWasted: '€0.68', dots: <img src={dots}/>},
        { id: '04', name: 'Leha', quantity: '30', date: 'February 14 2021'  , revenue: '$123.01', netProfit: '$712.68' , moneyWasted: '€0.68', dots: <img src={dots}/>},
    ]

    const options = [
        { value: 'monthly', label: 'Monthly' },
        { value: 'daily', label: 'Daily' },
        { value: 'yearly', label: 'Yearly' }
    ]
    const sellers = [
        { value: 'best', label: 'Best Sellers' },
        { value: 'cock', label: 'Cock suckers' },
        { value: 'dick', label: 'Dick lickers' }
    ]

    const [selectedOption, setSelectedOption] = useState(sellers[0]);
    const [bookList, setBookList] = useState(places[selectedOption.value]);

    function handleChange(selectedOption) {
        setSelectedOption(selectedOption);
        setBookList(places[selectedOption.value]);
    }

    const animatedComponents = makeAnimated();
    const typeOfResto = [
        { value: 'china', label: 'China' },
        { value: 'italian', label: 'Italian' },
        { value: 'france', label: 'French' },
        { value: 'home', label: 'Home Food' },
        { value: 'est', label: 'Estonian' },
        { value: 'russian', label: 'Russian' }
    ]

    const waiters = [
        {
            id: 'xxx1',
            name: 'Aleksei Bashma4kov',
            email: 'bashmach@gay.com',
            phone: '+37214488558',
            turnover: '$490.51'
        },
        {
            id: 'xxx2',
            name: 'German Eine',
            email: 'bashmach@gay.com',
            phone: '+37214488558',
            turnover: '$490.51'
        },
        {
            id: 'xxx3',
            name: 'Madrid Gay',
            email: 'bashmach@gay.com',
            phone: '+37214488558',
            turnover: '$490.51'
        },
    ]

    const customStyles = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: state.isSelected ? "#fff" : "#5541D7",
            backgroundColor: state.isSelected ? "#5541D7" : "#Fff",
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "#fff",
            padding: "3px 20px",
            border: "2px solid #5541D7",
            boxShadow: "none",
            borderRadius: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',

        }),

        dropdownIndicator: base => ({
            ...base,
            color: "#5541D7",
            marginLeft: '20px',
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#5541D7" }),
    };
    const customStyles2 = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: state.isSelected ? "#fff" : "#5541D7",
            backgroundColor: state.isSelected ? "#5541D7" : "#Fff",
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "#fff",
            padding: "7px 25px",
            border: "1px solid #5541D7",
            boxShadow: "none",
            borderRadius: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',

        }),

        dropdownIndicator: base => ({
            ...base,
            color: "#5541D7",
            marginLeft: '20px',
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#5541D7" }),
        multiValueLabel: (defaultStyles) => ({ ...defaultStyles, color: "#5541D7" }),
        placeholder: (defaultStyles) => ({ ...defaultStyles, color: "#5541D7" }),
    };



    const Data = [
        {
            tittle: 'All sold Coupons',
            value: '1000',
            arrow: <img src={down} style={{float: 'right'}}/>,
            percent: <div style={{color: '#F04461' }}>-15%</div>
        },
        {
            tittle: 'Revenue monthly',
            value: '1050',
            arrow: <img src={up} style={{float: 'right'}}/>,
            percent: '+20%'
        },
        {
            tittle: 'Revenue quarterly',
            value: '$50.000',
            arrow: <img src={up} style={{float: 'right'}}/>,
            percent: '+10%'
        },
        {
            tittle: 'Nett Profit quarterly',
            value: '$12.000',
            arrow: <img src={up} style={{float: 'right'}}/>,
            percent: '+12%'
        }
    ]




    return (

        <div className='content'>

            <div className="navbar">
                <div className="logoAndName">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="name">
                        Present Perfect Management for R14 restaurant
                    </div>
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

            <div className="main">

                <div className="sideBar">
                    <div className="sideButtons">
                        <div onClick={() => handleClick(1)}
                             className={classnames({
                                 'singleButton': true,
                                 'selected': content === 1
                             })}>
                            <img src={menu} alt="" className={classnames({
                                'buttonImage': true,
                                'buttonImageSelected': content === 1
                            })}/>
                        </div>
                        <div onClick={() => handleClick(2)}
                             className={classnames({
                                 'singleButton': true,
                                 'selected': content === 2
                             })}>
                            <img src={graph} alt="" className={classnames({
                                'buttonImage': true,
                                'buttonImageSelected': content === 2
                            })}/>
                        </div>
                        <div onClick={() => handleClick(3)}
                             className={classnames({
                                 'singleButton': true,
                                 'selected': content === 3
                             })}>
                            <img src={color} alt="" className={classnames({
                                'buttonImage': true,
                                'buttonImageSelected': content === 3
                            })}/>
                        </div>
                        <div onClick={() => handleClick(4)}
                             className={classnames({
                                 'singleButton': true,
                                 'selected': content === 4
                             })}>
                            <img src={vector} alt="" className={classnames({
                                'buttonImage': true,
                                'buttonImageSelected': content === 4
                            })}/>
                        </div>
                        <div onClick={() => handleClick(5)}
                             className={classnames({
                                 'singleButton': true,
                                 'selected': content === 5
                             })}>
                            <img src={group} alt="" className={classnames({
                                'buttonImage': true,
                                'buttonImageSelected': content === 5
                            })}/>
                        </div>
                        <div onClick={() => handleClick(6)}
                             className={classnames({
                                 'singleButton': true,
                                 'selected': content === 6
                             })}>
                            <img src={icon} alt="" className={classnames({
                                'buttonImage': true,
                                'buttonImageSelected': content === 6
                            })}/>
                        </div>
                    </div>
                </div>


                {(() => {
                    switch(content) {
                        case 1: return <div className='rightBlock1'>
                            <div className="waitersHeader">
                                Types of restaurants
                            </div>

                            <div className="typeOfRestaurant">
                                <div className="leftBlockRestaurants">
                                    <div className="searchAndDots1">
                                        <div className="search">
                                            <button type="submit" className="searchButton">
                                                <i className="fa fa-search"></i>
                                            </button>
                                            <input type="text" className="searchTerm"
                                                   onChange={(e) => setSearch1(e.target.value)}
                                                   placeholder="Search here...."/>
                                        </div>
                                    </div>
                                    <div className="typeButtons">
                                        <div className= {!selectedGenre ? 'typeButtonSingleChoosen' : 'typeButtonSingle'}
                                             onClick={() => handleGenreSelect(null)}>
                                            All
                                        </div>
                                        <div className= {selectedGenre === 'China' ? 'typeButtonSingleChoosen' : 'typeButtonSingle'}
                                             onClick={() => handleGenreSelect('China')}>
                                            China
                                        </div>
                                        <div className= {selectedGenre === 'Asia' ? 'typeButtonSingleChoosen' : 'typeButtonSingle'}
                                             onClick={() => handleGenreSelect('Asia')}>
                                            Asia
                                        </div>
                                        <div className= {selectedGenre === 'Russian' ? 'typeButtonSingleChoosen' : 'typeButtonSingle'}
                                             onClick={() => handleGenreSelect('Russian')}>
                                            Russian
                                        </div>
                                        <div className= {selectedGenre === 'Estonian' ? 'typeButtonSingleChoosen' : 'typeButtonSingle'}
                                             onClick={() => handleGenreSelect('Estonian')}>
                                            Estonian
                                        </div>
                                    </div>
                                    <div className="listOfRestaurants">
                                        {filteredRestaurants.filter((item) => {
                                            return search1.toLowerCase() === '' ? item : (item.title.includes(search1) || item.title.toLowerCase().includes(search1))
                                        }).map((item, i) => (
                                            <div className="singleRestaurant" key={item.id}>
                                                <div className="restaurantImage">
                                                    {item.image}
                                                </div>
                                                <div className="restaurantName">
                                                    {item.title}
                                                </div>
                                                <div className="restaurantAvgBill">
                                                    {item.price}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="rightBlockRestaurants">

                                    <div className="rightBlockRestaurantsHeader">

                                        <div className="nameOfResto">
                                            Most popular places
                                        </div>

                                        <div className="selector">
                                            <Select className='myselect' options={sellers} defaultValue={sellers[0]}  styles={customStyles} onChange={handleChange}
                                                    components={{ IndicatorSeparator:() => null }}/>
                                        </div>
                                    </div>
                                    <div className="allRestoItems">
                                        {bookList.map((item, i) => (
                                            <div className="singleItemResto" key={i}>
                                                <div className="singleItemRestoImage">
                                                    {item.image}
                                                </div>

                                                <div className="singleItemRestoTittle">
                                                    {item.title}
                                                </div>

                                                <div className="singleItemRestoItems">
                                                    {item.items}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>


                        </div>
                        case 2: return <div className='rightBlock1'>

                            <div className="blockHeader">
                                {Data.map((item, i) => (
                                    <div className="singleBlock">
                                        <div className="leftSide">
                                            <div className="blockName">
                                                {item.tittle}
                                            </div>
                                            <div className="blockValue">
                                                {item.value}
                                            </div>
                                        </div>
                                        <div className="rightSide">
                                            <div className="arrow">
                                                {item.arrow}
                                            </div>
                                            <div className="percent">
                                                {item.percent}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="blockMain">

                                <div className="blockMainHeader">
                                    <div className="earnings">
                                        Earnings
                                    </div>
                                    <div className="dropAndFeatures">

                                        <div className='dropdown'>
                                            <Select className='myselect' options={options} defaultValue={options[0]}  styles={customStyles}
                                                    components={{ IndicatorSeparator:() => null }}/>
                                        </div>

                                        <div className="features">
                                            <img src={dots} alt="features"/>
                                        </div>

                                    </div>
                                </div>
                                <div className="income">

                                    <div className="earningsOrders">
                                        <div className="earningsOrdersValue">
                                            $50.000
                                        </div>
                                        <div className="earningsOrdersValue">
                                            1050
                                        </div>
                                    </div>
                                    <div className="earningsOrders">
                                        <div className="earningsOrdersDescription">
                                            Earning Overtime
                                        </div>
                                        <div className="earningsOrdersDescription">
                                            Total Order
                                        </div>
                                    </div>

                                </div>

                                <div className="germanLibrary">

                                </div>



                            </div>
                            <div className="couponList">
                                <div className="couponListHeader">
                                    <div className="couponListHeaderName">
                                        Latest Coupons
                                    </div>
                                    <div className="features">
                                        <img src={dots} alt="features"/>
                                    </div>
                                </div>

                                <table>

                                    <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Restaurant</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Revenue</th>
                                        <th scope="col">Net Profit</th>
                                        <th scope="col">Money Wasted</th>
                                        <th scope="col"></th>
                                    </tr>
                                    </thead>

                                    <tbody>

                                    {table.map((item, i) => (

                                        <tr>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.date}</td>
                                            <td>{item.revenue}</td>
                                            <td>{item.netProfit}</td>
                                            <td>{item.moneyWasted}</td>
                                            <td>{item.dots}</td>
                                        </tr>
                                    ))}
                                    </tbody>

                                </table>

                            </div>


                        </div>;
                        case 3: return <div className='rightBlock1'>
                            <div className="waitersButton">
                                <div className="waitersHeader">
                                    List of waiters for R14
                                </div>
                                <div className="addWaiter" onClick={toggleModal}>
                                    Add waiter
                                </div>
                                <PopupAdmin isOpen={isModalOpen} toggleModal={toggleModal} />
                            </div>

                            <div className="waitersMain">
                                <div className="searchAndDots">
                                    <div className="search">
                                        <button type="submit" className="searchButton">
                                            <i className="fa fa-search"></i>
                                        </button>
                                        <input type="text" className="searchTerm"
                                               onChange={(e) => setSearch(e.target.value)}
                                               placeholder="What are you looking for?"/>

                                    </div>
                                    <div className="dots">
                                        <img src={dots} alt="dots"/>
                                    </div>
                                </div>

                                <table>

                                    <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">E-mail</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Turnover</th>
                                        <th scope='col'></th>
                                    </tr>
                                    </thead>

                                    <tbody>

                                    {waiters.filter((item) => {
                                        return search.toLowerCase() === '' ? item : (item.name.includes(search) || item.name.toLowerCase().includes(search))
                                    }).map((item, i) => (

                                        <tr>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.turnover}</td>
                                            <td><div className="deleteButton">Delete</div></td>
                                        </tr>
                                    ))}
                                    </tbody>

                                </table>
                            </div>



                        </div>;
                        case 4: return <div className='rightBlock11'>
                            <div className="businessHeader">
                                <div className="businessHeader1">
                                    Restaurant Business Information
                                </div>
                                <div className="buttonSample">
                                    Submit
                                </div>
                                <div className="buttonSample red">
                                    Delete
                                </div>
                            </div>

                            <div className="businessMain">

                                <div className="businessMainHeader">
                                    <div className="businessSingleBlock">
                                        <div className="businessSingleBlockImage1">
                                            {image && <img src={image} alt="" className='uploadImage' />}
                                        </div>

                                        <div className="buttonInfo">
                                            <div className="buttonHeader" >
                                                Upload photo
                                            </div>
                                            <div className="buttonSample"  onClick={() => document.getElementById("inputFile").click()}>
                                                Browse
                                            </div>
                                            <div className='noFile'>
                                                ({fileName})
                                            </div>
                                            <input
                                                id="inputFile"
                                                type="file"
                                                onChange={handleChangeImage}
                                                style={{ display: 'none' }}
                                            />
                                        </div>
                                    </div>
                                    <div className="businessSingleBlock">
                                        <div className="businessSingleBlockImage">
                                            <img src={contract} alt="businessPhoto"/>
                                        </div>
                                        <div className="buttonInfo">
                                            <div className="buttonHeader">
                                                Upload contract
                                            </div>
                                            <div className="buttonSample">
                                                Browse
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="businessForm">

                                    <div className="businessName">

                                        <div className="businessFormHeader">
                                            Business Name
                                        </div>
                                        <div className="businessInput">
                                            <input type="text" className='businessInputValue' placeholder='Resto name...'/>
                                        </div>
                                    </div>

                                    <div className="businessName">

                                        <div className="businessFormHeader">
                                            Business Description (max 100 words)
                                        </div>
                                        <div className="businessInput">
                                            <LimitedTextArea limit={100} value='' />
                                        </div>
                                    </div>

                                    <div className="mailPhone">
                                        <div className="leftContent">
                                            <div className="businessFormHeader">
                                                Email
                                            </div>
                                            <div className="businessInput">
                                                <input type="email" className='businessInputValue' placeholder='Email...'/>
                                            </div>
                                        </div>
                                        <div className="rightContent">


                                            <div className="businessFormHeader">
                                                Phone Number
                                            </div>
                                            <div className="businessInput">
                                                <input type="phone" className='businessInputValue' placeholder='Phone...'/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="countryCity">

                                        <div className="singleCountryBlock">
                                            <div className="businessFormHeader">
                                                Country
                                            </div>
                                            <div className="businessInput">
                                                <Select className='myselect' options={sellers} defaultValue={sellers[0]}  styles={customStyles2}
                                                        components={{ IndicatorSeparator:() => null }}/>
                                            </div>
                                        </div>
                                        <div className="singleCountryBlock">
                                            <div className="businessFormHeader">
                                                Province
                                            </div>
                                            <div className="businessInput">
                                                <input type="email" className='businessInputValue' placeholder='Province...'/>
                                            </div>
                                        </div>
                                        <div className="singleCountryBlock">
                                            <div className="businessFormHeader">
                                                City
                                            </div>
                                            <div className="businessInput">
                                                <input type="email" className='businessInputValue' placeholder='City...'/>
                                            </div>
                                        </div>
                                        <div className="singleCountryBlock">
                                            <div className="businessFormHeader">
                                                Postal Code
                                            </div>
                                            <div className="businessInput">
                                                <input type="email" className='businessInputValue' placeholder='Postal Code...'/>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="workBill">
                                        <div className="leftContent">
                                            <div className="businessFormHeader">
                                                Working time
                                            </div>
                                            <div className="businessInput">
                                                <input type="text" className='businessInputValue' placeholder='Working time...'/>
                                            </div>
                                        </div>
                                        <div className="rightContent">


                                            <div className="businessFormHeader">
                                                Average bill
                                            </div>
                                            <div className="businessInput">
                                                <input type="text" className='businessInputValue' placeholder='Average bill...'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="typeOfRestaurantSelect">
                                        <div className="businessFormHeader">
                                            Type of restaurant
                                        </div>
                                        <Select
                                            closeMenuOnSelect={true}
                                            components={animatedComponents}
                                            isMulti
                                            className='myselect'
                                            options={typeOfResto}
                                            styles={customStyles2}
                                        />
                                    </div>
                                </div>

                            </div>

                        </div>;
                        case 5: return <div>Content 5</div>;
                        case 6: return <div>Content 6</div>;
                        default: return <div>Choose button</div>;
                    }
                })}


            </div>
        </div>

    );
}

export default App;
