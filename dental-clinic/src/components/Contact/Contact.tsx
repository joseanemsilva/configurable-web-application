import { IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";
import { IconType } from "react-icons";
import { BsClock } from "react-icons/bs";
import React, { ReactElement } from "react";
import SectionTitle from "../Common/SectionTitle";
import { type ContactData } from "@/types/strapi";
import ContactForm from "./ContactForm";

interface ContactProps {
    contact: ContactData,
}

export default function Contact({contact}: ContactProps) {

    const icons: ReactElement[] = [(<IoCallOutline />), ( <IoMailOutline />), (<IoLocationOutline />), (<BsClock />) ]

    return (
         <section id="contact" className="relative py-16 px-8 md:py-30">
            <div className="absolute left-0 top-0 -z-1 h-full w-full dark:bg-dark"></div>
            <div className="absolute left-0 top-0 -z-1 h-1/2 w-full bg-accent2 dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
            <div className="container px-4 mx-auto">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-7/12 xl:w-7/12">
                        <div className="">

                            {/* Section Title */}
                            <div className="mb-12 lg:mb-37.5">
                                <SectionTitle
                                    sectionTitleData={contact.sectionTitle}
                                />
                            </div>

                            {/* Contact Information */}
                            <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                                {contact.contactInfo.map((content, i) => (
                                    <div key={content.id} className="mb-8 flex w-82.5 max-w-full">
                                        <div className="mr-6 text-[32px] text-primary">
                                            {icons[i]}
                                        </div>
                                        <div>
                                            <h3 className="mb-4.5 text-lg font-semibold text-dark dark:text-white">
                                                {content.title}
                                            </h3>
                                            <p className="text-base text-body-color dark:text-dark-6 whitespace-pre-line">
                                                {content.description}
                                            </p>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <ContactForm
                        contactForm={contact.contactForm}
                    />
                </div>
            </div>
        </section>
    );
}