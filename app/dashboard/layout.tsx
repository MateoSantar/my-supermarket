import Navbar from "@/app/ui/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <div>
                <Navbar />
            </div>
            <Suspense fallback={<Loading />}>
                <div className="md:p-6 bg-green-300 min-h-screen">
                    <div className="bg-green-200 p-5">
                        {children}
                    </div>
                </div>
            </Suspense>

        </div>
    );
}