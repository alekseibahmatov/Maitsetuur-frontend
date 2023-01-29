import React, { useEffect } from 'react';
import Sausages from '../../assets/img/Sausages.png'

function PopupSumbit({isOpen, toggleModal}) {
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
                            <div className="doAction">
                                Do action
                            </div>
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

