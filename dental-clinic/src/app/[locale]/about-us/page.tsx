import { getAboutUs } from "@/lib/api";
import Heading from "@/components/About/Heading";
import Team from "@/components/About/Team";
import CtaSection from "@/components/Common/CtaSection";

interface AboutUsPageProps {
    aboutUs: any;
}

async function getPageData(locale: string): Promise<AboutUsPageProps> {
    try {
        const [aboutUsRes] = await Promise.all([
            getAboutUs(locale),
        ]);

        return {
            aboutUs: aboutUsRes,
        };
    } catch (error) {
        console.error("Error fetching page data:", error);
        return {
            aboutUs: null,
        };
    }
}

export default async function AboutUsPage({ params }: PageProps<'/[locale]'>) {

    const {locale} = await params;
    const pageData = await getPageData(locale);

    return (
        <main>
            {pageData.aboutUs.heading && <Heading heading={pageData.aboutUs.heading}/>}
            {pageData.aboutUs.team && <Team sectionTitle={pageData.aboutUs.team.sectionTitle} team={pageData.aboutUs.team.teamCards}/>}
            {pageData.aboutUs.ctaSection && <CtaSection ctaSection={pageData.aboutUs.ctaSection}/>}
        </main>
    );
};