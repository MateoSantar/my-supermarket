import { employees } from "@/app/lib/data";
export default async function Employees() {
    const mvpEmployee = employees.reduce((max, current) => { return (current.salary > max.salary) ? current : max });

    return (
        <div className="flex clex-row gap-5">
            <div> {/* most payed employee */}

            </div>
        </div>
    );
}
