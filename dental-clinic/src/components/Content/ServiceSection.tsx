import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { type ServiceSectionData } from "@/types/strapi";
import Image from "next/image";
import { getStrapiMediaUrl } from "@/lib/utils";

interface ServiceSectionProps {
    service: ServiceSectionData;
}

export default function ServiceSection({ service }: ServiceSectionProps) {
    return (
        <section className="lg:py-20 md:py-32 grid min-h-screen place-items-center px-8 py-16">
            <div className="mx-auto grid max-w-7xl gap-20 lg:px-8 xl:grid-cols-2 items-center">
                <div>
                    <SectionTitle
                        sectionTitleData={service.sectionTitle}
                    />

                    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Link href="/services" className="rounded-4xl px-6 py-3 text-base font-semibold btn bg-primary text-background duration-300 ease-in-out hover:bg-primary/80 shadow-xl">{service.ctaPrimary}</Link>
                    </div>
                </div>
                <div className="size-fit w-full flex justify-center px-4">
                    <Image
                        src={getStrapiMediaUrl(service.serviceImage.url)}
                        alt={service.serviceImage.alternativeText || "Service Image"}
                        width={800}
                        height={600}
                        priority
                        className="rounded-md shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};