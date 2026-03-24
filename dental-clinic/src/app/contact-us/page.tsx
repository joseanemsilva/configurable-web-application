import Contact from "@/components/Contact/Contact";
import MapSection from "@/components/Contact/MapSection";

import { getContact } from "@/lib/api";
import { type ContactData } from "@/types/strapi";

interface ContactPageProps {
    contact: ContactData | null;
}

async function getPageData(): Promise<ContactPageProps> {
    try {
        const [contactRes] = await Promise.all([
            getContact(),
        ]);
        return {
            contact: contactRes,
        };
    } catch (error) {
        console.error("Error fetching page data:", error);
        return {
            contact: null,
        };
    }
}

export default async function ContactPage() {
    const pageData = await getPageData();

    console.log("PAGE DATA", pageData)
    return (
        <main>
            {pageData.contact && <Contact contact={pageData.contact}/>}
            {pageData.contact && <MapSection sectionTitle={pageData.contact.maps.sectionTitle} location={pageData.contact.maps.location}/>}
        </main>
    )
}