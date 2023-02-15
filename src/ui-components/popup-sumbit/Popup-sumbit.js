import React, {useEffect} from 'react';
import Sausages from '../../assets/img/Sausages.png'

function PopupSumbit({errors, isOpen, toggleModal}) {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isOpen]);

    if (isOpen) return (
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
                    {errors && Object.keys(errors).length > 0 && (
                        <div className="generalErrorText">
                            Something went wrong, check the form again
                        </div>
                    )}
                    <button type="submit" className="doAction">
                        Do action
                    </button>
                    <div className="goBack" onClick={toggleModal}>
                        Go back
                    </div>
                </div>
            </div>
        </div>
    )

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
                            <button type="submit" className="doAction">
                                Do action
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

