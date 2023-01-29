import React, { useEffect } from 'react';

function Modal({isOpen, toggleModal}) {
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
                        <button style={{float : 'right'}} onClick={toggleModal}>Close</button>
                        <p>Modal content goes here</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;

