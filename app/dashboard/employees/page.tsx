import { employees,payroll,mvpEmployee } from "@/app/lib/data";
import Card from "@/app/ui/Card";
import { jost,barlow } from "@/app/utils/fonts";
import { UserGroupIcon } from "@heroicons/react/24/outline";
export default async function Employees() {

    return (
        <div className={`flex clex-row gap-5 ${barlow.className}`}>
            <section className="flex flex-col gap-4">
                <h1 className={`text-4xl`}>Summary</h1>
                <div className="flex items-center gap-5">
                    <div className="bg-white w-fit rounded-full p-4">
                        <UserGroupIcon width={50}/>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl">Total number of employees</h1>
                        <h1 className="text-6xl mt-5">{employees.length}</h1>
                    </div>
                    <Divisor/>
                    
                    <div>
                        <h1>Payroll</h1>
                        <h1>{payroll()}</h1>
                    </div>
                    <div>
                        <h1>MVP</h1>
                        <h1>{mvpEmployee.name}</h1>
                    </div>

                </div>
                
                { /* https://www.slideteam.net/wp/wp-content/uploads/2024/01/Employee-leave-tracker-dashboard-with-upcoming-schedule-.png */}
                

            </section>
        </div>
    );
}

function Divisor(){
    return <div className="h-full bg-green-400 w-0.5"/>;
}