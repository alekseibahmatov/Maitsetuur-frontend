import React, {useState} from "react";
import './Coupon-single.css'
import logo from "../../assets/img/Logo.png";
import user from "../../assets/img/Container.png";
import PopupSumbit from "../../ui-components/popup-sumbit/Popup-sumbit";


export const CouponSingle = () =>{
    const LimitedTextarea = ({ rows, cols, value, limit }) => {
        const [content, setContent] = React.useState(value.slice(0, limit));

        const setFormattedContent = React.useCallback(
            text => {
                setContent(text.slice(0, limit));
            },
            [limit, setContent]
        );

        return (
            <>
      <textarea
          className='businessInputInput fullHeight'
          placeholder='Congratulations text...'
          rows={rows}
          cols={cols}
          onChange={event => setFormattedContent(event.target.value)}
          value={content}
      />
                <div className='wordCount1'>
                    {content.length}/{limit}
                </div>
            </>
        );
    };

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("(No file chosen)");

    const handleChangeImage = e => {
        setFileName(e.target.files[0].name);
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return(
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
                        Waiter’s Account for R14
                    </div>
                    <div className="bugFix">
                    <div className="buttonSample" onClick={toggleModal}>
                        Submit
                    </div>
                    <PopupSumbit isOpen={isModalOpen} toggleModal={toggleModal} />
                    <div className="buttonSample red">
                        Delete
                    </div>
                    </div>
                </div>
            <div className="couponsMain">

                <div className="businessMainHeader">
                    <div className="businessSingleBlock">
                        <div className="businessSingleBlockImage1">
                            {image && <img src={image} alt="" className='uploadImage' />}
                        </div>

                        <div className="buttonInfo">
                            <div className="buttonHeader" >
                                Upload photo
                            </div>
                            <div className="buttonSample1"  onClick={() => document.getElementById("inputFile").click()}>
                                Browse
                            </div>
                            <div className='noFile'>
                                ({fileName})
                            </div>
                            <input
                                id="inputFile"
                                type="file"
                                onChange={handleChangeImage}
                                style={{ display: 'none' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="specialBlock">
                    <div className="leftSideBlock">
                        <div className="businessName">
                            <div className="businessFormHeader">
                                To
                            </div>
                            <div className="businessInput">
                                <input type="text" className='businessInputInput' value='Aleksei Bashma4ok'/>
                            </div>
                        </div>
                        <div className="businessName">
                            <div className="businessFormHeader">
                                Receiver E-mail
                            </div>
                            <div className="businessInput">
                                <input type="text" className='businessInputInput' value='gniloybashmack@japidor.ee'/>
                            </div>
                        </div>
                    </div>
                    <div className="rightSideBlock">
                        <div className="businessName">
                            <div className="businessFormHeader">
                                Congratulations (max 100 words)
                            </div>
                            <div className="businessInput">
                                <LimitedTextarea limit={100} value='' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mailPhone">
                    <div className="leftContent">
                        <div className="businessFormHeader">
                            Receivers phone
                        </div>
                        <div className="businessInput">
                            <input type="tel" className='businessInputInput half' value='+8 800 555 35 35'/>
                        </div>
                    </div>
                    <div className="rightContent">
                        <div className="businessFormHeader">
                            From who
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputInput half' value='Sanja Shljapik'/>
                        </div>
                    </div>
                </div>
                <div className="mailPhone">
                    <div className="leftContent">
                        <div className="businessFormHeader">
                            Nominal
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputInput half' value='100$'/>
                        </div>
                    </div>
                    <div className="rightContent">
                        <div className="businessFormHeader">
                            Submitted in resto
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputInput half' value='R14'/>
                        </div>
                    </div>
                </div>
                <div className="mailPhone">
                    <div className="leftContent">
                        <div className="businessFormHeader">
                            Created at
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputInput half' value='2023-01-03 14:53:23'/>
                        </div>
                    </div>
                    <div className="rightContent">
                        <div className="businessFormHeader">
                            Submitted by
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputInput half' value='German Toome'/>
                        </div>
                    </div>
                </div>
                <div className="mailPhone">
                    <div className="halfContent">
                        <div className="businessFormHeader">
                            Capable untill
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputInput half ' value='02.07.2023'/>
                        </div>
                    </div>
                </div>
                <div className="mailPhone">
                    <div className="halfContent">
                        <div className="businessFormHeader">
                            Submitted at
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputInput half ' value='2023-02-03 14:53:23'/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )

}

export default CouponSingle