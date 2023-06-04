import React from "react";
import {LoadingAnimationCircular} from "../loading-animation/loading-animaiton-circular/LoadingAnimationCircular";
import {useNavigate} from "react-router-dom";
import arrow from "../../assets/img/Arrow 9.png";
import {scrollTop} from "../../pages/business-coupon-order/tools";

function Table({filteredItems, columnSizes, search}) {

    const sortedItems = React.useMemo(() => {
        if (filteredItems) {
            return [...filteredItems].sort((a, b) => {
                let dateA = new Date(a.activationDate + "T" + a.activationTime);
                let dateB = new Date(b.activationDate + "T" + b.activationTime);
                return dateA - dateB;
            });
        }
        return null;
    }, [filteredItems]);

    return (
        <div className='overflownContent'>
            {!sortedItems ?
                <div className="loadingWrapper">
                    <LoadingAnimationCircular/>
                </div>
                : sortedItems?.length === 0 ?
                    <h1 className="noDataList">No data...</h1>
                    :
                    <table className="table">
                        <thead className="thead">
                        <tr className="tr">
                            <th scope="col" className="th" style={{width: columnSizes[0]}}>ID</th>
                            <th scope="col" className="th" style={{width: columnSizes[1]}}>Activation Date</th>
                            <th scope="col" className="th" style={{width: columnSizes[2]}}>Activation Time</th>
                            <th scope="col" className="th" style={{width: columnSizes[3]}}>Waiter Full Name</th>
                            <th scope="col" className="th" style={{width: columnSizes[4]}}>Amount Spent</th>
                        </tr>
                        </thead>
                        <tbody className="tbody">

                        {sortedItems.map((item, index) => (

                            <tr key={index}>
                                <th className="td" scope="row">
                                    {item.uuid?.split('-')[0]}
                                </th>
                                <td className="td">{item.activationDate}</td>
                                <td className="td">{item.activationTime}</td>
                                <td className="td">{item.waiterFullName}</td>
                                <td className="td">{item.amountSpent}</td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
            }

        </div>
    );
}

export default Table;
