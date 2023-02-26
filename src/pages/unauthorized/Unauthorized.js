import React from 'react';
import {useNavigate} from "react-router-dom"
import sosiska from "../../assets/img/sosiska.png";
import './Unauthorized.css'

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div className='errorContent'>
            <div className="unauthorizedHeader">
                Unauthorized
            </div>
            <div className="unauthorizedDescription">
                You don't have permission to visit this page <br/>
                <button className="errorButton" onClick={goBack}>Click to go back</button>
            </div>
        </div>
    )
}

export default Unauthorized