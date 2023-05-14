export const options = [
    { value: 'all', label: 'All transactions' },
    { value: 'daily', label: 'Daily' },
    { value: 'yearly', label: 'Yearly' }
];

export const options2 = [
    { value: 'all', label: 'Oct 1, 2019 → Nov 1, 2019' },
    { value: 'daily', label: 'Daily' },
    { value: 'yearly', label: 'Yearly' }
];

export const customStyles = {
    option: (defaultStyles, state) => ({
        ...defaultStyles,
        color: state.isSelected ? '#fff' : '#5541D7',
        backgroundColor: state.isSelected ? '#5541D7' : '#Fff'
    }),

    control: (defaultStyles) => ({
        ...defaultStyles,
        backgroundColor: '#E6E6FA',
        minWidth: '250px',
        padding: '3px 20px',
        border: '1px solid #E6E6FA',
        boxShadow: 'none',
        borderRadius: '10px',
        fontWeight: 'bold',
        cursor: 'pointer',
        '@media only screen and (max-width: 840px)': {
            ...defaultStyles['@media only screen and (max-width: 600px)'],
            maxWidth: '400px',
            width: '100%'
        },
        '@media only screen and (max-width: 600px)': {
            ...defaultStyles['@media only screen and (max-width: 600px)'],
            padding: '0px 0px',
            fontWeight: 'normal',
            fontSize: '14px'
        }
    }),

    dropdownIndicator: (base) => ({
        ...base,
        color: '#5541D7',
        marginLeft: '20px'
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#5541D7' })
};

export const headers = ['ID', 'Name', 'Email', 'Total Visit', 'Contract File', 'Total Received'];

export const columnSizes = ['2%', '7%', '5%', '10%', '5%', '5%'];

export const table = [
    {
        id: '1',
        name: 'Name',
        email: 'smth',
        totalVisits: '43',
        contractFile: 'smth',
        totalReceived: '123'
    }
];
