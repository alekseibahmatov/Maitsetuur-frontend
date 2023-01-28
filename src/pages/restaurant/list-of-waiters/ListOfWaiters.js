import React, {useState} from 'react';
import PopupAdmin from "../../../ui-components/popup-admin/Popup-admin";
import dots from "../../../assets/img/dots.png";
import {waiters} from "./data";

export const ListOfWaiters = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [search, setSearch] = useState('');


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return <div className='rightBlock1'>
        <div className="waitersButton">
            <div className="waitersHeader">
                List of waiters for R14
            </div>
            <div className="addWaiter" onClick={toggleModal}>
                Add waiter
            </div>
            <PopupAdmin isOpen={isModalOpen} toggleModal={toggleModal}/>
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
<div className="overflownContent">
            <table>

                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Turnover</th>
                    <th scope='col'/>
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
                        <td>
                            <div className="deleteButton">Delete</div>
                        </td>
                    </tr>))}
                </tbody>

            </table>
</div>
        </div>


    </div>;
}