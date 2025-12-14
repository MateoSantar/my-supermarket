import Navbar from "@/app/ui/dashboard/Navbar";
export default function Layout({children}:{children:React.ReactNode}){
    return(
        <div className="flex h-screen flex-col">
            <div>
                <Navbar/>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}