import React from 'react';
import './Landing.css';
import {useNavigate} from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();
    return (
        <>
            <h1>
                Landing
            </h1>
            <button style={{fontSize: '25px'}} onClick={() => navigate('kolbaska')}>
                Push me
            </button>
        </>
    )
}