"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
    // Get translation for the navigation menu
    const t = useTranslations('Footer');

    return (
        <>
            <footer className="relative z-10 bg-primary pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-center">

                        <div className="w-full px-4 md:w-1/2 lg:w-2/12 xl:w-3/12 flex">
                            <div className="px-4 mb-12 max-w-90 lg:mb-16">
                                {/* Logo */}
                                <div className="flex">
                                        <Image
                                            src="/logo_footer.png"
                                            alt="Logo"
                                            width={100}
                                            height={10}
                                            className="object-contain"
                                        />
                                </div>
                                <p className="mt-5 mb-5 text-base leading-relaxed text-accent1 dark:text-accent1-dark">
                                    {t('slogan')}
                                </p>

                                {/* TODO: Include actual Social Links */}
                                <div className="flex">
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
                                    {t('title1')}
                                </h2>
                                <ul>
                                    <li>
                                        <Link
                                            href="/"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            {t('home')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/about-us"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            {t('aboutUs')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact-us"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            {t('contactUs')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
                            <div className="mb-12 lg:mb-16 px-4">
                                <h2 className="mb-5 text-xl font-bold text-white dark:text-white">
                                    {t('title2')}
                                </h2>
                                <ul>
                                    <li>
                                        <Link
                                            href="/services"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            {t('service1')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            {t('service2')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            {t('service3')}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 md:w-1/2 lg:w-2/12 xl:w-2/12">
                            <div className="mb-12 lg:mb-16 px-4">
                                <h2 className="mb-5 text-xl font-bold text-white dark:text-white">
                                    {t('title3')}
                                </h2>
                                <ul>
                                    <li>
                                        <Link
                                            href="/"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            {t('policy1')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            {t('policy2')}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="mb-4 inline-block text-base text-accent1 duration-300 hover:text-accent2 dark:text-body-color-dark dark:hover:text-accent2"
                                        >
                                            {t('insurance')}
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