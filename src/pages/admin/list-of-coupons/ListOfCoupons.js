import React, {useState, useEffect} from "react";
import './data'
import PopupAdmin from "../../../ui-components/popup-admin/Popup-admin";
import dots from "../../../assets/img/dots.png";
import {table} from '../main-stats/data'
import {Link, useNavigate} from "react-router-dom";
import adminServices from "../../../services/admin";
import toast from "react-hot-toast";
import {
    LoadingAnimationCircular
} from "../../../ui-components/loading-animation/loading-animaiton-circular/LoadingAnimationCircular";

export const ListOfCoupons = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('');
    const [listData, setListData] = useState(null);

    const getAllCouponsOnMount = async () => {
        try {
            const result = await adminServices.getAllCoupons()
            setListData(result.data)
        } catch (error) {
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
    }

    const filteredData = listData?.filter((item) => {
        const searchTerm = search.toLowerCase();
        if (searchTerm === '') {
            return true;
        }
        return Object.values(item).some(value => {
            const strValue = value?.toString().toLowerCase();
            return strValue?.includes(searchTerm);
        });
    });

    useEffect(() => {
        getAllCouponsOnMount()

    }, []);

    return (
        <div className='rightBlock1'>
            <div className="waitersButton">
                <div className="waitersHeader">
                    List Of Coupons
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
                </div>
                <div className="overflownContent">
                    {!filteredData ?
                        <div className="loadingWrapper">
                            <LoadingAnimationCircular/>
                        </div>
                        : filteredData?.length === 0 ?
                            <h1 className="noDataList">No data...</h1>
                            :
                            <table>
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Coupon Balance</th>
                                    <th scope="col">Remaining Balance</th>
                                    <th scope="col">Holder Name</th>
                                    <th scope="col">Sender Name</th>
                                    <th scope="col">Valid Until</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredData.map((item, i) => (
                                    <tr onClick={() => navigate(`/dashboard/coupon-info/${item.id}`)} key={i}>
                                        <th scope="row">
                                            {item.id}
                                        </th>
                                        <td>{item.value}</td>
                                        <td>{item.remainingValue}</td>
                                        <td>{item.holder}</td>
                                        <td>{item.sender}</td>
                                        <td>{item.validUntil}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                    }
                </div>
            </div>
        </div>
    )
}
export default ListOfCoupons