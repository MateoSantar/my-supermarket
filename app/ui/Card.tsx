export default function Card({children}:{children:React.ReactNode}){
    return(
        <div className="bg-blue-300 p-6 rounded-lg shadow-md">
            {children}
        </div>
    );
}