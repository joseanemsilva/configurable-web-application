import { IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import React from "react";
import SectionTitle from "../Common/SectionTitle";

interface ContentType {
    id: number;
    icon: string | React.ReactNode;
    title: string;
    paragraph: string;
}

const contents: ContentType[] = [
    {
        id: 1,
        icon: <IoCallOutline />,
        title: 'Call Us',
        paragraph: '+1 (234) 567-8901'
    },
    {
        id: 2,
        icon: <IoMailOutline />,
        title: 'Email Us',
        paragraph: 'dentalClinic@toronto.ca'
    },
    {
        id: 4,
        icon: <IoLocationOutline />,
        title: 'Our Location',
        paragraph: '401 Smile, 1st Floor, Toronto, ON - Canada'
    },
    {
        id: 3,
        icon: <BsClock />,
        title: 'Opening Hours',
        paragraph: `Mon-Fri: 9:00 AM - 8:00 PM\nSat-Sun: 10:00 AM - 6:00 PM`
    }
];

const Contact = () => {
    return (
        <section id="contact" className="relative py-16 px-8 md:py-[120px]">
            <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
            <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-accent2 dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
            <div className="container px-4 mx-auto">
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 lg:w-7/12 xl:w-7/12">
                        <div className="">

                            <div className="mb-12 lg:mb-[150px]">
                                <SectionTitle
                                    title="Contact Us"
                                    paragraph="We are here to help you with any questions. Please feel free to reach out to us through any of the contact methods below, and we will get back to you as soon as possible."
                                />
                            </div>

                            <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                                {contents.map((content) => (
                                    <div key={content.id} className="mb-8 flex w-[330px] max-w-full">
                                        <div className="mr-6 text-[32px] text-primary">
                                            {content.icon}
                                        </div>
                                        <div>
                                            <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                                                {content.title}
                                            </h3>
                                            <p className="text-base text-body-color dark:text-dark-6 whitespace-pre-line">
                                                {content.paragraph}
                                            </p>
                                    </div>
                                </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* TODO: Form validation for user input*/}
                    <div className="w-full px-4 lg:w-5/12 xl:w-5/12">
                        <div
                            className="wow fadeInUp rounded-lg bg-white px-8 py-10 sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px] shadow-lg"
                            data-wow-delay=".2s"
                        >
                            <h3 className="mb-8 text-2xl font-semibold text-dark md:text-[28px] md:leading-[1.42]">
                                Send us a Message
                            </h3>
                            <form>
                                <div className="mb-[22px]">
                                    <label
                                        htmlFor="fullName"
                                        className="mb-4 block text-sm text-body-color dark:text-dark-6"
                                    >
                                        Full Name*
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Adam Gelius"
                                        className="w-full border-0 border-b border-accent2 bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                                    />
                                </div>
                                <div className="mb-[22px]">
                                    <label
                                        htmlFor="email"
                                        className="mb-4 block text-sm text-body-color dark:text-dark-6"
                                    >
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="example@yourmail.com"
                                        className="w-full border-0 border-b border-accent2 bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                                    />
                                </div>
                                <div className="mb-[22px]">
                                    <label
                                        htmlFor="phone"
                                        className="mb-4 block text-sm text-body-color dark:text-dark-6"
                                    >
                                        Phone*
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="+885 1254 5211 552"
                                        className="w-full border-0 border-b border-accent2 bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                                    />
                                </div>
                                <div className="mb-[30px]">
                                    <label
                                        htmlFor="message"
                                        className="mb-4 block text-sm text-body-color dark:text-dark-6"
                                    >
                                        Message*
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={1}
                                        placeholder="type your message here"
                                        className="w-full resize-none border-0 border-b border-accent2 bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                                    ></textarea>
                                </div>
                                <div className="mb-0">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center font-semibold rounded-4xl px-6 py-2 bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90 "
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
