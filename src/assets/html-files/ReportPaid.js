import React from "react-dom";
import './ReportPaid.css'

export const  ReportPaid = () => {

    return (

        <>
        <div className="reportPdf">
            <div className="reportContent">
                <div className="reportPdfHeader">
                    <div className="reportPdfHeaderLeft">
                        <div className="reportPdfIcon">
                            <div className="roundedImg">
                            </div>
                        </div>
                        <div className="reportPdfHeaderValues">
                            <div className="reportPdfCompany">
                                MaitseTuur
                            </div>
                            <div className="reportPdfReportNo">
                                Report #1
                            </div>
                            <div className="reportPdfDescription">
                                Report description
                            </div>
                        </div>
                    </div>
                    <div className="reportPdfHeaderRight">
                        <div className="reportPdfStatus">
                            Status
                        </div>
                        <div className="reportPdfPaid">
                            Paid
                        </div>
                    </div>
                </div>
                <div className="reportPdfSubHeader">
                    <div className="reportPdfSubHeaderLeft">
                        <div className="reportPdfSubHeaderTittle">
                            Reported period
                        </div>
                        <div className="reportPdfSubHeaderDate">
                            January 1 - April 22, 2023
                        </div>
                    </div>
                    <div className="reportPdfSubHeaderRight">
                        <div className="reportPdfSubHeaderRightSingle">
                            <div className="reportPdfSubHeaderTittle">
                                Turnover
                            </div>
                            <div className="reportPdfSubHeaderValue">
                                99,999.00€
                            </div>
                        </div>
                        <div className="reportPdfSubHeaderRightSingle">
                            <div className="reportPdfSubHeaderTittle">
                                MaitseTuur Share
                            </div>
                            <div className="reportPdfSubHeaderValue">
                                99,999.00€
                            </div>
                        </div>
                        <div className="reportPdfSubHeaderRightSingle">
                            <div className="reportPdfSubHeaderTittle">
                                Netto
                            </div>
                            <div className="reportPdfSubHeaderValue">
                                99,999.00€
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reportPdfAmount">
                    <div className="reportPdfDetails">
                        Details
                    </div>
                    <div className="reportPdfTotalAmount">
                        Certificates: 999
                    </div>
                </div>
                <div className="reportPdfTable">
                    <table className='reportPdfTable'>
                        <thead>
                        <tr>
                            <th className="reportPdfCertificate">Certificate</th>
                            <th className="reportPdfActivationDate">Activation Date</th>
                            <th className="reportPdfActivationTime">Activation Time</th>
                            <th className="reportPdfWaitersName">Waiter's Name</th>
                            <th className="reportPdfSpent">Spent</th>
                            <th className="reportPdfRemaining">Remaining</th>
                            <th className="reportPdfTotal">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Certificate #1</td>
                            <td>January 1, 2023</td>
                            <td>January 1, 2023</td>
                            <td>Ivan Zalupenko</td>
                            <td>25,43€</td>
                            <td>24,57€</td>
                            <td>50,00€</td>
                        </tr>
                        <tr>
                            <td>Certificate #1</td>
                            <td>January 1, 2023</td>
                            <td>January 1, 2023</td>
                            <td>Ivan Zalupenko</td>
                            <td>25,43€</td>
                            <td>---</td>
                            <td>50,00€</td>
                        </tr>
                        <tr>
                            <td>Certificate #1</td>
                            <td>January 1, 2023</td>
                            <td>January 1, 2023</td>
                            <td>Ivan Zalupenko</td>
                            <td>25,43€</td>
                            <td>24,57€</td>
                            <td>50,00€</td>
                        </tr>
                        <tr>
                            <td>Certificate #1</td>
                            <td>January 1, 2023</td>
                            <td>January 1, 2023</td>
                            <td>Ivan Zalupenko</td>
                            <td>25,43€</td>
                            <td>24,57€</td>
                            <td>50,00€</td>
                        </tr>
                        <tr>
                            <td>Certificate #1</td>
                            <td>January 1, 2023</td>
                            <td>January 1, 2023</td>
                            <td>Ivan Zalupenko</td>
                            <td>25,43€</td>
                            <td>24,57€</td>
                            <td>50,00€</td>
                        </tr>
                        <tr>
                            <td>Certificate #1</td>
                            <td>January 1, 2023</td>
                            <td>January 1, 2023</td>
                            <td>Ivan Zalupenko</td>
                            <td>25,43€</td>
                            <td>24,57€</td>
                            <td>50,00€</td>
                        </tr>
                        <tr>
                            <td>Certificate #1</td>
                            <td>January 1, 2023</td>
                            <td>January 1, 2023</td>
                            <td>Ivan Zalupenko</td>
                            <td>25,43€</td>
                            <td>24,57€</td>
                            <td>50,00€</td>
                        </tr>
                        <tr>
                            <td>Certificate #1</td>
                            <td>January 1, 2023</td>
                            <td>January 1, 2023</td>
                            <td>Ivan Zalupenko</td>
                            <td>25,43€</td>
                            <td>24,57€</td>
                            <td>50,00€</td>
                        </tr>
                        <tr>
                            <td>Certificate #1</td>
                            <td>January 1, 2023</td>
                            <td>January 1, 2023</td>
                            <td>Ivan Zalupenko</td>
                            <td>25,43€</td>
                            <td>24,57€</td>
                            <td>50,00€</td>
                        </tr>
                        <tr>
                            <td>Certificate #1</td>
                            <td>January 1, 2023</td>
                            <td>January 1, 2023</td>
                            <td>Ivan Zalupenko</td>
                            <td>25,43€</td>
                            <td>24,57€</td>
                            <td>50,00€</td>
                        </tr>
                        <tr>
                            <td>Certificate #1</td>
                            <td>January 1, 2023</td>
                            <td>January 1, 2023</td>
                            <td>Ivan Zalupenko</td>
                            <td>25,43€</td>
                            <td>24,57€</td>
                            <td>50,00€</td>
                        </tr>
                        <tr>
                            <td>Certificate #1</td>
                            <td>January 1, 2023</td>
                            <td>January 1, 2023</td>
                            <td>Ivan Zalupenko</td>
                            <td>25,43€</td>
                            <td>24,57€</td>
                            <td>50,00€</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <div className="reportPdfBill">
                    <div className="reportPdfSubTotal">
                        <div className="reportPdfSubTotalText">
                            Sub total
                        </div>
                        <div className="reportPdfSubTotalValue">
                            500.00€
                        </div>
                    </div>
                    <div className="reportPdfVat">
                        <div className="reportPdfVatText">
                            Vat 20%
                        </div>
                        <div className="reportPdfVatValue">
                            100.00€
                        </div>
                    </div>
                    <div className="reportPdfGrandTotal">
                        <div className="reportPdfGrandTotalText">
                            GRAND TOTAL
                        </div>
                        <div className="reportPdfGrandTotalValue">
                            600.00€
                        </div>
                    </div>
                </div>
                <div className="reportPdfFooter">
                    <div className="reportPdfFooterLeft">
                        MaitseTuur
                    </div>
                    <div className="reportPdfFooterReg">
                        Reg. Num: 2281337666
                    </div>
                </div>
            </div>
        </div>
        </>

    )

}