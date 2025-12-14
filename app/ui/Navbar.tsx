'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { bebas_neue as bebas } from "@/app/utils/fonts";
// Importamos motion
import { motion } from "framer-motion"; 
import { Link as LinkType } from "@/app/utils/definitions"; // Renombré el tipo para evitar confusión
import clsx from "clsx"; 


export default function Navbar() {
    const navLinks: LinkType[] = [{ // Usé navLinks para ser más descriptivo
        label: "Home",
        link: "/dashboard"
    },{
        label: "Employees",
        link: "/dashboard/employees"
    },{
        label: "Products",
        link: "/dashboard/products"
    }];

    const pathName = usePathname();

    return(
        <nav className="flex flex-row items-center justify-center md:justify-between md:px-5 bg-green-100 h-auto md:h-25">
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
                {navLinks.map((link) => {
                    const isActive = pathName === link.link;
                    
                    return(
                        <Link
                            href={link.link}
                            key={link.link}
                            className={clsx(
                                "relative flex items-center justify-center p-4 h-full w-full md:w-50 transition-colors z-10",
                                {
                                    'text-white': isActive,
                                    'text-black hover:text-green-600': !isActive
                                }
                            )}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="navbar-pill"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    className="absolute inset-0 bg-green-300 -z-10"
                                />
                            )}
                            
                            <span className="relative z-20">
                                {link.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}