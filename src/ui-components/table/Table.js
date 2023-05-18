import React from "react";
import {LoadingAnimationCircular} from "../loading-animation/loading-animaiton-circular/LoadingAnimationCircular";
import {useNavigate} from "react-router-dom";
import arrow from "../../assets/img/Arrow 9.png";

function Table({filteredItems, columnSizes, search}) {
    const navigate = useNavigate()

    return (
        <div className='overflownContent'>
            {!filteredItems ?
                <div className="loadingWrapper">
                    <LoadingAnimationCircular/>
                </div>
                : filteredItems?.length === 0 ?
                    <h1 className="noDataList">No data...</h1>
                    :
                    <table className="table">
                        <thead className="thead">
                        <tr className="tr">
                            <th scope="col" className="th" style={{width: columnSizes[0]}}>ID</th>
                            <th scope="col" className="th" style={{width: columnSizes[1]}}>Amount of Transactions</th>
                            <th scope="col" className="th" style={{width: columnSizes[2]}}>Turnover</th>
                            <th scope="col" className="th" style={{width: columnSizes[3]}}>MaitseTuur Share</th>
                            <th scope="col" className="th" style={{width: columnSizes[4]}}>Report period</th>
                            <th scope="col" className="th" style={{width: columnSizes[5]}}>Status</th>

                        </tr>
                        </thead>
                        <tbody className="tbody">

                        {filteredItems.map((item, index) => (

                            <tr onClick={() => navigate(`/dashboard/report/${item.id}`)} key={index}>
                                <th className="td" scope="row">
                                    {index}.
                                </th>
                                <td className="td">{item.transactionsAmount}</td>
                                <td className="td">{item.turnover}</td>
                                <td className="td">{item.maitsetuurShare}</td>
                                <td className="td">{item.reportFrom} <img src={arrow} alt="" className="arrowTable"/> {item.reportTo}
                                </td>
                                <td className="td">
                                    <div className='buttonTable paid'>{item.status}</div>
                                </td>
                            </tr>

                        ))}

                        </tbody>
                    </table>
            }

        </div>
    );
}

export default Table;
