'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {Bebas_Neue} from "next/font/google"
import { Link as links } from "@/app/utils/definitions/link";
const bebas = Bebas_Neue({weight:"400"});
export default function Navbar() {
    const links : links[] = [{
        label:"Home",
        link:"/dashboard"
    },{
        label:"Employees",
        link:"/dashboard/employees"
    },{
        label:"Products",
        link:"/dashboard/products"
    }];
    const pathName = usePathname();
    return(
        <nav className="flex flex-row items-center justify-between px-5 bg-green-100 h-25 ">
            <div>
                <Image
                src={"/images/icon.webp"}
                width={150}
                height={0}
                alt="icon"
                className="pt-3"
                />

                
            </div>
            <div className={`flex flex-row  text-3xl tracking-widest h-full items-center ${bebas.className}`}>
                {links.map((link)=>{
                    return(
                        <Link
                        href={link.link}
                        key={link.link}
                        className="h-1/2 flex items-center justify-center p-4 h-full w-50 hover:bg-green-400 hover:text-white transition">
                            {link.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}