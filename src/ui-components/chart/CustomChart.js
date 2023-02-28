import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            enabled: true,
            bodyAlign: 'center',
            titleAlign: 'center',
            footerAlign: 'center',
            xAlign: 'center',
            yAlign: 'bottom',
            padding: 15,
            mode: 'index',
            intersect: false,
            position: 'average',
            backgroundColor: '#fff',
            borderColor: 'rgb(213,213,213)',
            borderWidth: 1,
            caretSize: 10,
            titleFontFamily: 'Arial',
            titleColor: '#000000',
            titleFontSize: 12,
            bodyFontFamily: 'Arial',
            caretPadding: 10,
            bodyColor: '#000000',
            bodyFontSize: 14,
            bodySpacing: 6,
            displayColors: false,
            callbacks: {
                label: function (context) {
                    let label = context.dataset.label || '';

                    if (context.datasetIndex === 0 && label) {
                        label += ': ';
                    }
                    if (context.datasetIndex === 0 && context.parsed.y !== null) {
                        label += `Earnings: ${new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(context.parsed.y)} / `;
                    }

                    data.datasets.map(ds => {
                        if (ds.label === 'Orders:') {
                            label += `${ds.label + ' ' + ds.data[context.dataIndex]}`
                        }
                    })

                    return label;
                },
            }
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            borderWidth: 0
        },
        y: {
            ticks: {
                callback: function (value, index, values) {
                    return '$' + value.toLocaleString();
                }
            }
        }
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            data: labels.map(() => faker.datatype.number({min: 0, max: 10000})),
            backgroundColor: '#766EDA',
            barThickness: 30,
            borderRadius: {topLeft: 5, topRight: 5},
        },
        {
            data: labels.map(() => faker.datatype.number({min: 0, max: 3000})),
            hidden: true,
            label: 'Orders:',
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'rgba(0,0,0,0)',
        },
    ],
};

export const CustomChart = ({updateTotal}) => {

    updateTotal(data.datasets[0].data.reduce((acc, val) => acc + val, 0), data.datasets[1].data.reduce((acc, val) => acc + val, 0));


    return (
        <>
            <Bar options={options} data={data} type="bar"/>

        </>
    );
}
