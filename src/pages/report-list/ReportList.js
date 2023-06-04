import React, {useState, useEffect, useRef} from 'react'
import './ReportList.css'
import unpaid from '../../assets/img/Payment History.png'
import paid from '../../assets/img/Transaction Approved.png'
import bursts from '../../assets/img/Bursts.png'
import dots from "../../assets/img/dots.png";
import Select from "react-select";
import Table from "../../ui-components/report-list-table/Table";
import './Calendar.css'
import './DateRangePicker.css'
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import {customStyles, table, headers, columnSizes} from "./constants";
import {CSSTransition} from "react-transition-group";
import {generatePastMonthsOptions} from "./tools";
import accountantServices from "../../services/accountant";
import toast from "react-hot-toast";
import {
    LoadingAnimationCircular
} from "../../ui-components/loading-animation/loading-animaiton-circular/LoadingAnimationCircular";

export default function ReportList() {
    const [search, setSearch] = useState('');
    const [value, onChange] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const selectInputRef = useRef();
    const [listData, setListData] = useState(null);
    const [paidReportsCount, setPaidReportsCount] = useState(0);
    const [unpaidReportsCount, setUnpaidReportsCount] = useState(0);
    const [selectedPeriod, setSelectedPeriod] = useState(null);


    const resetFilters = () => {
        setSearch('');
        selectInputRef.current.setValue('');
        onChange(null);
        setShowDatePicker(false);
    };

    const getAllReportsOnMount = async () => {
        try {
            const result = await accountantServices.getAllReports()
            console.log(result)
            setListData(result.data)
            setPaidReportsCount(
                result?.data?.filter((item) => item.status === "PAID")
            );
            setUnpaidReportsCount(
                result?.data?.filter((item) => item.status === "UNPAID")
            );
        } catch (error) {
            toast.error(error.data.message ? error.data.message : 'Opss... Something went wrong');
        }
    }

    const filteredItems = listData?.filter(item => {
        const searchTerm = search?.toLowerCase();
        const reportFromDate = new Date(item.reportFrom).getTime();
        const reportToDate = new Date(item.reportTo).getTime();

        // Filter by search term
        if (searchTerm && !Object.values(item).some(value =>
            value && value.toString()?.toLowerCase().includes(searchTerm))) {
            return false;
        }

        // Filter by date range
        if (selectedPeriod && (
            (reportFromDate < selectedPeriod[0] || reportFromDate > selectedPeriod[1]) ||
            (reportToDate < selectedPeriod[0] || reportToDate > selectedPeriod[1])
        )) {
            return false;
        }

        return true;
    });


    useEffect(() => {
        getAllReportsOnMount()
    }, []);


    const handleSelectChange = (selectedOption) => {
        console.log(selectedOption)
        if (selectedOption.value !== 'custom') {
            let period = selectedOption.value?.split(" - ").map(date => new Date(date).getTime());
            setSelectedPeriod(period);
        } else {
            setSelectedPeriod(null);
        }
        setShowDatePicker(selectedOption.value === 'custom');
        onChange(null);
    };

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
                        <div className="leftReportHeader">
                            Financial Reports
                        </div>
                        <div className="rightReportHeader">
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
                                            {listData?.length ?
                                                listData?.length
                                                :
                                                <LoadingAnimationCircular/>
                                            }
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
                                            {paidReportsCount ?
                                                paidReportsCount?.length
                                                :
                                                <LoadingAnimationCircular/>
                                            }
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
                                            {unpaidReportsCount ?
                                                unpaidReportsCount.length
                                                :
                                                <LoadingAnimationCircular/>
                                            }
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
                                <Select options={generatePastMonthsOptions()}
                                        placeholder="All Periods"
                                        ref={selectInputRef}
                                        styles={customStyles}
                                        onChange={handleSelectChange}
                                        components={{IndicatorSeparator: () => null}}/>
                                <div>
                                    <CSSTransition
                                        in={showDatePicker}
                                        timeout={300}
                                        classNames="fade"
                                        unmountOnExit
                                    >
                                        <DateRangePicker
                                            minDetail={'year'}
                                            minDate={new Date(2023, 0, 1)}
                                            maxDate={new Date()}
                                            rangeDivider={' to '}
                                            onChange={handleDateChange}
                                            value={value}/>
                                    </CSSTransition>
                                </div>
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
                        <Table filteredItems={filteredItems} items={table} search={search} columnSizes={columnSizes}/>
                    </div>
                </div>
            </div>

        </>

    )

}
