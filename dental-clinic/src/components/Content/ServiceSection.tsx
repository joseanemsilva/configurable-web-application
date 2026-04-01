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
            <div className="mx-auto grid max-w-7xl gap-20 lg:px-8 xl:grid-cols-2">
                <div className="max-w-xl">
                    <SectionTitle
                        sectionTitleData={service.sectionTitle}
                        center
                    />

                    <div className="flex flex-col items-center justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-4">
                        <Link href="/services" className="rounded-4xl px-8 py-4 text-base font-semibold btn bg-primary text-background duration-300 ease-in-out hover:bg-primary/80">{service.ctaPrimary}</Link>
                    </div>
                </div>
                <div className="size-fit rounded-xl shadow-lg ring-1 ring-gray-900/10">
                    <Image
                        src={getStrapiMediaUrl(service.serviceImage.url)}
                        alt={service.serviceImage.alternativeText || "Service Image"}
                        width={800}
                        height={600}
                        priority
                        className="rounded-xl shadow-lg ring-1 ring-gray-900/10"
                    />
                </div>
            </div>
        </section>
    );
};



// const ServiceSection: React.FC = () => {
//   return (
// <section className="lg:py-20 md:py-32 grid min-h-screen place-items-center px-8 py-16">
//     <div className="mx-auto grid max-w-7xl gap-20 lg:px-8 xl:grid-cols-2">
//         <div className="max-w-xl">
//             <SectionTitle
//                 title="Expert Dentistry to All Generation"
//                 paragraph="From a toddler’s very first check-up to specialized restorative care for seniors, we are proud to be a home for every smile. We understand that dental needs change as you grow, which is why our team is trained in all-age smile care. We provide a gentle, stress-free environment designed to make children feel brave and adults feel relaxed."
//                 center
//             />

//             <div className="flex flex-col items-center justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-4">
//                 <Link href="/services" className="rounded-4xl px-8 py-4 text-base font-semibold btn bg-primary text-background duration-300 ease-in-out hover:bg-primary/80">Explore All Services</Link>
//             </div>
//         </div>
//         <div className="size-fit rounded-xl shadow-lg ring-1 ring-gray-900/10">
//             <img
//             src="https://wildwooddentalclinic.com/wp-content/uploads/2018/08/family-dentistry.jpg"
//             alt="Product screenshot"
//             className="rounded-xl shadow-lg ring-1 ring-gray-900/10"
//             />
//         </div>
//     </div>
// </section>
//   )
// }

// export default ServiceSection;