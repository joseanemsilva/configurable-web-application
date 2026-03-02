"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

interface NavLinkType {
    label: string,
    href: string
}

const navItems: NavLinkType[] = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About Us",
        href: "/about-us"
    },
    {
        label: "Services",
        href: "/services"
    },
    {
        label: "Contact Us",
        href: "/contact-us"
    }
];

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    function getMenuClasses() {
        let menuClasses = [];
        if(isOpen) {
            menuClasses = [
                "flex",
                "absolute",
                "top-[60px]",
                "bg-gray-800",
                "w-full",
                "left-0",
                "p-4",
                "gap-10",
                "flex-col"
            ];
        } else {
            menuClasses = [
                "hidden",
                "md:flex",
            ];
        }

        return menuClasses.join(" ");
    }

    return (
        <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold"> Logo</a>
                <ul className={getMenuClasses()}>
                    {navItems.map((link) => (
                        <li key={link.label}>
                            <Link href={link.href}  className="mx-2 hover:text-gray-300">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden flex items-center">
                    <button onClick={() => {setIsOpen(!isOpen)}}>
                        {isOpen ? (
                            <FaXmark className="size-6 text-red"/>
                        ) : (
                             <FaBars className="size-6 text-red"/> )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;