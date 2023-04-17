import React from 'react-dom'
import './CreateNewUser.css'

export default function CreateNewUser() {

    return(
        <>
            <div className="rightBlock1">
                <div className="reportMain">
                    <div className="reportHeader">
                        <div className="leftReportHeader">
                            Create New User
                        </div>
                        <div className="rightReportHeader">
                            <div className="reportDownload">
                                Create New User
                            </div>
                            <div className="resetForm">
                                Reset Form
                            </div>
                        </div>
                    </div>
                    <div className="reportMainContent">
                        <div className="reportMainContentHeaderSection">
                            <div className="createNewUserHeader">
                                <div className="reportMainContentHeaderUpperPart">
                                    Personal Data
                                </div>
                                <div className="reportMainContentHeaderLowerPart">
                                    Full Name, Email, Phone, ID Code
                                </div>
                            </div>
                        </div>
                        <div className="inputFormForNewUser">
                            <div className="singleInputLine spaceBottom">
                                <div className="singleInputField">
                                <div className="businessFormHeader">
                                    User Full Name
                                </div>
                                <input type="text" className='businessInputValue'/>
                                </div>
                                <div className="singleInputField">
                                    <div className="businessFormHeader">
                                        User Phone Number
                                    </div>
                                    <input type="text" className='businessInputValue'/>
                                </div>
                            </div>
                            <div className="singleInputLine">
                                <div className="singleInputField">
                                    <div className="businessFormHeader">
                                        User Email Adress
                                    </div>
                                    <input type="text" className='businessInputValue'/>
                                </div>
                                <div className="singleInputField">
                                    <div className="businessFormHeader">
                                        User ID Code
                                    </div>
                                    <input type="text" className='businessInputValue'/>
                                </div>
                            </div>
                        </div>
                        <div className="reportMainContentHeaderSection">
                            <div className="createNewUserHeader">
                                <div className="reportMainContentHeaderUpperPart">
                                    Address Data
                                </div>
                                <div className="reportMainContentHeaderLowerPart">
                                    Country, City, State, Street, Apartment Number, Postcode
                                </div>
                            </div>
                        </div>
                        <div className="inputFormForNewUser">
                            <div className="singleInputLine spaceBottom">
                                <div className="singleInputField">
                                    <div className="businessFormHeader">
                                        User Country
                                    </div>
                                    <input type="text" className='businessInputValue'/>
                                </div>
                                <div className="singleInputField">
                                    <div className="businessFormHeader">
                                        User Street
                                    </div>
                                    <input type="text" className='businessInputValue'/>
                                </div>
                            </div>
                            <div className="singleInputLine spaceBottom">
                                <div className="singleInputField">
                                    <div className="businessFormHeader">
                                        User City
                                    </div>
                                    <input type="text" className='businessInputValue'/>
                                </div>
                                <div className="singleInputField">
                                    <div className="businessFormHeader">
                                        User Apartment Number
                                    </div>
                                    <input type="text" className='businessInputValue'/>
                                </div>
                            </div>
                            <div className="singleInputLine">
                                <div className="singleInputField">
                                    <div className="businessFormHeader">
                                        User State
                                    </div>
                                    <input type="text" className='businessInputValue'/>
                                </div>
                                <div className="singleInputField">
                                    <div className="businessFormHeader">
                                        User Postcode
                                    </div>
                                    <input type="text" className='businessInputValue'/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
