"use client";

import { Product } from "@/app/utils/definitions";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ProductsTable({ products }: { products: Product[] }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter(
        (p) =>
            p.area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="bg-green-100 min-w-full rounded shadow-sm border border-green-500 flex flex-col h-[550px] overflow-hidden">
            {/* Header / Buscador */}
            <div className="p-4 bg-green-200 border-b border-green-300 flex items-center gap-2 z-20">
                <MagnifyingGlassIcon className="w-5 h-5 text-green-700" />
                <input
                    type="text"
                    placeholder="Buscar por nombre o area..."
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
                                Name
                            </th>
                            <th className="p-3 text-left text-green-800">
                                Area
                            </th>
                            <th className="p-3 text-left text-green-800">
                                Price
                            </th>
                            <th className="p-3 text-left text-green-800">
                                Stock
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((p) => (
                                <tr key={p.id} className="group">
                                    <td className="p-3 bg-white border-y border-l border-green-200 rounded-l-lg font-medium group-hover:bg-green-50 transition-colors">
                                        {p.id}
                                    </td>
                                    <td className="p-3 bg-white border-y border-green-200 group-hover:bg-green-50 transition-colors">
                                        {p.name}
                                    </td>
                                    <td className="p-3 bg-white border-y border-green-200 group-hover:bg-green-50 transition-colors">
                                        <span className="text-xs bg-green-100 px-2 py-1 rounded text-green-700 font-bold">
                                            {p.area.name}
                                        </span>
                                    </td>
                                    <td className="p-3 bg-white border-y border-green-200 group-hover:bg-green-50 transition-colors">
                                        ${p.price.toFixed(2)}
                                    </td>
                                    <td className="p-3 bg-white border-y border-r border-green-200 rounded-r-lg group-hover:bg-green-50 transition-colors">
                                        <span
                                            className={
                                                p.stock < 20
                                                    ? "text-red-500 font-bold"
                                                    : ""
                                            }
                                        >
                                            {p.stock}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="text-center p-10 text-green-600"
                                >
                                    No se encontraron productos
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
