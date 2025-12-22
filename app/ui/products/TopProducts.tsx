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
        // CAMBIO AQUÍ: Usamos pt-5 px-5 pb-0 en lugar de p-5
        // Esto elimina el espacio entre el gráfico y el final de la tarjeta verde
        <section className="pt-5 px-5 pb-5 bg-green-50 border border-green-500 shadow-sm rounded flex flex-col justify-between">
            <h1 className="text-4xl text-center mb-8">Top Products</h1>

            {/* items-end: Alinea las barras al fondo de este contenedor.
                h-[300px]: Mantiene la altura, pero como quitamos el padding del section,
                ahora tocará el borde inferior visualmente.
            */}
            <div className="flex flex-row items-end justify-center gap-4 h-[437px] w-full">
                
                {/* 2º LUGAR */}
                <div className="flex flex-col items-center w-fit">
                    <h1 className="text-center mb-2 font-bold text-gray-500">
                        2º
                    </h1>
                    <h1 className="text-center mb-2 text-sm">
                        {topSales[1]?.product.name}
                    </h1>
                    <Rectangle height={150} color="#c4c4c4ff" />
                </div>

                {/* 1º LUGAR */}
                <div className="flex flex-col items-center w-fit">
                    <h1 className="text-center mb-2 font-bold text-yellow-500 text-xl">
                        1º
                    </h1>
                    <h1 className="text-center mb-2 font-bold">
                        {topSales[0]?.product.name}
                    </h1>
                    <Rectangle height={200} color="#ffff00ff" />
                </div>

                {/* 3º LUGAR */}
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
            // CAMBIO SUGERIDO: rounded-t-md en vez de rounded completo para que parezca asentado en el piso
            className="rounded-t-md shadow-md"
        ></div>
    );
}