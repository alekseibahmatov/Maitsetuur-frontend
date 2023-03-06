import React, {useEffect} from 'react';
import Sausages from '../../assets/img/Sausages.png'
import {LoadingAnimationDots} from "../loading-animation/loading-animation-dots/LoadingAnimationDots";

function PopupSumbit({actionName, props, isOpen, toggleModal}) {

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isOpen]);


    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content1">
                        <div className="sausages">
                            <img src={Sausages} alt="sausages"/>
                            <div className="sumbitAction">
                                Submit action
                            </div>
                            <div className="areYouSure">
                                Are you sure, that you want to
                                do this action?
                            </div>
                            {props.errors && Object.keys(props.errors).length > 0 && (
                                <div className="generalErrorText">
                                    Something went wrong, check the form again
                                </div>
                            )}
                            <button type="submit" className="doAction">
                                {props.isSubmitting ? <LoadingAnimationDots/> : actionName}
                            </button>
                            <div className="goBack" onClick={toggleModal}>
                                Go back
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PopupSumbit;

