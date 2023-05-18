import React, {useState, useEffect, useRef} from 'react'
import './ReportList.css'
import unpaid from '../../assets/img/Payment History.png'
import paid from '../../assets/img/Transaction Approved.png'
import bursts from '../../assets/img/Bursts.png'
import dots from "../../assets/img/dots.png";
import Select from "react-select";
import Table from "../../ui-components/table/Table";
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
    const [value, onChange] = useState([new Date(), new Date()]);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const selectInputRef = useRef();
    const [listData, setListData] = useState(null);
    const [paidReportsCount, setPaidReportsCount] = useState(0);
    const [unpaidReportsCount, setUnpaidReportsCount] = useState(0);
    const [selectedPeriod, setSelectedPeriod] = useState(null);


    const resetFilters = () => {
        setSearch('');
        selectInputRef.current.setValue('');
        setShowDatePicker(false);
    };

    const getAllReportsOnMount = async () => {
        try {
            const result = await accountantServices.getAllReports()
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
        if (searchTerm === "") {
            return true;
        }

        if (searchTerm !== "" && !Object.values(item).some(
            value => value && value.toString()?.toLowerCase().includes(searchTerm)
        )) {
            return false;
        }

        console.log('ebana')

        const reportFromDate = new Date(item.reportFrom);
        const reportToDate = new Date(item.reportTo);

        if ((reportFromDate < selectedPeriod[0] || reportFromDate > selectedPeriod[1]) ||
            (reportToDate < selectedPeriod[0] || reportToDate > selectedPeriod[1])) {
            console.log('in the range')
            return false;
        }

        console.log(selectedPeriod)

        return true;
    });

    useEffect(() => {
        getAllReportsOnMount()
    }, []);


    const handleSelectChange = selectedOption => {
        if (selectedOption.value !== 'custom') {
            setSelectedPeriod(selectedOption.value?.split(" - "))
        }
        setShowDatePicker(selectedOption.value === 'custom');
    };

    const handleDateChange = (selectedDates) => {
        const currentDate = new Date();
        const isFutureDate = selectedDates?.some(date => date && date > currentDate);
        const isBeforeMinimumYear = selectedDates?.some(date => date && date.getFullYear() < 2022);

        if (isFutureDate) {
            return;
        }

        if (isBeforeMinimumYear) {
            return;
        }
        const dateStrings = selectedDates.map(date => date.toISOString().slice(0,10));
        console.log(dateStrings)
        setSelectedPeriod(selectedDates)
        onChange(selectedDates);
    };


    return (
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
