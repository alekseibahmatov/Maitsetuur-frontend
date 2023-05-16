import React, {useState, useEffect} from 'react'
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
import {Tooltip} from 'react-tooltip'

export default function ReportList() {
    const [search, setSearch] = useState('');
    const [value, onChange] = useState([new Date(), new Date()]);
    const [tooltipText, setTooltipText] = useState('');
    const [showTooltip, setShowTooltip] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    useEffect(() => {
        if (tooltipText !== '') {
            setShowTooltip(true);
            const timer = setTimeout(() => {
                setShowTooltip(false);
                setTooltipText('');
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [tooltipText]);

    const generatePastMonthsOptions = () => {
        const currentDate = new Date();
        const options = [];

        const customPeriodOption = {value: 'custom', label: 'Custom period'};
        options.push(customPeriodOption);

        for (let i = 0; i < 12; i++) {
            const endDate = new Date();
            endDate.setMonth(currentDate.getMonth() - (i * 2));
            endDate.setDate(1);

            const startDate = new Date(endDate);
            startDate.setDate(startDate.getDate() - 13);

            const label = `${startDate.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            })} - ${endDate.toLocaleDateString('en-US', {month: 'short', day: 'numeric'})}`;
            const value = `${startDate.toISOString().slice(0, 10)} - ${endDate.toISOString().slice(0, 10)}`;

            options.push({value, label});
        }

        return options;
    };

    const options = generatePastMonthsOptions();

    const handleSelectChange = selectedOption => {
        setShowDatePicker(selectedOption.value === 'custom');
    };

    const handleDateChange = (selectedDates) => {
        const currentDate = new Date();
        const isFutureDate = selectedDates?.some(date => date && date > currentDate);
        const isBeforeMinimumYear = selectedDates?.some(date => date && date.getFullYear() < 2022);

        if (isFutureDate) {
            console.log('Selected dates include a future date');
            setTooltipText(`We can't generate reports from the future`);
            return;
        }

        if (isBeforeMinimumYear) {
            console.log('Selected dates include a date before 2022');
            setTooltipText('Please select dates from 2022 or later');
            return;
        }

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
                                <Select options={options}
                                        placeholder="All Periods"
                                        styles={customStyles}
                                        onChange={handleSelectChange}
                                        components={{IndicatorSeparator: () => null}}/>
                                <div>
                                    {showDatePicker ?
                                        <>
                                            <Tooltip
                                                anchorId="date-picker"
                                                place="top"
                                                content={tooltipText}
                                                isOpen={showTooltip}
                                            />
                                            <div id="date-picker">
                                                <DateRangePicker
                                                    onChange={handleDateChange}
                                                    value={value}/>
                                            </div>
                                        </>

                                        :
                                        null

                                    }

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
                        <Table headers={headers} items={table} columnSizes={columnSizes}/>
                    </div>
                </div>
            </div>

        </>

    )

}
