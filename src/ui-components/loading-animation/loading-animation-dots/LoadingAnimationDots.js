import React from "react";
import './LoadingAnimationDots.css'


export const LoadingAnimationDots = () => {
    return (
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}