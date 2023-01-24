import React, {useState} from 'react';
import contract from "../../../assets/img/contract.png";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {sellers, typeOfResto} from "./data";

export const RestaurantBusinessInformation = () => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("(No file chosen)");
    const animatedComponents = makeAnimated();

    const handleChangeImage = e => {
        setFileName(e.target.files[0].name);
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const LimitedTextarea = ({rows, cols, value, limit}) => {
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
          className='businessInputInput input'
          placeholder='Resto description...'
          rows={rows}
          cols={cols}
          onChange={event => setFormattedContent(event.target.value)}
          value={content}
      />
                <div className='wordCount'>
                    {content.length}/{limit}
                </div>
            </>
        );
    };


    const customStyles = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: state.isSelected ? "#fff" : "#5541D7",
            backgroundColor: state.isSelected ? "#5541D7" : "#Fff",
        }),

        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "#fff",
            padding: "7px 25px",
            border: "1px solid #5541D7",
            boxShadow: "none",
            borderRadius: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',

        }),

        dropdownIndicator: base => ({
            ...base,
            color: "#5541D7",
            marginLeft: '20px',
        }),
        singleValue: (defaultStyles) => ({...defaultStyles, color: "#5541D7"}),
        multiValueLabel: (defaultStyles) => ({...defaultStyles, color: "#5541D7"}),
        placeholder: (defaultStyles) => ({...defaultStyles, color: "#5541D7"}),
    };

    return <div className='rightBlock11'>
        <div className="businessHeader">
            <div className="businessHeader1">
                Restaurant Business Information
            </div>
            <div className="buttonSample">
                Submit
            </div>
            <div className="buttonSample red">
                Delete
            </div>
        </div>

        <div className="businessMain">

            <div className="businessMainHeader">
                <div className="businessSingleBlock">
                    <div className="businessSingleBlockImage1">
                        {image && <img src={image} alt="" className='uploadImage'/>}
                    </div>

                    <div className="buttonInfo">
                        <div className="buttonHeader">
                            Upload photo
                        </div>
                        <div className="buttonSample"
                             onClick={() => document.getElementById("inputFile").click()}>
                            Browse
                        </div>
                        <div className='noFile'>
                            ({fileName})
                        </div>
                        <input
                            id="inputFile"
                            type="file"
                            onChange={handleChangeImage}
                            style={{display: 'none'}}
                        />
                    </div>
                </div>
                <div className="businessSingleBlock">
                    <div className="businessSingleBlockImage">
                        <img src={contract} alt="businessPhoto"/>
                    </div>
                    <div className="buttonInfo">
                        <div className="buttonHeader">
                            Upload contract
                        </div>
                        <div className="buttonSample">
                            Browse
                        </div>
                    </div>
                </div>
            </div>

            <div className="businessForm">

                <div className="businessName">

                    <div className="businessFormHeader">
                        Business Name
                    </div>
                    <div className="businessInput">
                        <input type="text" className='businessInputInput'
                               placeholder='Resto name...'/>
                    </div>
                </div>

                <div className="businessName">

                    <div className="businessFormHeader">
                        Business Description (max 100 words)
                    </div>
                    <div className="businessInput">
                        <LimitedTextarea limit={100} value=''/>
                    </div>
                </div>

                <div className="mailPhone">
                    <div className="leftContent">
                        <div className="businessFormHeader">
                            Email
                        </div>
                        <div className="businessInput">
                            <input type="email" className='businessInputInput half'
                                   placeholder='Email...'/>
                        </div>
                    </div>
                    <div className="rightContent">


                        <div className="businessFormHeader">
                            Phone Number
                        </div>
                        <div className="businessInput">
                            <input type="phone" className='businessInputInput half'
                                   placeholder='Phone...'/>
                        </div>
                    </div>
                </div>

                <div className="countryCity">

                    <div className="singleCountryBlock">
                        <div className="businessFormHeader">
                            Country
                        </div>
                        <div className="businessInput">
                            <Select className='myselect' options={sellers}
                                    defaultValue={sellers[0]} styles={customStyles}
                                    components={{IndicatorSeparator: () => null}}/>
                        </div>
                    </div>
                    <div className="singleCountryBlock">
                        <div className="businessFormHeader">
                            Province
                        </div>
                        <div className="businessInput">
                            <input type="email" className='businessInputInput half'
                                   placeholder='Province...'/>
                        </div>
                    </div>
                    <div className="singleCountryBlock">
                        <div className="businessFormHeader">
                            City
                        </div>
                        <div className="businessInput">
                            <input type="email" className='businessInputInput half'
                                   placeholder='City...'/>
                        </div>
                    </div>
                    <div className="singleCountryBlock">
                        <div className="businessFormHeader">
                            Postal Code
                        </div>
                        <div className="businessInput">
                            <input type="email" className='businessInputInput half'
                                   placeholder='Postal Code...'/>
                        </div>
                    </div>

                </div>

                <div className="workBill">
                    <div className="leftContent">
                        <div className="businessFormHeader">
                            Working time
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputInput half'
                                   placeholder='Working time...'/>
                        </div>
                    </div>
                    <div className="rightContent">


                        <div className="businessFormHeader">
                            Average bill
                        </div>
                        <div className="businessInput">
                            <input type="text" className='businessInputInput half'
                                   placeholder='Average bill...'/>
                        </div>
                    </div>
                </div>
                <div className="typeOfRestaurantSelect">
                    <div className="businessFormHeader">
                        Type of restaurant
                    </div>
                    <Select
                        closeMenuOnSelect={true}
                        components={animatedComponents}
                        isMulti
                        className='myselect'
                        options={typeOfResto}
                        styles={customStyles}
                    />
                </div>
            </div>

        </div>

    </div>;
}