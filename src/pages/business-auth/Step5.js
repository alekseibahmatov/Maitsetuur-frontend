import React from "react-dom";
import './BusinessAuth.css'
import {useState} from "react";
import {ErrorMessage, Field} from "formik";
import sausage from '../../assets/img/sosiska.png'
import TableForPayment from "../../ui-components/table-for-payment/TableForPayment";

export const Step5 = () =>{

    const [step, setStep] = useState(4);

    const items = [
        { item: 'Certificate 50$', quantity: 2, price: 50 },
        { item: 'Certificate 150$', quantity: 3, price: 150 },
        { item: 'Certificate 228$', quantity: 1, price: 228 },
    ];

    return (

        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Add Business Information
                </div>
                <div className="loginFormForm">
                    <div className="loginFormBusiness">
                        <div className="authNumbers">
                            <div className="singleNumber activated">
                                1
                            </div>
                            <div className="numberLineBusiness">
                            </div>
                            <div className={step > 0 ? "singleNumber activated" : "singleNumber"}>
                                2
                            </div>
                            <div className="numberLineBusiness">
                            </div>
                            <div className={step > 1 ? "singleNumber activated" : "singleNumber"}>
                                3
                            </div>
                            <div className="numberLineBusiness">
                            </div>
                            <div className={step > 2 ? "singleNumber activated" : "singleNumber"}>
                                4
                            </div>
                            <div className="numberLineBusiness">
                            </div>
                            <div className={step > 3 ? "singleNumber activated" : "singleNumber"}>
                                5
                            </div>
                        </div>
                        <div className="loginFormHeader">
                            Please fill out the multiple step form
                            with required info
                        </div>
                        <div className="successMessage">
                            <div className="sausageLogoImage">
                                <img src={sausage} alt="" className='smallSosiskaLehi'/>
                            </div>
                            <div className="thankYouMessage">
                                Thank you for purchase!
                            </div>
                        </div>
                        <div className="inputBoards">
                            <TableForPayment items={items} />
                            <div className="downloadReceipt">
                                Download order receipt
                            </div>
                            <button  className="loginButtonBusiness">
                                Get Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}