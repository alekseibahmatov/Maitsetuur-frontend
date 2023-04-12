import React from 'react-dom'
import './Report.css'
import euro from '../../assets/img/Exchange Euro.png'
import bill from '../../assets/img/Paid Bill.png'
import unpaid from '../../assets/img/Payment History.png'
import paid from '../../assets/img/Transaction Approved.png'
import {options} from "../admin/main-stats/data";
import dots from "../../assets/img/dots.png";
import Select from "react-select";
import Table from "../../ui-components/table/Table";
import {useState} from "react";

export default function Report() {
    const [search, setSearch] = useState('');

    const options = [
        {value: 'all', label: 'All transactions'},
        {value: 'daily', label: 'Daily'},
        {value: 'yearly', label: 'Yearly'}
    ]
    const options2 = [
        {value: 'all', label: 'Oct 1, 2019 → Nov 1, 2019'},
        {value: 'daily', label: 'Daily'},
        {value: 'yearly', label: 'Yearly'}
    ]

    const customStyles = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: state.isSelected ? "#fff" : "#5541D7",
            backgroundColor: state.isSelected ? "#5541D7" : "#Fff",
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "#E6E6FA",
            minWidth: '250px',
            padding: "3px 20px",
            border: "1px solid #E6E6FA",
            boxShadow: "none",
            borderRadius: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',
            "@media only screen and (max-width: 840px)": {
                ...defaultStyles["@media only screen and (max-width: 600px)"],
                maxWidth: '400px',
                width: '100%',
            },
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

    const  headers = ["ID", "Name", "Email", "Total Visit", "Contract File", "Total Received"];

    const columnSizes = ["2%", "7%", "5%", "10%", "5%", "5%"];
    const table = [

    ]

    return(
        <>
            <div className="rightBlock1">
                <div className="reportMain">
                    <div className="reportHeader">
                        <div className="leftReportHeader">
                            Report Generator
                        </div>
                        <div className="rightReportHeader">
                            <div className="reportDownload">
                                Download report
                            </div>
                            <div className="reportContactUs">
                                Contact Us
                            </div>
                        </div>
                    </div>
                    <div className="reportMainContent">
                        <div className="reportMainContentHeaderSection">
                            <div className="reportMainContentHeader">
                                <div className="reportMainContentHeaderUpperPart">
                                    Quick Data
                                </div>
                                <div className="reportMainContentHeaderLowerPart">
                                    Turnover,Share,Netto
                                </div>
                            </div>
                            <div className="reportMainContentSingleSection">
                                <div className="reportMainContentSingleSectionContent">
                                    <div className="singleSectionIcon">
                                        <img src={euro} alt="" className='singleSectionIconImage'/>
                                    </div>
                                    <div className="singleSectionText">
                                        <div className="singleSectionUpperText green">
                                            €50.000
                                        </div>
                                        <div className="singleSectionLowerText">
                                            Turnover
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="reportMainContentSingleSection">
                                <div className="reportMainContentSingleSectionContent">
                                    <div className="singleSectionIcon">
                                        <img src={bill} alt="" className='singleSectionIconImage'/>
                                    </div>
                                    <div className="singleSectionText">
                                        <div className="singleSectionUpperText pink">
                                            €20.000
                                        </div>
                                        <div className="singleSectionLowerText">
                                            MaitseTuur Share
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="reportMainContentSingleSection">
                                <div className="reportMainContentSingleSectionContent">
                                    <div className="singleSectionIcon">
                                        <img src={unpaid} alt="" className='singleSectionIconImage'/>
                                    </div>
                                    <div className="singleSectionText">
                                        <div className="singleSectionUpperText ruby">
                                            Unpaid
                                        </div>
                                        <div className="singleSectionLowerText">
                                            Status
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="reportMainContentSingleSection unshown">
                                <div className="reportMainContentSingleSectionContent">
                                    <div className="singleSectionIcon">
                                        <img src={paid} alt="" className='singleSectionIconImage'/>
                                    </div>
                                    <div className="singleSectionText">
                                        <div className="singleSectionUpperText green">
                                            Paid
                                        </div>
                                        <div className="singleSectionLowerText">
                                            Status
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reportMainContentDropDownSection">
                            <div className="reportMainContentDropDowns">
                                <Select className='myselect' options={options}
                                        defaultValue={options[0]}
                                        styles={customStyles}
                                        components={{IndicatorSeparator: () => null}}/>
                                <Select className='myselect' options={options2}
                                        defaultValue={options2[0]}
                                        styles={customStyles}
                                        components={{IndicatorSeparator: () => null}}/>
                            </div>
                            <div className="reportMainContentResetButton">
                                Reset Settings
                            </div>
                        </div>
                    </div>
                    <div className="reportMainContentList">
                        <div className="searchAndDots">
                        <div className="search">
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search"/>
                            </button>
                            <input type="text" className="searchTerm"
                                   onChange={(e) => setSearch(e.target.value)}
                                   placeholder="What are you looking for?"/>
                        </div>
                            <img src={dots} alt="" className='searchDots'/>
                        </div>
                        <Table headers={headers} items={table} columnSizes={columnSizes}></Table>
                    </div>
                </div>
            </div>
        </>

    )

}
