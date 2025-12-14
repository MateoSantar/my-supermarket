'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {Bebas_Neue} from "next/font/google"
import { Link as links } from "@/app/utils/definitions";
import clsx from "clsx"; 
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
        <nav className="flex flex-row items-center justify-center md:justify-between md:px-5 bg-green-100 h-auto md:h-25 ">
            <div>
                <Image
                src={"/images/icon.webp"}
                width={150}
                height={0}
                alt="icon"
                className="pt-3 md:block hidden"
                />

                
            </div>
            <div className={`flex flex-col md:flex-row w-full md:w-auto text-3xl tracking-widest h-full items-center ${bebas.className}`}>
                {links.map((link)=>{
                    return(
                        <Link
                        href={link.link}
                        key={link.link}
                        className={clsx("h-1/2 flex items-center justify-center p-4 h-full w-full md:w-50 active:text-black hover:bg-green-400 hover:text-white transition",
                            {'bg-green-300 text white' : pathName === link.link}
                        )}>
                            {link.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}