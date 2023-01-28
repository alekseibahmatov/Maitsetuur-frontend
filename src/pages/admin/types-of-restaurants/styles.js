export const customStyles = {
    option: (defaultStyles, state) => ({
        ...defaultStyles,
        color: state.isSelected ? "#fff" : "#5541D7",
        backgroundColor: state.isSelected ? "#5541D7" : "#Fff",
    }),

    control: (defaultStyles) => ({
        ...defaultStyles,
        backgroundColor: "#fff",
        padding: "3px 20px",
        border: "2px solid #5541D7",
        boxShadow: "none",
        borderRadius: '10px',
        fontWeight: 'bold',
        cursor: 'pointer',
        "@media only screen and (max-width: 600px)" : {
            ...defaultStyles["@media only screen and (max-width: 600px)"],
            padding: "0px 0px",
            fontWeight: 'normal',
            fontSize: '14px',
        }

    }),

    dropdownIndicator: base => ({
        ...base, color: "#5541D7", marginLeft: '20px',
    }), singleValue: (defaultStyles) => ({...defaultStyles, color: "#5541D7"}),
};

export const customStyles2 = {
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
        "@media only screen and (max-width: 600px)" : {
            ...defaultStyles["@media only screen and (max-width: 600px)"],
            padding: "0px 0px",
            fontWeight: 'normal',
            fontSize: '14px',
        }

    }),

    dropdownIndicator: base => ({
        ...base, color: "#5541D7", marginLeft: '20px',
    }),
    singleValue: (defaultStyles) => ({...defaultStyles, color: "#5541D7"}),
    multiValueLabel: (defaultStyles) => ({...defaultStyles, color: "#5541D7"}),
    placeholder: (defaultStyles) => ({...defaultStyles, color: "#5541D7"}),
};