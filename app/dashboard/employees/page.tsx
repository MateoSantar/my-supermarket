
import { employees, payroll, mvpEmployee, salaryAverage,upcomingMeetings } from "@/app/lib/data";
import { barlow } from "@/app/utils/fonts";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import GenreGraph from "@/app/ui/employees/GenreGraph";
import EmployeesTable from "@/app/ui/employees/EmployeesTable";
import AreaGraph from "@/app/ui/employees/AreaGraph";
import PayPerArea from "@/app/ui/employees/payPerArea";
import ShiftCalendar from "@/app/ui/employees/ShiftCalendar";

export default async function Employees() {

    return (
        <div className={`flex flex-col md:flex-row gap-5 ${barlow.className} p-3 pb-7 pl-5 `}>
            <section className="flex flex-col gap-6 bg-green-100 p-7 bg-green-100 rounded shadow-sm border-1 border-green-500 md:w-1/2">
                <h1 className="text-4xl text-center md:text-start">Summary</h1>
                <div className="flex items-center flex-col md:flex-row gap-5">
                    <div className="bg-white w-fit rounded-full p-4">
                        <UserGroupIcon width={50} />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-2xl mb-5">Total number of employees</h1>
                        <h1 className="text-5xl">{employees.length}</h1>
                    </div>
                    <Divisor />
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl mb-5">Payroll</h1>
                        <h1 className="text-5xl">${payroll()}</h1>
                    </div>
                    <Divisor />
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl mb-5">Salary average</h1>
                        <h1 className="text-5xl">${salaryAverage}</h1>
                    </div>
                </div>
                { /* https://www.slideteam.net/wp/wp-content/uploads/2024/01/Employee-leave-tracker-dashboard-with-upcoming-schedule-.png */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
                    <div>
                        <h1 className="text-4xl text-center">Genre distribution</h1>
                        <GenreGraph employees={employees} />
                    </div>
                    <div>
                        <h1 className="text-4xl text-center">Area employees distribution</h1>
                        <AreaGraph employees={employees} />
                    </div>
                </div>
                <div className="flex flex-col w-full flex-start">
                    <h1 className="text-4xl text-center">Payroll  distribution</h1>
                    <PayPerArea employees={employees} />
                </div>

            </section>
            <section className="w-full flex flex-col gap-5">
                    <EmployeesTable employees={employees} />
                    <ShiftCalendar meetings={upcomingMeetings}/>

            </section>
            
        </div>

    );
}

function Divisor() {
    return <div className="h-full bg-green-400 w-0.5" />;
}

