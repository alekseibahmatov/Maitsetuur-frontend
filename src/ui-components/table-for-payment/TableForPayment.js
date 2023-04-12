import React, { useState, useEffect } from 'react';
import './TableForPayment.css';

const TableForPayment = ({ items }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].price * items[i].quantity;
        }
        setTotal(sum);
    }, [items]);

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
                        <td>€{item.price.toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="total-wrapper">
                <div className="total-label">Total</div>
                <div className="total-amount">€{total.toFixed(2)}</div>
            </div>
        </div>
    );
};

export default TableForPayment;
