'use client';

import SectionTitle from "../Common/SectionTitle";
import { ReadMore } from "../Common/ReadMore";
import { type HeadingData } from "@/types/strapi";


interface HeadingProps {
    heading: HeadingData;
}

export default function Heading( {heading}: HeadingProps) {
    return (
        <section className="bg-accent2 text-white lg:py-20 md:py-32 py-16 px-8">
            <SectionTitle
                sectionTitleData={heading}
                center
            />
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-6">
                <ReadMore
                    aria="about-us"
                    text={heading.longDescription}
                    maxLength={500}
                />
            </div>
        </section>
    );
};