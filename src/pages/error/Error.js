import React from "react";
import sosiska from '../../assets/img/sosiska.png'
import './Error.css'
import {useNavigate} from "react-router-dom";

export const Error = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div className='errorContent'>
            <div className="sausageImage">
                <img src={sosiska} alt="sosiska" className='sosiska'/>
            </div>
            <div className="error404">
                404
            </div>
            <div className="permission">
                <div className="errorText">
                Opss... <br/> Something went wrong
                </div>
                <div className="errorButton" onClick={goBack}>Click to go back</div>
            </div>
        </div>
    )
}

export default Error