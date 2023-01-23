import React, {useState} from "react";
import './Waiter-single.css'
import logo from "../../assets/img/Logo.png";
import user from "../../assets/img/Container.png";
import dots from "../../assets/img/dots.png";
import PopupSumbit from "../../ui-components/popup-sumbit/Popup-sumbit";


export const WaiterSingle = () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const table = [
        { id: '01', name: 'Aiphone 21S plux max size dick', quantity: '18:30:21', date: 'February 14 2021'  , revenue: '25', netProfit: '$710.68' , moneyWasted: '€21.68', dots: <img src={dots}/>},
        { id: '02', name: 'Leha', quantity: '18:30:21', date: 'February 14 2021'  , revenue: '12', netProfit: '$712.68' , moneyWasted: '€0.68', dots: <img src={dots}/>},
        { id: '03', name: 'Leha', quantity: '18:30:21', date: 'February 14 2021'  , revenue: '32', netProfit: '$712.68' , moneyWasted: '€0.68', dots: <img src={dots}/>},
        { id: '04', name: 'Leha', quantity: '18:30:21', date: 'February 14 2021'  , revenue: '54', netProfit: '$712.68' , moneyWasted: '€0.68', dots: <img src={dots}/>},
    ]


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
            <div className="waitersMainContent">

                <div className="businessHeader">
                    <div className="businessHeader1">
                        Waiter’s Account for R14
                    </div>
                    <div className="buttonSample" onClick={toggleModal}>
                        Submit
                    </div>
                    <PopupSumbit isOpen={isModalOpen} toggleModal={toggleModal} />
                    <div className="buttonSample red">
                        Delete
                    </div>
                </div>
                <div className="waitersMain">
                <div className="businessName">

                    <div className="businessFormHeader">
                        Business Name
                    </div>
                    <div className="businessInput">
                        <input type="text" className='businessInputInput' value='Aleksei Bashma4ok'/>
                    </div>
                </div>
                    <div className="businessName">

                        <div className="businessFormHeader">
                            Address
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputInput' value='Kikri 2/1 Menja ebut v popku'/>
                        </div>
                    </div>

                    <div className="mailPhone">
                        <div className="leftContent">
                            <div className="businessFormHeader">
                                Email
                            </div>
                            <div className="businessInput">
                                <input type="email" className='businessInputInput half' value='jatupoibashmack@kakaxa.ru'/>
                            </div>
                        </div>
                        <div className="rightContent">
                            <div className="businessFormHeader">
                                Phone Number
                            </div>
                            <div className="businessInput">
                                <input type="phone" className='businessInputInput half' value='228 1488 1337'/>
                            </div>
                        </div>
                    </div>



                    <div className="couponListHeader">
                        <div className="couponListHeaderName">
                            List of waiter’s submited coupons                        </div>
                        <div className="features">
                            <img src={dots} alt="features"/>
                        </div>
                    </div>
                    <div className="overflownContent">
                        <table>
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Device Name</th>
                                <th scope="col">Log time</th>
                                <th scope="col">Log Date</th>
                                <th scope="col">Amount of Coupons</th>
                                <th scope="col">Scanned money</th>
                                <th scope="col">Bill difference</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>

                            <tbody>

                            {table.map((item, i) => (

                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.date}</td>
                                    <td>{item.revenue}</td>
                                    <td>{item.netProfit}</td>
                                    <td>{item.moneyWasted}</td>
                                    <td>{item.dots}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )

}


export default WaiterSingle