import  { useState } from 'react';
import { Chart } from 'primereact/chart';
import { ChartData } from './Dashboard';

export const RadarChart: React.FC<ChartData> = ({labels, data}) => {  
    const [chartData] = useState({
        labels: labels,
        datasets: [
            {
                label: 'Skills',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(0,155,255,0.6)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: data
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
            <Chart className='center-chart' type="radar" data={chartData} options={lightOptions} style={{ position: 'relative', width: '80%' }} />
        </div>
    );
}

    