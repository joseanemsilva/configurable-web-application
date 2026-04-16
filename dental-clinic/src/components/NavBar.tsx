"use client";
import Link from "next/link";
import Image from "next/image";
import {useState, useCallback } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

interface NavLinkType {
    label: string;
    href: string;
}

const navItems: NavLinkType[] = [
    {
        label: "home",
        href: "/"
    },
    {
        label: "aboutUs",
        href: "/about-us"
    },
    {
        label: "services",
        href: "/services"
    },
    {
        label: "contactUs",
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

    // Get translation for the navigation menu
    const t = useTranslations('NavBar');

	return (
        <nav className="text-primary sm:p-3 shadow-xl">
            <div className="container mx-auto sm:flex sm:justify-between px-2 py-1 items-center">
                <div className="flex w-full items-center justify-between px-4 py-3 sm:p-0 md:w-auto">
                    <div className="flex">
                        <Link href="/" >
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={10}
                            className="object-contain"
                        />
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center gap-6">
                        <LocaleSwitcher/>
                        <button role="button" onClick={toggle} aria-label="Toggle navigation menu">
                            {isOpen ? (
                                <FaXmark className="size-8 text-primary" />
                            ) : (
                                <FaBars className="size-8 text-primary" />)}
                        </button>
                    </div>
                </div>
                <div data-testid="menu" className={`${isOpen ? "mt-4 flex mb-3" : "hidden"} flex-col gap-3 md:mt-0 md:flex md:flex-row md:items-center md:justify-end md:gap-6`}>
                    {navItems.map((link) => (
                        <Link role="link" onClick={closeMenu} key={link.href} href={link.href} className="font-semibold hover:text-accent3 mx-3">
                            {t(link.label)}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:flex">
                    <LocaleSwitcher/>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
