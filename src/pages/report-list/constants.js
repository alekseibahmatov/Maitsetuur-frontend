import arrow from "../../assets/img/Arrow 9.png";

export const customStyles = {

    input: (baseStyles) => ({
        ...baseStyles,
        color: 'transparent',
        cursor: 'pointer'
    }),

    menu: (provided, state) => ({
        ...provided,
        width: 'calc(100% + 50px)', // You can set the width to any desired value
        padding: '5px',

    }),

    menuList: (provided, state) => ({
        ...provided,
        maxHeight: '150px', // Set the maximum height of the menu list
        overflowY: 'auto', // Make the menu list scrollable if the content exceeds the maximum height
        padding: '7px',
        '::-webkit-scrollbar': {
            width: '7px',
            height: '1em',
        },
        '::-webkit-scrollbar-track': {
            backgroundColor: '#fff',
            boxShadow: 'inset 0 0 5px white',
            borderRadius: '400px',
        },
        '::-webkit-scrollbar-thumb': {
            background: '#D9D9D9',
            borderRadius: '400px',
        },
    }),

    option: (defaultStyles, state) => ({
        ...defaultStyles,
        color: state.isSelected ? "#fff" : "#5541D7",
        backgroundColor: state.isSelected ? "#5541D7" : "#E6E6FA",
        border: state.isSelected ? `none` : '1px solid #8876FF',
        borderRadius: '10px',
        marginBottom: '5px',
        padding: '10px',
        cursor: 'pointer'
    }),

    placeholder: (provided) => ({
        ...provided,
        color: '#5541D7',
        cursor: 'pointer'

    }),

    control: (defaultStyles) => ({
        ...defaultStyles,
        color: "#5541D7",
        backgroundColor: "#E6E6FA",
        minWidth: '250px',
        padding: "3px 20px",
        border: "1px solid #E6E6FA",
        boxShadow: "none",
        borderRadius: '10px',
        fontWeight: 'bold',
        cursor: 'pointer',
        "@media only screen and (max-width: 840px)": {
            ...defaultStyles["@media only screen and (max-width: 600px)"],
            maxWidth: '400px',
            width: '100%',
        },
        "@media only screen and (max-width: 600px)": {
            ...defaultStyles["@media only screen and (max-width: 600px)"],
            padding: "0px 0px",
            fontWeight: 'normal',
            fontSize: '14px',
        }

    }),

    dropdownIndicator: base => ({
        ...base,
        color: "#5541D7",
        marginLeft: '20px',
    }),
    singleValue: (defaultStyles) => ({...defaultStyles, color: "#5541D7"}),


};

export const table = [
    {
        id: 0,
        transactionsAmount: 0,
        turnover: 0,
        maitsetuurShare: 0,
        reportFrom: "2023-05-17",
        reportTo: "2023-05-17",
        status: "Paid",
    },
];

export const headers = [
    "ID",
    "Amount of Transactions",
    "Turnover",
    "MaitseTuur Share",
    "Period of Report",
    "Status",
];

export const columnSizes = ["2%", "7%", "5%", "5%", "10%", "5%"];
