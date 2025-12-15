'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Employee } from '@/app/utils/definitions';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AreaGraph({ employees }: { employees: Employee[] }) {
    
    const employeesPerArea = new Map<string, number>();
    
    employees.forEach((em) => {
        const currentCount = employeesPerArea.get(em.area) || 0;
        employeesPerArea.set(em.area, currentCount + 1);
    });

    const labels = Array.from(employeesPerArea.keys());
    const values = Array.from(employeesPerArea.values());

    const backgroundColors = [
        'rgba(255, 99, 132, 0.6)',    
        'rgba(54, 162, 235, 0.6)',    
        'rgba(255, 206, 86, 0.6)',    
        'rgba(75, 192, 192, 0.6)',    
        'rgba(153, 102, 255, 0.6)',  
        'rgba(255, 159, 64, 0.6)',   
        'rgba(199, 199, 199, 0.6)',  
        'rgba(83, 102, 255, 0.6)',    
        'rgba(40, 159, 64, 0.6)',     
    ];

    const borderColors = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(159, 159, 159, 1)',
        'rgba(83, 102, 255, 1)',
        'rgba(40, 159, 64, 1)',
    ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: '# of Employees',
                data: values,
                backgroundColor: backgroundColors.slice(0, labels.length), 
                borderColor: borderColors.slice(0, labels.length),
                borderWidth: 1, 
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const, 
            },
        },
    };

    return (
        <div className="w-full flex justify-center items-center p-4 h-64 md:h-80">
            <Pie data={data} options={options} />
        </div>
    );
}