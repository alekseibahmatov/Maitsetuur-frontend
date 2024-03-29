import React, {useState} from "react";
import './Create-waiter.css'
import logo from "../../assets/img/Logo.png";
import user from "../../assets/img/Container.png";
import PopupSumbit from "../../ui-components/popup-sumbit/Popup-sumbit";

export const CreateWaiter = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (

        <div className='contentWaiter'>
            <div className="businessHeader">
                <div className="businessHeader1">
                    Create Waiter Account
                </div>
                <div className="buttonSample" onClick={toggleModal}>
                    Submit
                </div>
                <PopupSumbit isOpen={isModalOpen} toggleModal={toggleModal}/>
            </div>

            <div className="couponsMain">
                <div className="mailPhone">
                    <div className="leftContent">
                        <div className="businessFormHeader">
                            Waiters Full Name
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputValue ' value='Vanja Zalupenko'/>
                        </div>
                    </div>
                    <div className="rightContent">
                        <div className="businessFormHeader">
                            Address
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputValue ' value='Selo Zalupi, 27 street, 10 house'/>
                        </div>
                    </div>
                </div>
                <div className="mailPhone">
                    <div className="leftContent">
                        <div className="businessFormHeader">
                            Email
                        </div>
                        <div className="businessInput">
                            <input type="email" className='businessInputValue ' value='jaParenSZavoda@pizdahuevo.blyat'/>
                        </div>
                    </div>
                    <div className="rightContent">
                        <div className="businessFormHeader">
                            Phone number
                        </div>
                        <div className="businessInput">
                            <input type="tel" className='businessInputValue half' value='(228) 555-0112'/>
                        </div>
                    </div>
                </div>
                <div className="mailPhone">
                    <div className="halfContent">
                        <div className="businessFormHeader">
                            Resto name
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputValue  ' value='R14'/>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )

}

export default CreateWaiter