import React, {useState} from "react";
import './data'
import PopupAdmin from "../../../ui-components/popup-admin/Popup-admin";
import dots from "../../../assets/img/dots.png";
import {table} from '../main-stats/data'

export const LostOfCoupons = () =>{
    const [search, setSearch] = useState('');

    return (
        <div className='rightBlock1'>
            <div className="waitersButton">
                <div className="waitersHeader">
                    List of coupons
                </div>
            </div>

            <div className="waitersMain">
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

                <table>

                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Certificate Revenue</th>
                        <th scope="col">Value</th>
                        <th scope="col">Bill</th>
                        <th scope="col">Date</th>
                        <th scope='col'>Resto Name</th>
                    </tr>
                    </thead>

                    <tbody>

                    {table.filter((item) => {
                        return search.toLowerCase() === '' ? item : (item.id.includes(search) || item.id.toLowerCase().includes(search))
                    }).map((item, i) => (

                        <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.revenue}</td>
                            <td>{item.quantity}</td>
                            <td>{item.netProfit}</td>
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                        </tr>))}
                    </tbody>

                </table>
            </div>


        </div>
    )

}
export default LostOfCoupons