import { type SectionTitleData } from "@/types/strapi";
import SectionTitle from "../Common/SectionTitle";

interface HeadingProps {
    sectionTitle: SectionTitleData
}

export default function Heading({sectionTitle}: HeadingProps) {
    return (
        <section className="bg-accent2 sm:px-10 lg:py-20 md:py-32 pt-16 pb-5">
                <SectionTitle
                    sectionTitleData={sectionTitle}
                    width="75%"
                    center
                />
        </section>
    );
};