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

        <div className='content'>
            <div className="navbar">
                <div className="logoAndName">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="name">
                        Present Perfect Management
                    </div>
                </div>
                <div className="scanAndUser">
                    <div className="scan">
                        Scan QR code
                    </div>
                    <div className="user">
                        <div className="userImage">
                            <img src={user} alt="user" className='userImg'/>
                        </div>
                        <div className="userInfo">
                            <div className="userUsername">
                                Bahsmak
                            </div>
                            <div className="userDescription">
                                Lisik
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="businessHeader">
                <div className="businessHeader1">
                    Create Waiter Account
                </div>
                <div className="buttonSample" onClick={toggleModal}>
                    Submit
                </div>
                <PopupSumbit isOpen={isModalOpen} toggleModal={toggleModal} />
            </div>

            <div className="couponsMain">

                <div className="mailPhone">
                    <div className="leftContent">
                        <div className="businessFormHeader">
                            Waiters Full Name
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputInput half' value='Vanja Zalupenko'/>
                        </div>
                    </div>
                    <div className="rightContent">
                        <div className="businessFormHeader">
                            Address
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputInput half' value='Selo Zalupi, 27 street, 10 house'/>
                        </div>
                    </div>
                </div>
                <div className="mailPhone">
                    <div className="leftContent">
                        <div className="businessFormHeader">
                            Email
                        </div>
                        <div className="businessInput">
                            <input type="email" className='businessInputInput half' value='jaParenSZavoda@pizdahuevo.blyat'/>
                        </div>
                    </div>
                    <div className="rightContent">
                        <div className="businessFormHeader">
                            Phone number
                        </div>
                        <div className="businessInput">
                            <input type="tel" className='businessInputInput half' value='(228) 555-0112'/>
                        </div>
                    </div>
                </div>
                <div className="mailPhone">
                    <div className="halfContent">
                        <div className="businessFormHeader">
                            Resto name
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputInput half ' value='R14'/>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )

}

export default CreateWaiter