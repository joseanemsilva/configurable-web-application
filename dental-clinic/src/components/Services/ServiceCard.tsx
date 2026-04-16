import { type Service, type MyImage, type SectionTitleData } from "@/types/strapi";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { FaCheckCircle } from "react-icons/fa";
import { getStrapiMediaUrl } from "@/lib/utils";

interface ServiceCardProps {
    sectionTitle: SectionTitleData
    services: Service[];
    image: MyImage;
    ltr?: boolean;
    isLast?: boolean;
}

export default function ServiceCard({ sectionTitle, services, image, ltr, isLast }: ServiceCardProps) {
    const direction = ltr ? "lg:flex-row" : "lg:flex-row-reverse";
    const midWay = Math.ceil(services.length / 2);
    const showBorder = isLast ? "" : "border-b";

    return (
        <section id="serviceOne" className="pt-16 md:pt-20 lg:pt-28">
            <div className="container mx-auto">
                <div className={`${showBorder} border-body-color/[.15] pb-16 dark:border-white/15 md:pb-20 lg:pb-28`}>
                    {/* <div className={`-mx-4 flex flex-wrap items-center ${direction}`}> */}
                    <div className={`-mx-4 flex max-w-7xl gap-4 lg:px-8 max-lg:flex-col items-center justify-center px-8 ${direction}`}>
                        < div className="w-full">
                            <SectionTitle
                                sectionTitleData={sectionTitle}
                                mb="44px"
                            />
                            <div className="mb-12 max-w-142.5 lg:mb-0 mx-2 px-6">
                                <div className="-mx-3 flex flex-wrap">
                                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                                        {services.slice(0, midWay).map((service, index) => (
                                            <p key={`${service.id}-${index}`} className="text-body-color mb-5 flex items-center text-lg font-medium">
                                                <span className=" text-primary mr-4 flex h-7.5 w-7.5 items-center justify-center">
                                                    <FaCheckCircle />
                                                </span>
                                                {service.service}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                                        {services.slice(midWay).map((service, index) => (
                                            <p key={`${service.id}-${index}`} className="text-body-color mb-5 flex items-center text-lg font-medium">
                                                <span className=" text-primary mr-4 flex h-7.5 w-7.5 items-center justify-center">
                                                    <FaCheckCircle />
                                                </span>
                                                {service.service}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Card */}
                        <div className="size-fit w-full flex justify-center px-4">
                            <Image
                                src={getStrapiMediaUrl(image.url)}
                                alt={image.alternativeText || "Service Image"}
                                width={800}
                                height={600}
                                priority
                                className="rounded-md shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};