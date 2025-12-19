"use client";

import { Sale } from "@/app/utils/definitions"; 

export default function TopProducts({ sales }: { sales: Sale[] }) {
    const topSales = sales
        .toSorted(
            (a, b) =>
                b.product.price * b.quantity - a.product.price * a.quantity
        )
        .slice(0, 3);

    return (
        <section className="p-5 bg-green-50 shadow-sm rounded">
            <h1 className="text-4xl text-center mb-8">Top Products</h1>

            <div className="flex flex-row items-end justify-center gap-4 h-[300px]">
                <div className="flex flex-col items-center w-fit">
                    <h1 className="text-center mb-2 font-bold text-gray-500">
                        2º
                    </h1>
                    <h1 className="text-center mb-2 text-sm">
                        {topSales[1]?.product.name}
                    </h1>
                    <Rectangle height={150} color="#c4c4c4ff" />
                </div>

                <div className="flex flex-col items-center w-fit">
                    <h1 className="text-center mb-2 font-bold text-yellow-500 text-xl">
                        1º
                    </h1>
                    <h1 className="text-center mb-2 font-bold">
                        {topSales[0]?.product.name}
                    </h1>
                    <Rectangle height={200} color="#ffff00ff" />
                </div>

                <div className="flex flex-col items-center w-fit">
                    <h1 className="text-center mb-2 font-bold text-orange-700">
                        3º
                    </h1>
                    <h1 className="text-center mb-2 text-sm">
                        {topSales[2]?.product.name}
                    </h1>
                    <Rectangle height={120} color="#e79857ff" />
                </div>
            </div>
        </section>
    );
}

function Rectangle({ height, color }: { height: number; color: string }) {
    return (
        <div
            style={{
                height: height,
                width: "60px",
                backgroundColor: color,
            }}
            className="rounded-t-md shadow-md"
        ></div>
    );
}
