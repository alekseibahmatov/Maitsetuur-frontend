import React, {useEffect, useState} from "react";
import './BusinessAuth.css'
import sausage from '../../assets/img/sosiska.png'
import TableForPayment from "../../ui-components/table-for-payment/TableForPayment";
import BusinessCouponOrderHeader from "../../ui-components/business-coupon-order-header/BusinessCouponOrderHeader";
import {useNavigate} from "react-router-dom";

export const Step5 = () =>{
    const navigate = useNavigate();
    const [step, setStep] = useState(4);

    useEffect(() => {
        const storedData = localStorage.getItem("businessFormData");
        if (!storedData) {
            navigate("/step1");
        }

        const parsedData = storedData ? JSON.parse(storedData) : null;
        if (!parsedData?.generalCouponObject) {
            navigate("/step4");
        }
    }, []);

    const storedData = localStorage.getItem('businessFormData');
    if (!storedData) {
        navigate('/step1');
        return null;
    }

    const parsedData = storedData ? JSON.parse(storedData) : null;
    if (!parsedData.generalCouponObject) {
        navigate('/step4');
        return null;
    }

    const coupons = parsedData ? parsedData.generalCouponObject : [];

    const nominalValues = [...new Set(coupons.map(coupon => coupon.nominalValue))];

    const items = nominalValues.map(nominalValue => {
        const filteredCoupons = coupons.filter(coupon => coupon.nominalValue === nominalValue);
        const quantity = filteredCoupons.length;
        const price = parseFloat(nominalValue);
        return { item: `Certificate ${nominalValue}$`, quantity, price };
    }).sort((a, b) => a.price - b.price);

    const total = items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);

    return (

        <>
            <div className="loginContent">
                <div className="loginHeader">
                    Order details
                </div>
                <div className="loginFormForm">
                    <div className="loginFormBusiness">
                        <BusinessCouponOrderHeader step={step}/>
                        <div className="successMessage">
                            <div className="sausageLogoImage">
                                <img src={sausage} alt="" className='smallSosiskaLehi'/>
                            </div>
                            <div className="thankYouMessage">
                                Thank you for purchase!
                            </div>
                        </div>
                        <div className="inputBoards">
                            <TableForPayment items={items} total={total}/>
                            <div className="downloadReceipt">
                                Download order receipt
                            </div>
                            <button onClick={() => {
                                navigate('/')
                                localStorage.removeItem('businessFormData')
                            }}  className="loginButtonBusiness">
                                Get Back To Homepage
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
