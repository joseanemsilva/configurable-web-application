import ServiceList from "@/components/Services/ServiceList";
import { ServiceListProps } from "@/types/ServiceType";
import ImageCard from "./ImageCard";

interface ServiceSectionProps {
    service: ServiceListProps;
    ltr?: boolean
}

const ServiceSection = ({ service, ltr = true }: ServiceSectionProps) => {
    const { id, title, description, serviceList } = service;

    const direction = ltr ? "flex-row" : "flex-row-reverse";
        
    return (
        <section id="serviceOne" className="pt-16 md:pt-20 lg:pt-28">
            <div className="container mx-auto">
                <div className="border-b border-body-color/[.15] pb-16 dark:border-white/15 md:pb-20 lg:pb-28">
                    <div className={`-mx-4 flex flex-wrap items-center ${direction}`}>
                        <ServiceList
                            id={id}
                            title={title}
                            description={description}
                            serviceList={serviceList}
                        />
                        <ImageCard
                            src="/user.jpg"
                            alt="Service Image"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;