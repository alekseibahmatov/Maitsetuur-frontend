import React, {useState} from 'react';
import Select from "react-select";
import dots from "../../../assets/img/dots.png";
import {Data, options, table} from "./data";
import {CustomChart} from '../../../ui-components/chart/CustomChart'

export const MainStats = () => {
    const [totalEarning, setTotalEarnings] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);

    const updateTotal = (newTotalEarnings, newTotalOrders) => {
        setTotalEarnings(newTotalEarnings);
        setTotalOrders(newTotalOrders)
    };

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
            "@media only screen and (max-width: 600px)": {
                ...defaultStyles["@media only screen and (max-width: 600px)"],
                padding: "0px 0px",
                fontWeight: 'normal',
                fontSize: '14px',
            }

        }),

        dropdownIndicator: base => ({
            ...base,
            color: "#5541D7",
            marginLeft: '20px',
        }),
        singleValue: (defaultStyles) => ({...defaultStyles, color: "#5541D7"}),


    };


    return <div className='rightBlock3'>
        <div className="blockHeader">
            {Data.map((item, i) => (<div className="singleBlock">
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
            </div>))}
        </div>

        <div className="blockMain">

            <div className="blockMainHeader">
                <div className="earnings">
                    Earnings
                </div>
                <div className="dropAndFeatures">

                    <div className='dropdown'>
                        <Select className='myselect' options={options}
                                defaultValue={options[0]}
                                styles={customStyles}
                                components={{IndicatorSeparator: () => null}}/>
                    </div>

                    <div className="features">
                        <img src={dots} alt="features"/>
                    </div>

                </div>
            </div>

            <div className="income">
                <div className="earningsOrders">
                    <div className="earningsOrdersValue">
                        $ {totalEarning}
                    </div>
                    <div className="earningsOrdersValue1">
                        {totalOrders}
                    </div>
                </div>
                <div className="earningsOrders">
                    <div className="earningsOrdersDescription">
                        Earning Overtime
                    </div>
                    <div className="earningsOrdersDescription1">
                        Total Order
                    </div>
                </div>
            </div>

            <div className="chartWrapper">
                <div className="chart">
                    <CustomChart updateTotal={updateTotal}/>
                </div>
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
            <div className="overflownContent">
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
                        </tr>))}
                    </tbody>

                </table>
            </div>
        </div>


    </div>;

}