import { type CtaContent } from "@/types/strapi";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

interface CtaSectionProps {
    ctaSection: CtaContent;
}

export default function CtaSection({ ctaSection }: CtaSectionProps) {
    return (
        <section className="bg-accent1 relative z-10 py-16 md:py-20 lg:py-28">
            <div className="container mx-auto">
                <SectionTitle
                    sectionTitleData={ctaSection}
                    center
                />
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-6">
                    <Link href={ctaSection.link} className="rounded-4xl px-6 py-2 text-base font-semibold btn bg-primary text-background duration-300 ease-in-out hover:bg-primary/80">{ctaSection.ctaPrimary}</Link>
                </div>
            </div>
        </section>

    );
};