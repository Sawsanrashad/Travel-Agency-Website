import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Bar } from 'react-chartjs-2';
import './HomeDashboard.scss';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


// Register the necessary components with ChartJS
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const HomeDashboard = () => {
    let name = '';
    const authUser = localStorage.getItem('AuthUser');
    if (authUser) {
        name = JSON.parse(authUser)?.name;
    }

    // Example data for a travel agency
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Bookings',
                data: [120, 150, 180, 200, 220, 250, 300, 320, 280, 270, 240, 210],
                backgroundColor: '#e0f2fe',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Revenue (in $)',
                data: [5000, 6000, 7500, 9000, 8500, 10000, 12000, 11000, 9500, 9300, 8000, 7000],
                backgroundColor: '#ecfdf5',
                borderColor: '#065f46',
                borderWidth: 1,
            },
            {
                label: 'Customer Inquiries',
                data: [50, 60, 70, 80, 90, 100, 110, 120, 110, 100, 90, 70],
                backgroundColor: '#ecfeff',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y;
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                }
            },
        },
    };

    return (
        <div id='homeDashboard' className='py-6 custom_container'>
            <h2 className='text-3xl font-medium dark:text-white'>
                <FormattedMessage id='welcome' /> {name}!
            </h2>

            {/* Adding the Bar Chart */}
            <div className='chart-container mt-6'>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};
