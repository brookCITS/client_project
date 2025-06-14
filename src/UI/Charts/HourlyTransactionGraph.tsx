import React from 'react';
//import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const generateFakeTransactionData = () => {
    const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
    const transactions = hours.map(() => Math.floor(Math.random() * 100));

    return { hours, transactions };
};

const HourlyTransactionGraph: React.FC = () => {
    const { hours, transactions } = generateFakeTransactionData();

    const data = {
        labels: hours,
        datasets: [
            {
                label: 'Hourly Transactions',
                data: transactions,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Hourly Transactions',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Transactions',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Hour of the Day',
                },
            },
        },
    };

    return (
        <div className='chart'>
        </div>
    );
};

export default HourlyTransactionGraph;
