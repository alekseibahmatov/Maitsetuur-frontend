import React from "react-dom";
import './ReportPaid.css'

export const  ReportPersonal = () => {

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
                                    Receipt #533454
                                </div>
                                <div className="reportPdfDescription">
                                    Receipt description
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reportPdfSubHeader">
                        <div className="reportPdfSubHeaderLeft">
                            <div className="reportPdfSubHeaderTittle">
                                Bill to:
                            </div>
                            <div className="reportPdfSubHeaderDate">
                                Kitaec Akim
                            </div>
                            <div className="reportPdfSubHeaderAddress">
                                Sõstra 4 40, Tallinn, Estonia
                            </div>
                        </div>
                        <div className="reportPdfSubHeaderRight">
                            <div className="reportPdfSubHeaderRightSingle">
                                <div className="reportPdfSubHeaderTittle">
                                    Receipt date:
                                </div>
                                <div className="reportPdfSubHeaderValue">
                                    01-01-2023
                                </div>
                            </div>
                            <div className="reportPdfSubHeaderRightSingle">
                                <div className="reportPdfSubHeaderTittle">
                                    Receipt No.:
                                </div>
                                <div className="reportPdfSubHeaderValue">
                                    #533454
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reportPdfAmount">
                        <div className="reportPdfDetails">
                            Details
                        </div>
                        <div className="reportPdfTotalAmount">
                            Certificates: 1
                        </div>
                    </div>
                    <div className="reportPdfTable">
                        <table className='reportPdfTablePersonal'>
                            <thead>
                            <tr>
                                <th className="reportPdfCertificate">Coupon</th>
                                <th className="reportPdfActivationDate">Activation from</th>
                                <th className="reportPdfActivationTime">Activation to</th>
                                <th className="reportPdfWaitersName">Nominal</th>
                                <th className="reportPdfSpent">Receiver email</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Coupon #1</td>
                                <td>January 1, 2023</td>
                                <td>January 1, 2024</td>
                                <td>500€</td>
                                <td>genryeiter@gmail.com</td>
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