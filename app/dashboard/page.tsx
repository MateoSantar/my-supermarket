"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Dashboard() {
    const { data: session, status } = useSession();

    if (!session) {
        redirect("/login");
    }

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video de Fondo */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 w-auto min-w-full min-h-full max-w-none md:block hidden"
            >
                <source src="/videos/dashboardBG.mp4" type="video/mp4" />
                Tu navegador no soporta videos.
            </video>

            {/* Contenido sobre el video */}
            <div className="relative z-10 flex h-full items-between p-5 justify-center md:bg-black/40">
                <div className="text-center flex flex-col justify-center gap-3">
                    <h1 className="text-green-600 md:text-white text-5xl md:text-6xl font-bold">
                        {`Welcome to My Supermarket`}
                    </h1>
                    <h2 className="text-white text-3xl font-italic">
                        {session?.user.name?.split(' ')[0]}
                    </h2>
                    <h3 className="text-gray-400 text-2xl font-bold">
                        Access through the nav bar
                    </h3>
                </div>
            </div>
        </section>
    );
}
