import React, {useEffect} from 'react'
import './Report.css'
import euro from '../../assets/img/Exchange Euro.png'
import bill from '../../assets/img/Paid Bill.png'
import unpaid from '../../assets/img/Payment History.png'
import paid from '../../assets/img/Transaction Approved.png'
import dots from "../../assets/img/dots.png";
import Select from "react-select";
import Table from "../../ui-components/table/Table";
import {useState} from "react";
import {options, options2, customStyles, headers, columnSizes, table} from './constants';
import {useNavigate, useParams} from "react-router-dom";
import accountantServices from "../../services/accountant";
import toast from "react-hot-toast";
import {initialValuesCreate} from "../admin/resto-business-info/formikInitialValues";
import arrow from "../../assets/img/Arrow 9.png";

export default function Report() {
    const navigate = useNavigate();
    const {reportId} = useParams();
    const [reportData, setReportData] = useState(null);
    const [search, setSearch] = useState('');

    console.log(reportId)

    useEffect(() => {
        if (reportId) {
            getReportDataOnMount()
        }
    }, [reportId]);

    const getReportDataOnMount = async () => {
        try {
            const result = await accountantServices.getReportData(reportId)
            setReportData(result.data)
            console.log(result)

        } catch (error) {
            // navigate('/dashboard')
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
    }


    return (
        <>
            <div className="rightBlock1">
                <div className="reportMain">
                    <div className="reportHeader">
                        <div className="leftReportHeaderWrapper">
                            <div className="reportGoBack" onClick={() => navigate('/dashboard/report-list')}>
                                <img src={arrow} alt="" className="arrowGoBack"/>
                                Go back
                            </div>
                            <div className="leftReportHeader">
                                Report #2345
                            </div>
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
                        <Table headers={headers} items={table} columnSizes={columnSizes}/>
                    </div>
                </div>
            </div>
        </>

    )

}
