'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { Employee } from '@/app/utils/definitions';
export default function GenreGraph({employees}:{employees:Employee[]}) {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const mCount = employees.filter(e => e.genre === "M").length;
    const fCount = employees.filter(e => e.genre === "F").length;

    const data = {
        labels: ['Masculine', 'Femenine'],
        datasets: [
            {
                label: 'Employees',
                data: [mCount, fCount],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)', 
                    'rgba(255, 99, 132, 0.6)', 
                ],
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