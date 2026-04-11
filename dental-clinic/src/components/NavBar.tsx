"use client";
import Link from "next/link";
import {useState, useCallback } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import LocaleSwitcher from "./LocaleSwitcher";
import Image from "next/image";

interface NavLinkType {
    label: string;
    href: string;
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
        <nav className="text-primary sm:p-3">
            <div className="container mx-auto sm:flex sm:justify-between px-2 py-1">
                <div className="flex w-full items-center justify-between px-4 py-3 sm:p-0 md:w-auto border-2s">
                    <div className="relative h-full w-25">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                        />
                    </div>
                    <div className="md:hidden flex items-center">
                        <button role="button" onClick={toggle} aria-label="Toggle navigation menu">
                            {isOpen ? (
                                <FaXmark className="size-6 text-primary" />
                            ) : (
                                <FaBars className="size-6 text-primary" />)}
                        </button>
                    </div>
                </div>
                <div data-testid="menu" className={`${isOpen ? "mt-4 flex mb-3" : "hidden"} flex-col gap-3 md:mt-0 md:flex md:flex-row md:items-center md:justify-end md:gap-6`}>
                    {navItems.map((link) => (
                        <Link role="link" onClick={closeMenu} key={link.href} href={link.href} className="font-semibold hover:text-accent3 mx-3">
                            {link.label}
                        </Link>
                    ))}
                    <LocaleSwitcher/>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
