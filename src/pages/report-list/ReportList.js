import React from 'react-dom'
import './ReportList.css'
import euro from '../../assets/img/Exchange Euro.png'
import bill from '../../assets/img/Paid Bill.png'
import unpaid from '../../assets/img/Payment History.png'
import paid from '../../assets/img/Transaction Approved.png'
import bursts from '../../assets/img/Bursts.png'
import {options} from "../admin/main-stats/data";
import dots from "../../assets/img/dots.png";
import Select from "react-select";
import Table from "../../ui-components/table/Table";
import {useState} from "react";
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import arrow from '../../assets/img/Arrow 9.png'


export default function ReportList() {
    const [search, setSearch] = useState('');
    const [value, onChange] = useState([new Date(), new Date()]);

    const options = [
        {value: 'all', label: 'All transactions'},
        {value: 'daily', label: 'Oct 1, 2019 → Nov 1, 2019'},
        {value: 'yearly', label: 'Oct 1, 2019 → Nov 1, 2019'},
        {value: 'yearly', label: 'Oct 1, 2019 → Nov 1, 2019'},
        {value: 'yearly', label: 'Oct 1, 2019 → Nov 1, 2019'},
        {value: 'yearly', label: 'Oct 1, 2019 → Nov 1, 2019'},
        {value: 'yearly', label: 'Oct 1, 2019 → Nov 1, 2019'}
    ]
    const options2 = [
        {value: 'all', label: 'Oct 1, 2019 → Nov 1, 2019'},
        {value: 'daily', label: 'Daily'},
        {value: 'yearly', label: 'Yearly'}
    ]

    const customStyles = {

        menu: (provided, state) => ({
            ...provided,
            width: 'calc(100% + 50px)', // You can set the width to any desired value
            padding: '5px',

        }),

        menuList: (provided, state) => ({
            ...provided,
            maxHeight: '150px', // Set the maximum height of the menu list
            overflowY: 'auto', // Make the menu list scrollable if the content exceeds the maximum height
            paddingRight: '7px',
            '::-webkit-scrollbar': {
                width: '7px',
                height: '1em',
            },
            '::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
                boxShadow: 'inset 0 0 5px white',
                borderRadius: '400px',
            },
            '::-webkit-scrollbar-thumb': {
                background: '#D9D9D9',
                borderRadius: '400px',
            },
        }),

        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: state.isSelected ? "#fff" : "#5541D7",
            backgroundColor: state.isSelected ? "#5541D7" : "#E6E6FA",
            border: state.isSelected ? `none`: '1px solid #8876FF',
            borderRadius: '10px',
            marginTop: '5px',
            padding: '10px',
            cursor: 'pointer'
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

    const  headers = ["ID", "Amount of transactions", "Turnover", "MaitseTuur Share", "Period of Report", "Status"];

    const columnSizes = ["2%", "7%", "5%", "5%", "10%", "5%"];
    const table = [
        {
            id : '1',
            name : 'Name',
            email: 'smth',
            totalVisits: '43',
            contractFile: <div>Oct 1, 2019 <img src={arrow} alt="" className="arrowTable"/> Nov 1, 2019</div>,
            totalRecieved: <div className='buttonTable unpaid'>Unpaid</div>
        },
        {
            id : '2',
            name : 'Name',
            email: 'smth',
            totalVisits: '43',
            contractFile: <div>Oct 1, 2019 <img src={arrow} alt="" className="arrowTable"/> Nov 1, 2019</div>,
            totalRecieved: <div className='buttonTable paid'>Paid</div>
        }
    ]

    return(
        <>
            <div className="rightBlock1">
                <div className="reportMain">
                    <div className="reportHeader">
                        <div className="leftReportHeader">
                            List of Financial Reports
                        </div>
                        <div className="rightReportHeader">
                            <div className="reportDownload">
                                Download All Reports
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
                                    All Reports Status
                                </div>
                            </div>
                            <div className="reportMainContentSingleSection">
                                <div className="reportMainContentSingleSectionContent">
                                    <div className="singleSectionIcon">
                                        <img src={bursts} alt="" className='singleSectionIconImage'/>
                                    </div>
                                    <div className="singleSectionText">
                                        <div className="singleSectionUpperText pink">
                                            24
                                        </div>
                                        <div className="singleSectionLowerText">
                                            All reports
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="reportMainContentSingleSection">
                                <div className="reportMainContentSingleSectionContent">
                                    <div className="singleSectionIcon">
                                        <img src={paid} alt="" className='singleSectionIconImage'/>
                                    </div>
                                    <div className="singleSectionText">
                                        <div className="singleSectionUpperText green">
                                            23
                                        </div>
                                        <div className="singleSectionLowerText">
                                            Paid Reports
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
                                            1
                                        </div>
                                        <div className="singleSectionLowerText">
                                            Unpaid Reports
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reportMainContentDropDownSection">
                            <div className="reportMainContentDropDowns">
                                <Select  options={options}
                                        defaultValue={options[0]}
                                        styles={customStyles}
                                        components={{IndicatorSeparator: () => null}}/>
                                <div>
                                    <DateRangePicker onChange={onChange} value={value} />
                                </div>
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
