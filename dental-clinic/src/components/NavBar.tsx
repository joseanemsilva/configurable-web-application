"use client";
import Link from "next/link";
import {useState, useCallback } from "react";
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
    const toggle = useCallback(() => {
	    setIsOpen(!isOpen);
	}, [setIsOpen, isOpen]);
    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

	return (
        <nav className="text-primary p-4 sm:p-6">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <a href="/" className="text-2xl font-bold">Logo</a>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggle} aria-label="Toggle navigation menu">
                            {isOpen ? (
                                <FaXmark className="size-6 text-primary" />
                            ) : (
                                <FaBars className="size-6 text-primary" />)}
                        </button>
                    </div>
                </div>
                <div className={`${isOpen ? "mt-4 flex" : "hidden"} flex-col gap-3 md:mt-0 md:flex md:flex-row md:items-center md:justify-end md:gap-4`}>
                    {navItems.map((link) => (
                        <Link onClick={closeMenu} key={link.href} href={link.href} className="font-semibold hover:text-accent3">
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
