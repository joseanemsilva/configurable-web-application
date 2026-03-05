import Heading from "@/components/Services/Heading";
import ServiceSection from "@/components/Services/ServiceSection";
import { ServiceListProps } from "@/types/ServiceType";
import ClosingSection from "@/components/Common/CtaSection";

const services: ServiceListProps[] = [
    {
        id: 1,
        title: "General Dentistry",
        description: "The foundation of a healthy life starts with a healthy mouth. Our General Dentistry services focus on preventive care, early detection of issues, and long-term maintenance. We provide a gentle experience for the whole family, ensuring that every visit is comfortable and informative.",
        serviceList: [
            "Comprehensive Oral Exams",
            "Professional Cleanings",
            "Digital X-Rays",
            "Fluoride Treatments",
            "Periodontal (Gum) Therapy",
            "Root Canal Therapy"
        ]
    },
    {
        id: 2,
        title: "Cosmetic Dentistry",
        description: "A confident smile can change your life. Our Cosmetic Dentistry services combine art and science to enhance the aesthetics of your teeth. Whether you are looking for a subtle brightness or a complete transformation, we tailor our treatments to match your unique smile goals.",
        serviceList: [
            "Teeth Whitening",
            "Porcelain Veneers",
            "Dental Bonding",
            "Smile Makeovers",
            "Gum Contouring"
        ]
    },
    {
        id: 3,
        title: "Orthodontics",
        description: "Proper alignment is about more than just looks; it’s about function and health. Our Orthodontic services help patients of all ages achieve a straighter, more functional bite. We offer modern solutions that fit into your lifestyle, whether for a growing child or an adult seeking a correction.",
        serviceList: [
            "Traditional Metal Braces",
            "Clear Ceramic Aligners",
            "Space Maintainers",
            "Retainers and Post-treatment Care",
            "Bite Correction"
        ]
    },
    {
        id: 4,
        title: "Emergency Dentistry",
        description: "Dental emergencies are stressful and often painful. We prioritize urgent care to get you out of pain and protect your teeth from further damage. If you are experiencing a dental crisis, our team is ready to provide immediate, compassionate support when you need it most.",
        serviceList: [
            "Severe Toothache Relief",
            "Chipped or Broken Teeth Repair",
            "Emergency Extractions",
            "Abscess and Infection Treatment",
            "Lost Filling or Crown Replacement"
        ]
    }
];

export default function ServicesPage() {
    return (
        <main>
            <Heading />
            {services.map((service, index) => (
                <div key={service.id}>
                    <ServiceSection service={service} ltr={index % 2 === 0} />
                </div>
            ))
            }
            <ClosingSection />
        </main>
    );
}