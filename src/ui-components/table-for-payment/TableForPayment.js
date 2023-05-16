import React from 'react';
import './TableForPayment.css';
import { useLocation } from 'react-router-dom';

const TableForPayment = () => {
    const location = useLocation();
    let storageKey;

    if (location.pathname.includes('personal-coupon-order')) {
        storageKey = 'personalFormData';
    } else if(location.pathname.includes('business-coupon-order')) {
        storageKey = 'businessFormData';
    }

    const storedData = localStorage.getItem(storageKey);
    const parsedData = storedData ? JSON.parse(storedData) : null;

    let items = [];
    let total = 0;

    if (parsedData) {
        if (storageKey === 'personalFormData') {
            const { couponData } = parsedData;
            items = [{item: `Certificate ${couponData.value}$`, quantity: 1, price: parseFloat(couponData.value)}];
        } else {
            const coupons = parsedData.generalCouponObject;

            const nominalValues = [...new Set(coupons.map(coupon => coupon.nominalValue))];

            items = nominalValues.map(nominalValue => {
                const filteredCoupons = coupons.filter(coupon => coupon.nominalValue === nominalValue);
                const quantity = filteredCoupons.length;
                const price = parseFloat(nominalValue);
                return {item: `Certificate ${nominalValue}$`, quantity, price};
            }).sort((a, b) => a.price - b.price);
        }

        total = items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
    }

    return (
        <div className="table-for-payment-wrapper">
            <table className="table-for-payment">
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.item}</td>
                        <td>{item.quantity}</td>
                        <td>€{item?.price?.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="total-wrapper">
                <div className="total-label">TOTAL</div>
                <div className="total-amount">€{total?.toFixed(2)}</div>
            </div>
        </div>
    );
};

export default TableForPayment;
