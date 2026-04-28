'use client';

import { navlinks } from "@/constants/navlinks";
import { usePathname } from "next/navigation";

import Link from "next/link";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="w-auto">
            <ul className="flex items-center justify-center gap-4">
                {navlinks.map((link) => (
                    <Link key={link?.id} href={link?.path} className="text-base md:text-lg font-medium tracking-tight"><span className={`${pathname === link?.path ? 'bg-gradient-to-r from-violet-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent' : 'text-zinc-300 hover:text-white'} transition-all duration-200`}>{link?.name}</span></Link>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
