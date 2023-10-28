import  { useState } from 'react';
import { Chart } from 'primereact/chart';

export const RadarChart = () => {
    const [chartData] = useState({
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'Skills',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(0,155,255,0.6)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
            }
        ]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            r: {
                pointLabels: {
                    color: '#495057',
                },
                grid: {
                    color: '#ebedef',
                },
                angleLines: {
                    color: '#ebedef'
                }
            }
        }
    });

    return (
        <div className="card flex justify-content-center">
            <Chart type="radar" data={chartData} options={lightOptions} style={{ position: 'relative', width: '60%' }} />
        </div>
    );
}