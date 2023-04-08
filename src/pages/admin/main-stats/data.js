import down from "../../../assets/img/down.png";
import up from "../../../assets/img/up.png";
import dots from "../../../assets/img/dots.png";

export const Data = [
    {
        tittle: 'All sold Coupons',
        value: '1000',
        arrow: <img src={down} style={{float: 'right'}}/>,
        percent: <div style={{color: '#F04461'}}>-15%</div>
    },
    {
        tittle: 'Revenue monthly',
        value: '1050',
        arrow: <img src={up} style={{float: 'right'}}/>,
        percent: '+20%'
    },
    {
        tittle: 'Revenue quarterly',
        value: '$50.000',
        arrow: <img src={up} style={{float: 'right'}}/>,
        percent: '+10%'
    },
    {
        tittle: 'Nett Profit quarterly',
        value: '$12.000',
        arrow: <img src={up} style={{float: 'right'}}/>,
        percent: '+12%'
    }
]

export const options = [
    {value: 'monthly', label: 'Monthly'},
    {value: 'daily', label: 'Daily'},
    {value: 'yearly', label: 'Yearly'}
]


export const  headers = ["ID", "Name", "Quantity", "Date", "Revenue", "Profit","Money Wasted"];

export const columnSizes = ["2%", "7%", "5%", "10%", "5%", "5%","5%"];
export const table = [
    {
        id: '01',
        name: 'Sashimi',
        quantity: '30',
        date: 'February 14 2021',
        revenue: '$293.01',
        netProfit: '$710.68',
        moneyWasted: '€21.68',
    },
    {
        id: '02',
        name: 'Leha',
        quantity: '30',
        date: 'February 14 2021',
        revenue: '$123.01',
        netProfit: '$712.68',
        moneyWasted: '€0.68',
    },
    {
        id: '03',
        name: 'Leha',
        quantity: '30',
        date: 'February 14 2021',
        revenue: '$123.01',
        netProfit: '$712.68',
        moneyWasted: '€0.68',
    },
    {
        id: '04',
        name: 'Leha',
        quantity: '30',
        date: 'February 14 2021',
        revenue: '$123.01',
        netProfit: '$712.68',
        moneyWasted: '€0.68',
    },
]
