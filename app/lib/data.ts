import { Employee } from "@/app/utils/definitions";

export const employees: Employee[] = [
    {
        name: "Carlos Rodríguez",
        phone: "+54 11 4567-8901",
        area: "Cajas",
        photo_url: "https://randomuser.me/api/portraits/men/1.jpg",
        salary: 450000
    },
    {
        name: "Lucía Fernández",
        phone: "+54 11 2345-6789",
        area: "Fiambrería",
        photo_url: "https://randomuser.me/api/portraits/women/2.jpg",
        salary: 480000
    },
    {
        name: "Marcos Galperin",
        phone: "+54 11 9876-5432",
        area: "Depósito",
        photo_url: "https://randomuser.me/api/portraits/men/3.jpg",
        salary: 420000
    },
    {
        name: "Valeria Gómez",
        phone: "+54 11 5555-4444",
        area: "Administración",
        photo_url: "https://randomuser.me/api/portraits/women/4.jpg",
        salary: 600000
    },
    {
        name: "Martín Sosa",
        phone: "+54 11 3333-2222",
        area: "Verdulería",
        photo_url: "https://randomuser.me/api/portraits/men/5.jpg",
        salary: 440000
    },
    {
        name: "Elena Ruiz",
        phone: "+54 11 6666-7777",
        area: "Limpieza",
        photo_url: "https://randomuser.me/api/portraits/women/6.jpg",
        salary: 400000
    }
];


export const payroll = () => {
    return employees.reduce((total,em)=>total + em.salary,0);
}
export const mvpEmployee = employees.reduce((max, current) => { return (current.salary > max.salary) ? current : max });
