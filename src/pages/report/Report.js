import React, {useState, useEffect, useRef} from 'react'
import './Report.css'
import euro from '../../assets/img/Exchange Euro.png'
import bill from '../../assets/img/Paid Bill.png'
import unpaid from '../../assets/img/Payment History.png'
import paid from '../../assets/img/Transaction Approved.png'
import dots from "../../assets/img/dots.png";
import Select from "react-select";
import Table from "../../ui-components/report-transactions-table/Table";
import {options, options2, customStyles, headers, columnSizes, table} from './constants';
import {useNavigate, useParams} from "react-router-dom";
import accountantServices from "../../services/accountant";
import toast from "react-hot-toast";
import arrow from "../../assets/img/Arrow 9.png";
import {
    LoadingAnimationCircular
} from "../../ui-components/loading-animation/loading-animaiton-circular/LoadingAnimationCircular";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import {downloadReportBlobFile} from "./utils";

export default function Report() {
    const navigate = useNavigate();
    const {reportId} = useParams();

    const [search, setSearch] = useState('');
    const [value, onChange] = useState(null);
    const [reportData, setReportData] = useState(null);
    const [turnover, setTurnover] = useState(null);
    const [maitsetuurShare, setMaitsetuurShare] = useState(null);
    const [status, setStatus] = useState(null);
    const [selectedPeriod, setSelectedPeriod] = useState(null);


    const resetFilters = () => {
        setSearch('');
        onChange(null);
    };

    useEffect(() => {
        if (reportId) {
            getReportDataOnMount()
        }
    }, [reportId]);

    const getReportDataOnMount = async () => {
        try {
            const result = await accountantServices.getReportTransactionsData(reportId)
            setReportData(result.data)
            setTurnover(result.data?.turnover)
            setMaitsetuurShare(result.data?.maitsetuurShare)
            setStatus(result.data?.status)

            console.log(result)

        } catch (error) {
            // navigate('/dashboard')
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
    }

    const filteredItems = reportData?.transactions?.filter(item => {
        const searchTerm = search?.toLowerCase();
        const transactionDate = new Date(item.activationDate).getTime();

        // Filter by search term
        if (searchTerm && !Object.values(item).some(value =>
            value && value.toString()?.toLowerCase().includes(searchTerm))) {
            return false;
        }

        // Filter by date range
        if (selectedPeriod && (transactionDate < selectedPeriod[0] || transactionDate > selectedPeriod[1])) {
            return false;
        }

        return true;
    });


    const handleDateChange = (selectedDates) => {
        if (selectedDates) {
            let period = selectedDates.map(date => date.getTime());
            console.log(selectedDates)
            console.log(period)
            setSelectedPeriod(period);
            onChange(selectedDates);
            return;
        }
        console.log(selectedDates)
        setSelectedPeriod(selectedDates)
        onChange(selectedDates);
    };

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
                                Report #{reportId?.split('-')[0]}
                            </div>
                        </div>
                        <div className="rightReportHeader">
                            <div className="reportDownload" onClick={() => downloadReportBlobFile(reportId)}>
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
                                            {turnover ?
                                                '€' + turnover
                                                :
                                                <LoadingAnimationCircular/>
                                            }
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
                                            {maitsetuurShare ?
                                                '€' + maitsetuurShare
                                                :
                                                <LoadingAnimationCircular/>
                                            }
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
                                        <img src={status === 'PAID' ? paid : unpaid} alt=""
                                             className='singleSectionIconImage'/>
                                    </div>
                                    <div className="singleSectionText">
                                        {status ?
                                            status === 'PAID' ?
                                                <div className="singleSectionUpperText green">{status}</div>
                                                :
                                                <div className="singleSectionUpperText ruby">{status}</div>
                                            :
                                            <LoadingAnimationCircular/>
                                        }
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
                                <DateRangePicker
                                    minDetail={'year'}
                                    minDate={new Date(2023, 0, 1)}
                                    maxDate={new Date()}
                                    rangeDivider={' to '}
                                    onChange={handleDateChange}
                                    value={value}/>
                            </div>
                            <div onClick={resetFilters} className="reportMainContentResetButton">
                                Reset Filters
                            </div>
                        </div>
                    </div>
                    <div className="reportMainContentList">
                        <div className="searchAndDots">
                            <div className="search">
                                <button type="submit" className="searchButton">
                                    <i className="fa fa-search"/>
                                </button>
                                <input type="text" className="searchTerm" value={search}
                                       onChange={(e) => setSearch(e.target.value)}
                                       placeholder="What are you looking for?"/>
                            </div>
                            <img src={dots} alt="" className='searchDots'/>
                        </div>
                        <Table filteredItems={filteredItems} search={search} headers={headers} items={table}
                               columnSizes={columnSizes}/>
                    </div>
                </div>
            </div>
        </>

    )

}
