"use client";

import { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Employee } from "@/app/utils/definitions";

export default function EmployeesTable({ employees }: { employees: Employee[] }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredEmployees = employees.filter((e) =>
        e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.area.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="bg-green-100 rounded shadow-sm border-1 border-green-500 overflow-hidden h-[550px] flex flex-col ">
            <div className="p-4 bg-green-200 border-b border-green-300 flex items-center gap-2 sticky top-0 z-20">
                <MagnifyingGlassIcon className="w-5 h-5 text-green-700" />
                <input
                    type="text"
                    placeholder="Buscar por nombre o área..."
                    className="w-full bg-white rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="overflow-auto flex-1">
                <table className="border-separate border-spacing-y-3 w-full p-2">
                    <thead className="sticky top-0 z-10 bg-green-100 shadow-sm">
                        <tr>
                            <th className="p-2 text-left text-green-800">Name</th>
                            <th className="p-2 text-left text-green-800">Phone</th>
                            <th className="p-2 text-left text-green-800">Area</th>
                            <th className="p-2 text-center text-green-800">Photo</th>
                            <th className="p-2 text-left text-green-800">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.length > 0 ? (
                            filteredEmployees.map((e) => (
                                <tr key={e.name} className="bg-white shadow-sm hover:bg-green-50 transition-colors">
                                    <td className="p-3 border-y border-l border-green-200 rounded-l-lg font-medium">
                                        {e.name}
                                    </td>
                                    <td className="p-3 border-y border-green-200 text-sm text-gray-600">
                                        {e.phone}
                                    </td>
                                    <td className="p-3 border-y border-green-200">
                                        <span className="bg-green-100 text-green-800 py-1 px-2 rounded-full text-xs font-bold border border-green-300">
                                            {e.area}
                                        </span>
                                    </td>
                                    <td className="md:p-3 border-y border-green-200 md:flex md:justify-center ">
                                        <Image
                                            src={e.photo_url}
                                            alt={`${e.name} photo`}
                                            width={60}
                                            height={40}
                                            className="rounded-full border-2 border-white shadow-sm"
                                        />
                                    </td>
                                    <td className="p-3 border-y border-r border-green-200 rounded-r-lg font-mono">
                                        ${e.salary.toLocaleString()}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="text-center p-10 text-gray-500">
                                    No se encontraron empleados.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}