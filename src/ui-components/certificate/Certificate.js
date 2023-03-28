import React, {useState} from "react";
import PopupCertificate from "../popup-certificate/Popup-certificate";
import ReactSwipe from "react-swipe";
import {LimitedTextAreaLanding} from "../limited-text-area-landing/LimitedTextAreaLanding";
import {useNavigate} from "react-router-dom";

export const Certificate = () => {

    const navigate = useNavigate();
    let reactSwipeEl;

    const [isActive, setIsActive] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);
    }

    function contentNext (){
        handleClick();
        reactSwipeEl.next()
    }
    function contentPrevious (){
        handleClick();
        reactSwipeEl.prev()
    }
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    function Select({ user, click, status }) {
        return (
            <li className={status ? "active" : 'nominal'} onClick={click}>
                {user}{" "}
            </li>
        );
    }
    const nominals = ["50€", "100€", "200€", "500€"];

    const [select, setSelect] = useState(false);

    const handleSelect = key => {
        setSelect(key)
        const global = nominals[key]
        const element = document.getElementById('1')
        element.innerHTML = global;
    };

    const [formData, setFormData] = useState({
        from: "",
        to: "",
        recieverMail: "",
        recieverPhone: '',
        congratsMessage: '',
    });

    const [formDataCompany, setFormDataCompany] = useState({
        from: "",
        companyName: "",
        fromMail: "",
        fromPhone: '',
        congratsMessage: '',
    });

    const [emailValid, setEmailValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);
    const [emailValidCompany,setEmailValidCompany] = useState(true);
    const [phoneValidCompany, setPhoneValidCompany] = useState(true);

    const isFilledCompany = formDataCompany.from &&
        formDataCompany.companyName &&
        formDataCompany.fromMail &&
        formDataCompany.fromPhone &&
        formDataCompany.congratsMessage &&
        emailValidCompany &&
        phoneValidCompany;

    const isFilled = formData.from &&
        formData.to &&
        formData.recieverMail &&
        formData.recieverPhone &&
        formData.congratsMessage &&
        select !== false &&
        emailValid &&
        phoneValid;


    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeCompany = (event) => {
        setFormDataCompany({
            ...formDataCompany,
            [event.target.name]: event.target.value,
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("formData", JSON.stringify(formData));
        navigate('/payment');
    };

    const validateEmail = (email) => {
        // email validation regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        // phone number validation regular expression
        const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        return phoneRegex.test(phone);
    };
    const validateEmailCompany = (email) => {
        // email validation regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneCompany = (phone) => {
        // phone number validation regular expression
        const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        return phoneRegex.test(phone);
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmailValid(validateEmail(value));
        handleChange(e);
    };

    const handlePhoneChange = (e) => {
        const { value } = e.target;
        setPhoneValid(validatePhone(value));
        handleChange(e);
    };
    const handleEmailChangeCompany = (e) => {
        const { value } = e.target;
        setEmailValidCompany(validateEmailCompany(value));
        handleChangeCompany(e);
    };
    const handlePhoneChangeCompany = (e) => {
        const { value } = e.target;
        setPhoneValidCompany(validatePhoneCompany(value));
        handleChangeCompany(e);
    };



    let newDate = new Date();
    let date = newDate.getDate() + 1 + '.';
    let month = newDate.getMonth() + 1 + '.';
    let year = newDate.getFullYear() + 1;



    return (
        <>
            <div className="certificate" id='certificate'>
                <div className="certificate_header">
                    <div className="from">
                        <div className={isActive ? 'company' : "client"} onClick={contentPrevious}>
                            From me
                        </div>
                        <div className={isActive ? 'client' : "company"} onClick={contentNext}>
                            From Company
                        </div>
                    </div>
                    <div className="certificate_example" onClick={toggleModal}>
                        Example of certificate
                    </div>
                    <PopupCertificate isOpen={isModalOpen} toggleModal={toggleModal} />
                </div>
                <div className="content">
                    <div>
                        <ReactSwipe
                            className="carousel"
                            swipeOptions={{ continuous: false, disableScroll: true }}
                            ref={el => (reactSwipeEl = el)}
                        >
                            <div><div className="explain">
                                Write a congratulation and indicate the address of the recipient!
                            </div>
                                <div className="choose">
                                    Choose your own nominal
                                </div>
                                <div className="main">
                                    <div className="left">
                                        <div className="certificateButtons">
                                            {nominals.map((name, key) => (
                                                <Select
                                                    key={key}
                                                    status={select === key}
                                                    click={() => handleSelect(key)}
                                                    user={name}
                                                />
                                            ))}
                                        </div>
                                        <div className="form">
                                            <div className="from_who">
                                                <input type='text' placeholder='From...' className='certificateInputValue'
                                                       name='from'
                                                       value={formData.from}
                                                       onChange={handleChange}
                                                ></input>
                                            </div>
                                            <div className="from_who">
                                                <input type='text' placeholder='To...' className='certificateInputValue'
                                                       name='to'
                                                       value={formData.to}
                                                       onChange={handleChange}>
                                                </input>
                                            </div>
                                            <div className="from_who">
                                                <input type='email' placeholder='Recipients e-mail...' className={`certificateInputValue ${
                                                    !emailValid ? "invalid" : ""
                                                }`}
                                                       name='recieverMail'
                                                       value={formData.recieverMail}
                                                       onChange={handleEmailChange}>
                                                </input>
                                                {!emailValid && (
                                                    <div className="error">Please enter a valid email address</div>
                                                )}
                                            </div>
                                            <div className="from_who">
                                                <input type='tel' placeholder='Recipients phone number...' className={`certificateInputValue ${
                                                    !phoneValid ? "invalid" : ""
                                                }`}
                                                       name='recieverPhone'
                                                       value={formData.recieverPhone}
                                                       onChange={handlePhoneChange}>
                                                </input>
                                                {!phoneValid && (
                                                    <div className="error">
                                                        Please enter a valid phone number
                                                    </div>)}
                                            </div>
                                            <div className="from_who">
                                                <LimitedTextAreaLanding limit={280} value={formData.congratsMessage}
                                                                        onTextChange={(text) =>
                                                                            setFormData((prevFormData) => ({
                                                                                ...prevFormData,
                                                                                congratsMessage: text,
                                                                            }))
                                                                        }
                                                />
                                            </div>
                                        </div>
                                        <div  onClick={handleSubmit}
                                              className={`pay ${isFilled ? "filled" : ""}`}
                                        >
                                            Pay
                                        </div>
                                        <div className="confirm">
                                            I agree with the <span className="blue">Terms of personal data processing</span>.
                                        </div>

                                    </div>
                                    <div className="right">
                                        <div className="block">
                                            <div className="description">
                                                <div className="blockHeaderCertificateSide">
                                                    gift certificate
                                                </div>
                                                <div className="blockNameCertificateSide">
                                                    To the best restaurants in Tallinn
                                                </div>
                                                <div className="nominalAndDate">
                                                    <div className="nominal_value">
                                                        Nominal
                                                    </div>
                                                    <div className="date">
                                                        Valid until
                                                    </div>
                                                </div>
                                                <div className="values">
                                                    <div className="nominalValue" id='1'>
                                                        {}
                                                    </div>
                                                    <div className="validDate">
                                                        {date}{month}{year}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                            <div><div className="explainForCompany">
                                Thank your employees with gift certificates and an unforgettable experience!<br/>
                                Since ordering more certificates can be a little inconvenient, we ask you to place an order, after which our manager can help you achieve the most suitable result.
                            </div>
                                <div className="main">
                                    <div className="left">
                                        <div className="form">
                                            <div className="from_who">
                                                <input placeholder='Name' className='certificateInputValue'
                                                       name='from'
                                                       value={formDataCompany.from}
                                                       onChange={handleChangeCompany}
                                                />
                                            </div>
                                            <div className="from_who">
                                                <input type='text' placeholder='Company name' className='certificateInputValue'
                                                       name='companyName'
                                                       value={formDataCompany.companyName}
                                                       onChange={handleChangeCompany}/>
                                            </div>
                                            <div className="from_who">
                                                <input type='email' placeholder='Company e-mail' className={`certificateInputValue ${
                                                    !emailValidCompany ? "invalid" : ""
                                                }`}
                                                       name='fromMail'
                                                       value={formDataCompany.fromMail}
                                                       onChange={handleEmailChangeCompany}/>
                                                {!emailValidCompany && (
                                                    <div className="error">Please enter a valid email address</div>
                                                )}
                                            </div>
                                            <div className="from_who">
                                                <input type='tel' placeholder='Phone number' className={`certificateInputValue ${
                                                    !phoneValidCompany ? "invalid" : ""
                                                }`}
                                                       name='fromPhone'
                                                       value={formDataCompany.fromPhone}
                                                       onChange={handlePhoneChangeCompany}/>
                                                {!phoneValidCompany && (
                                                    <div className="error">
                                                        Please enter a valid phone number
                                                    </div>)}
                                            </div>
                                            <div className="from_who">
                                                <LimitedTextAreaLanding limit={280} value={formDataCompany.congratsMessage}
                                                                        onTextChange={(text) =>
                                                                            setFormDataCompany((prevFormData) => ({
                                                                                ...prevFormData,
                                                                                congratsMessage: text,
                                                                            }))
                                                                        }
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className={`order ${isFilledCompany ? "filled" : ""}`}>
                                            Order
                                        </div>
                                        <div className="confirm">
                                            I agree with the <span className="termsLink">Terms of personal data processing</span>.
                                        </div>

                                    </div>
                                    <div className="right">
                                        <div className="block">
                                            <div className="description">
                                                <div className="blockHeaderCertificateSide">
                                                    gift certificate
                                                </div>
                                                <div className="blockNameCertificateSide">
                                                    To the best restaurants in Tallinn
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                        </ReactSwipe>
                    </div>
                </div>
            </div>
        </>
        )

}
export default Certificate