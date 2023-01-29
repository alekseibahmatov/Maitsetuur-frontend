import React, {useState} from "react";
import './Qrcodesuccess.css'
import qre from '../../assets/img/qrc.png'
import PopupSumbit from "../../ui-components/popup-sumbit/Popup-sumbit";

export const Qrcodesuccess = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (

        <>
            <div className="qrcodeContent">

                <div className="qrcodeSuccessHeader">
                    Success!
                </div>
                <div className="qrcodeSuccessHeader">
                    You’ve scanned QR code
                </div>

                <div className="qrcodeSuccessImage">
                    <img src={qre} alt=""/>
                </div>

                <div className="qrcodeMainText">
                    You’ve successfully scaned QR code!Please write down the real dinner price
                </div>

                <div className="qrcodeFormBlock">
                    <div className="qrcodeFormName">
                        Deposit amount:
                    </div>
                    <input type="text" className='qrcodeInput' value='300$'/>
                </div>
                <div className="qrcodeFormBlock">
                    <div className="qrcodeFormName">
                        Coupon Owner Name:
                    </div>
                    <input type="text" className='qrcodeInput' value='Ivan Zalupenko'/>
                </div>
                <div className="qrcodeFormBlock">
                    <div className="qrcodeFormName">
                        Real dinner price:
                    </div>
                    <input type="text" className='qrcodeInput' placeholder='Input the real price...'/>
                </div>

                <div className="confirmQrButton" onClick={toggleModal}>
                    Confirm
                </div>
                <PopupSumbit isOpen={isModalOpen} toggleModal={toggleModal} />
            </div>
        </>

    )

}

export default Qrcodesuccess