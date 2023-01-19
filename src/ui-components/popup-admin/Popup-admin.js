import React, { useEffect } from 'react';

function Popup({isOpen, toggleModal}) {
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
                    <div className="modal-content">
                        <div className="popupForm">
                            <div className="leftPopup">
                                <div className="newWaiterName">
                                    Waiters Name
                                </div>
                                <div className="newWaitersInput">
                                    <input type="text" className='newWaitersInputInput' placeholder='Name...'/>
                                </div>
                                <div className="newWaiterName">
                                    Waiters Surname
                                </div>
                                <div className="newWaitersInput">
                                    <input type="text" className='newWaitersInputInput' placeholder='Surname...'/>
                                </div>
                            </div>
                            <div className="rightPopup">
                                <div className="newWaiterName">
                                    Waiters phone number
                                </div>
                                <div className="newWaitersInput">
                                    <input type="phone" className='newWaitersInputInput' placeholder='Phone number...'/>
                                </div>
                                <div className="newWaiterName">
                                    Waiters e-mail
                                </div>
                                <div className="newWaitersInput">
                                    <input type="email" className='newWaitersInputInput' placeholder='E-mail...'/>
                                </div>
                            </div>
                        </div>
                        <div className="isikukood">
                            <div className='isik'>Isikukood</div>
                            <input type="text" className='newWaitersInputInput' placeholder='Isikukood...'/>
                        </div>
                        <div className="popupButtons">
                            <div className='closeButton' onClick={toggleModal}>Close</div>
                            <div className="confirmButton">Confirm</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Popup;

