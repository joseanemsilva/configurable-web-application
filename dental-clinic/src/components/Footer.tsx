"use client";
import Link from "next/link";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="relative z-10 bg-primary pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12">
                            <div className=" px-4 mb-12 max-w-[360px] lg:mb-16">
                                {/* Logo */}
                                <a href="/" className="text-2xl font-bold text-white"> Logo </a>
                                <p className="mt-5 mb-5 text-base leading-relaxed text-accent1 dark:text-accent1-dark">
                                    Your Smile is Our Priority
                                </p>

                                {/* TODO: Include actual Social Links */}
                                <div className="flex items-center">
                                    <a
                                        href="/"
                                        aria-label="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mr-6 text-body-color duration-300 hover:text-accent2 dark:hover:text-accent2"
                                    >
                                        <FaFacebook className="text-2xl text-white" />
                                    </a>
                                    <a
                                        href="/"
                                        aria-label="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-body-color duration-300 hover:text-accent2  dark:hover:text-accent2"
                                    >
                                        <FaInstagramSquare className="text-2xl text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                            <div className="mb-12 lg:mb-16 px-4">
                                <h2 className="mb-5 text-xl font-bold text-white dark:text-white">
                                    Navigate
                                </h2>
                                <ul>
                                    <li>
                                        <Link
                                            href="/"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/about-us"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact-us"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                            <div className="mb-12 lg:mb-16 px-4">
                                <h2 className="mb-5 text-xl font-bold text-white dark:text-white">
                                    Services
                                </h2>
                                <ul>
                                    <li>
                                        <Link
                                            href="/services"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            General Dentistry
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            Invisalign
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            Cosmetic Dentistry
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
                            <div className="mb-12 lg:mb-16 px-4">
                                <h2 className="mb-5 text-xl font-bold text-white dark:text-white">
                                    Policy and Insurance
                                </h2>
                                <ul>
                                    <li>
                                        <Link
                                            href="/privacy-policy"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/appointment-policy"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            Appointment Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/insurance-coverage"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            Insurance Coverage
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
                    <div className="py-8">
                        <p className="text-center text-base text-white dark:text-white">
                            Copyright © 2026{" "}
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-accent2"
                            >
                                Joseane Silva
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;