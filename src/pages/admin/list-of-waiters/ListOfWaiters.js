import React, {useState, useEffect} from "react";
import '../list-of-coupons/data'
import dots from "../../../assets/img/dots.png";
import {table} from '../main-stats/data'
import adminServices from "../../../services/admin";
import toast from "react-hot-toast";
import {
    LoadingAnimationCircular
} from "../../../ui-components/loading-animation/loading-animaiton-circular/LoadingAnimationCircular";
import {Link} from "react-router-dom";

export const ListOfWaiters = () => {
    const [search, setSearch] = useState('');
    const [listData, setListData] = useState(null);

    const getAllRestaurantsOnMount = async () => {
        try {
            const result = await adminServices.getAllRestaurants()
            setListData(result.data)
        } catch (error) {
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
    }

    useEffect(() => {
        getAllRestaurantsOnMount()
    }, []);

    return (
        <div className='rightBlock1'>
            <div className="waitersButton">
                <div className="waitersHeader">
                    List Of Restaurants
                </div>
            </div>

            <div className="waitersMain" style={{display: "block"}}>
                <div className="searchAndDots">
                    <div className="search">
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"/>
                        </button>
                        <input type="text" className="searchTerm"
                               onChange={(e) => setSearch(e.target.value)}
                               placeholder="What are you looking for?"/>

                    </div>
                    <div className="dots">
                        <img src={dots} alt="dots"/>
                    </div>
                </div>
                <div className="overflownContent">
                    {listData ?
                        <table>
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Restaurant Name</th>
                                <th scope="col">Restaurant Email</th>
                                <th scope="col">Restaurant Phone</th>
                                <th scope="col">Restaurant Average Bill</th>
                            </tr>
                            </thead>

                            <tbody>

                            {listData.filter((item) => {
                                const searchTerm = search.toLowerCase();
                                if (searchTerm === '') {
                                    return true;
                                }
                                return Object.values(item).some(value => {
                                    const strValue = value.toString().toLowerCase();
                                    return strValue.includes(searchTerm);
                                });
                            }).map((item, i) => (
                                <tr key={i}>
                                    <th scope="row">{item.restaurantCode}</th>
                                    <td>
                                        <Link to={`/dashboard/restaurant-info/${item.restaurantCode}`}>
                                            {item.restaurantName}
                                        </Link>
                                    </td>
                                    <td>{item.restaurantEmail}</td>
                                    <td>{item.restaurantPhone}</td>
                                    <td>{item.averageBill}</td>
                                </tr>
                            ))}
                            </tbody>

                        </table>
                        :
                        listData === {} ?
                            'no data'
                            :
                            <div style={{marginTop: 40, textAlign: "center"}}>
                                <LoadingAnimationCircular/>
                            </div>
                    }

                </div>
            </div>


        </div>
    )

}
export default ListOfWaiters