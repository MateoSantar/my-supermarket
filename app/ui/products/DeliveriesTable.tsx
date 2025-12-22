"use client";

import { Delivery } from "@/app/utils/definitions";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { priority } from "@/app/utils/constants";
import clsx from "clsx";
export default function DeliveriesTable({
    deliveries,
}: {
    deliveries: Delivery[];
}) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredDeliveries = deliveries.filter(
        (d) =>
            d.product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
            d.status.toLowerCase() == searchTerm.toLowerCase()
    )?.toSorted((a,b)=>{
        const weightA = priority[a.status as keyof typeof priority] || 99;
        const weightB = priority[b.status as keyof typeof priority] || 99;
        return weightA - weightB;
    });

    return (
        <section className="bg-green-100 min-w-full rounded shadow-sm border border-green-500 flex flex-col h-[550px] overflow-hidden">
            <div className="p-4 bg-green-200 border-b border-green-300 flex items-center gap-2 z-20">
                <MagnifyingGlassIcon className="w-5 h-5 text-green-700" />
                <input
                    type="text"
                    placeholder="Buscar por producto, supplier o estado"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-white rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
                />
            </div>

            <div className="overflow-y-auto flex-1 bg-green-50/50">
                <table className="border-separate border-spacing-y-3 w-full px-4">
                    <thead className="sticky top-0 z-10 bg-green-200">
                        <tr className="text-sm uppercase tracking-wider">
                            <th className="p-3 text-left text-green-800">ID</th>
                            <th className="p-3 text-left text-green-800">
                                Product
                            </th>
                            <th className="p-3 text-left text-green-800">
                                Quantity
                            </th>
                            <th className="p-3 text-left text-green-800">
                                Date
                            </th>
                            <th className="p-3 text-left text-green-800">
                                Supplier
                            </th>
                            <th className="p-3 text-left text-green-800">
                                Current Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDeliveries.length > 0 ? (
                            filteredDeliveries.map((d) => (
                                <tr key={d.id} className="group">
                                    <td className="p-3 bg-white border-y border-l border-green-200 rounded-l-lg font-medium group-hover:bg-green-50 transition-colors">
                                        {d.id}
                                    </td>
                                    <td className="p-3 bg-white border-y border-green-200 group-hover:bg-green-50 transition-colors ">
                                        {d.product.name}
                                    </td>
                                    <td className="p-3 bg-white border-y border-green-200 group-hover:bg-green-50 transition-colors">
                                        {d.quantity}
                                    </td>
                                    <td className="p-3 bg-white border-y border-green-200 group-hover:bg-green-50 transition-colors">
                                        {`${d.deliveryDate
                                            .getDate()
                                            .toString()
                                            .padStart(2, "0")}/${(
                                            d.deliveryDate.getMonth() + 1
                                        )
                                            .toString()
                                            .padStart(2, "0")}/${d.deliveryDate.getFullYear()}`}
                                    </td>
                                    <td className="p-3 bg-white border-y border-green-200 group-hover:bg-green-50 transition-colors">
                                        {d.supplier}
                                    </td>
                                    <td className="p-3 bg-white border-y border-r border-green-200 rounded-r-lg font-medium group-hover:bg-green-50 transition-colors">
                                        <span
                                            className={clsx("", {
                                                "text-blue-500":
                                                    d.status == "Pendiente",
                                                "text-green-500":
                                                    d.status == "Entregado",
                                                "text-yellow-500":
                                                    d.status == "En tránsito",
                                            })}
                                        >
                                            {d.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="text-center p-10 text-green-600"
                                >
                                    No se encontraron deliveries
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
