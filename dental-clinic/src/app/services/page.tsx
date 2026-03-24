import { getServices } from "@/lib/api";
import Heading from "@/components/Services/Heading";
import ServiceCard from "@/components/Services/ServiceCard";
import { type ServicesData } from "@/types/strapi";
import CtaSection from "@/components/Common/CtaSection";

interface ServicesPageProps {
    service: ServicesData | null;
}

async function getPageData(): Promise<ServicesPageProps> {
    try {
        const [serviceRes] = await Promise.all([
            getServices(),
        ]);

        return {
            service: serviceRes,
        };
    } catch (error) {
        console.error("Error fetching page data:", error);
        return {
            service: null,
        };
    }
}

export default async function ServicesPage() {
    const pageData = await getPageData();

    return (
        <main>
            {pageData.service?.sectionTitle && <Heading sectionTitle={pageData.service.sectionTitle} />}
            {pageData.service?.serviceCards &&

                pageData.service.serviceCards.map((serviceCard, index) =>
                    <div key={serviceCard.id}>
                        <ServiceCard
                            key={serviceCard.id}
                            sectionTitle={serviceCard.sectionTitle}
                            services={serviceCard.serviceList} isLast={index === pageData.service!.serviceCards.length-1}
                            image={serviceCard.image} ltr={index % 2 === 0}
                        />
                    </div>
                )}
            {pageData.service?.ctaSection && <CtaSection ctaSection={pageData.service.ctaSection}/>}
        </main>
    );
}