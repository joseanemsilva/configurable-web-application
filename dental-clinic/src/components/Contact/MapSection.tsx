
import { GoogleMapsEmbed } from '@next/third-parties/google'

import { type SectionTitleData } from "@/types/strapi";
import SectionTitle from "../Common/SectionTitle";

interface MapsProps {
    sectionTitle: SectionTitleData;
    location: String;
}

export default function Maps( {sectionTitle, location}: MapsProps) {
    const apiKey = process.env.NEXT_PUBLIC_API_GOOGLE || ' ';
    return (
        <section className="bg-accent1 text-white sm:px-10 lg:py-20 md:py-32 pt-16 pb-5">
            <SectionTitle
                sectionTitleData={sectionTitle}
                width='75%'
                center
            />
            <div className="container flex justify-center  mx-auto p-4 mb-8 w-100%">
                <GoogleMapsEmbed
                    apiKey={apiKey}
                    height={400}
                    width={900}
                    mode="place"
                    q={`${location}`}
                />
            </div>
        </section>
    );
};