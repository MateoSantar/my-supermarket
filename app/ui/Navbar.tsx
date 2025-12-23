"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { bebas_neue as bebas } from "@/app/utils/fonts";
import { motion } from "framer-motion";
import { Link as LinkType } from "@/app/utils/definitions"; // Renombré el tipo para evitar confusión
import clsx from "clsx";
import { signOut } from "next-auth/react";
import { PowerIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
export default function Navbar() {
    const navLinks: LinkType[] = [
        {
            // Usé navLinks para ser más descriptivo
            label: "Home",
            link: "/dashboard",
        },
        {
            label: "Employees",
            link: "/dashboard/employees",
        },
        {
            label: "Products",
            link: "/dashboard/products",
        },
    ];

    const {data:session,status} = useSession();
    const pathName = usePathname();

    if (!session) {
        return <div></div>
    }
    return (
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

            <div
                className={`flex flex-col md:flex-row w-full md:w-auto text-3xl tracking-widest h-full items-center ${bebas.className}`}
            >
                {navLinks.map((link) => {
                    const isActive = pathName === link.link;

                    return (
                        <Link
                            href={link.link}
                            key={link.link}
                            className={clsx(
                                "relative flex items-center justify-center p-4 h-full w-full md:w-50 transition-colors z-10",
                                {
                                    "text-white": isActive,
                                    "text-black hover:text-green-600":
                                        !isActive,
                                }
                            )}
                            
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="navbar-pill"
                                    transition={{
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 0.6,
                                    }}
                                    className="absolute inset-0 bg-green-300 -z-10"
                                />
                            )}

                            <span className="relative z-20">{link.label}</span>
                        </Link>
                    );
                })}
                <button
                    onClick={(e) =>
                        signOut({ redirect: true, callbackUrl: "/login" })
                    }
                >
                    <PowerIcon
                        width={40}
                        height={40}
                        className="cursor-pointer hover:text-green-500 transition-colors active:text-white md:ml-5 mb-3 md:mb-0"
                    />
                </button>
            </div>
        </nav>
    );
}
