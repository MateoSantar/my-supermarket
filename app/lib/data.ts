import { Employee, Meeting } from "@/app/utils/definitions";

export const employees: Employee[] = [
    {
        name: "Carlos Rodríguez",
        phone: "+54 11 4567-8901",
        area: "Cajas",
        photo_url: "https://randomuser.me/api/portraits/men/1.jpg",
        salary: 450000,
        genre: "M"
    },
    {
        name: "Lucía Fernández",
        phone: "+54 11 2345-6789",
        area: "Fiambrería",
        photo_url: "https://randomuser.me/api/portraits/women/2.jpg",
        salary: 480000,
        genre: "F"
    },
    {
        name: "Marcos Galperin",
        phone: "+54 11 9876-5432",
        area: "Depósito",
        photo_url: "https://randomuser.me/api/portraits/men/3.jpg",
        salary: 420000,
        genre: "M"
    },
    {
        name: "Valeria Gómez",
        phone: "+54 11 5555-4444",
        area: "Administración",
        photo_url: "https://randomuser.me/api/portraits/women/4.jpg",
        salary: 600000,
        genre: "F"
    },
    {
        name: "Martín Sosa",
        phone: "+54 11 3333-2222",
        area: "Verdulería",
        photo_url: "https://randomuser.me/api/portraits/men/5.jpg",
        salary: 440000,
        genre: "M"
    },
    {
        name: "Elena Ruiz",
        phone: "+54 11 6666-7777",
        area: "Limpieza",
        photo_url: "https://randomuser.me/api/portraits/women/6.jpg",
        salary: 400000,
        genre: "F"
    },
    {
        name: "Roberto Díaz",
        phone: "+54 11 1122-3344",
        area: "Carnicería",
        photo_url: "https://randomuser.me/api/portraits/men/7.jpg",
        salary: 520000,
        genre: "M"
    },
    {
        name: "Sofía Martínez",
        phone: "+54 11 9988-7766",
        area: "Panadería",
        photo_url: "https://randomuser.me/api/portraits/women/8.jpg",
        salary: 490000,
        genre: "F"
    },
    {
        name: "Jorge Romero",
        phone: "+54 11 5566-7788",
        area: "Seguridad",
        photo_url: "https://randomuser.me/api/portraits/men/9.jpg",
        salary: 430000,
        genre: "M"
    },
    {
        name: "Valentina López",
        phone: "+54 11 4433-2211",
        area: "Cajas",
        photo_url: "https://randomuser.me/api/portraits/women/10.jpg",
        salary: 450000,
        genre: "F"
    },
    {
        name: "Lucas Méndez",
        phone: "+54 11 6655-4433",
        area: "Reposición",
        photo_url: "https://randomuser.me/api/portraits/men/11.jpg",
        salary: 410000,
        genre: "M"
    },
    {
        name: "Patricia Vega",
        phone: "+54 11 7788-9900",
        area: "Gerencia",
        photo_url: "https://randomuser.me/api/portraits/women/12.jpg",
        salary: 950000,
        genre: "F"
    },
    {
        name: "Fernando Torres",
        phone: "+54 11 1231-2312",
        area: "Depósito",
        photo_url: "https://randomuser.me/api/portraits/men/13.jpg",
        salary: 425000,
        genre: "M"
    },
    {
        name: "Camila Ocampo",
        phone: "+54 11 8989-1212",
        area: "Recursos Humanos",
        photo_url: "https://randomuser.me/api/portraits/women/14.jpg",
        salary: 620000,
        genre: "F"
    },
    {
        name: "Ricardo Alarcón",
        phone: "+54 11 4545-6767",
        area: "Carnicería",
        photo_url: "https://randomuser.me/api/portraits/men/15.jpg",
        salary: 510000,
        genre: "M"
    },
    {
        name: "Marina Duarte",
        phone: "+54 11 2323-4545",
        area: "Panadería",
        photo_url: "https://randomuser.me/api/portraits/women/16.jpg",
        salary: 485000,
        genre: "F"
    },
    {
        name: "Gustavo Silva",
        phone: "+54 11 6767-8989",
        area: "Mantenimiento",
        photo_url: "https://randomuser.me/api/portraits/men/17.jpg",
        salary: 460000,
        genre: "M"
    },
    {
        name: "Ana Clara Rossi",
        phone: "+54 11 9090-1212",
        area: "Marketing",
        photo_url: "https://randomuser.me/api/portraits/women/18.jpg",
        salary: 580000,
        genre: "F"
    },
    {
        name: "Julián Álvarez",
        phone: "+54 11 3434-5656",
        area: "Reposición",
        photo_url: "https://randomuser.me/api/portraits/men/19.jpg",
        salary: 410000,
        genre: "M"
    },
    {
        name: "Teresa Collado",
        phone: "+54 11 7878-9090",
        area: "Limpieza",
        photo_url: "https://randomuser.me/api/portraits/women/20.jpg",
        salary: 400000,
        genre: "F"
    }
];

export const payroll = () => {
    return employees.reduce((total, em) => total + em.salary, 0);
}

export const mvpEmployee = employees.reduce((max, current) => { 
    return (current.salary > max.salary) ? current : max 
});

export const salaryAverage = (payroll() / employees.length).toFixed(0);

export const upcomingMeetings: Meeting[] = [
    {
        employee: employees[0].name,
        day: new Date('2025-12-18'),
        hour: 9,
        minute: 30
    },
    {
        employee: employees[1].name,
        day: new Date('2025-12-18'),
        hour: 11,
        minute: 0
    },
    {
        employee: employees[3].name,
        day: new Date('2025-12-19'),
        hour: 14,
        minute: 15
    },
    {
        employee: employees[2].name,
        day: new Date('2025-12-19'),
        hour: 16,
        minute: 45
    },
    {
        employee: employees[5].name,
        day: new Date('2025-12-20'),
        hour: 10,
        minute: 0
    },{
        employee: employees[7].name,
        day: new Date('2025-12-19'),
        hour: 16,
        minute: 45
    }
    ,{
        employee: employees[6].name,
        day: new Date('2025-12-19'),
        hour: 16,
        minute: 45
    }
];