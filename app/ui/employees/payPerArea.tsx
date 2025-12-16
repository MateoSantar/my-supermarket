'use client';
import { Employee } from "@/app/utils/definitions";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function PayPerArea({ employees }: { employees: Employee[] }) {
  const payPerArea = new Map<string, number>();

  employees.forEach((em) => {
    const currentPay = payPerArea.get(em.area) || 0;
    payPerArea.set(em.area, currentPay + em.salary);
  });

  const labels = Array.from(payPerArea.keys());
  const values = Array.from(payPerArea.values());

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
        label: "Salario por área", // Puedes poner un texto aquí aunque la leyenda esté oculta, sirve para el tooltip
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
        display: false, // <--- CORREGIDO: Esto oculta la leyenda sin errores de TS
      },
    },
  };

  return (
    <div className="w-full flex justify-center items-center p-4 h-64 md:h-80">
      <Bar data={data} options={options} />
    </div>
  );
}