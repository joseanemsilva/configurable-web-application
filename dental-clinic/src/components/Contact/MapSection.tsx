
import { GoogleMapsEmbed } from '@next/third-parties/google'

import { type SectionTitleData } from "@/types/strapi";
import SectionTitle from "../Common/SectionTitle";

interface MapsProps {
    sectionTitle: SectionTitleData;
    location: String;
}

export default function Maps({ sectionTitle, location }: MapsProps) {
    const apiKey = process.env.NEXT_PUBLIC_API_GOOGLE || ' ';
    return (
        <section className="bg-accent1 text-white sm:px-10 lg:py-20 md:py-32 pt-16 pb-5">
            <SectionTitle
                sectionTitleData={sectionTitle}
                center
            />
            <div className="mx-auto w-full max-w-[800px] px-8 py-4 mb-8 overflow-hidden">
            <div className="w-full rounded-md shadow-lg">
                <GoogleMapsEmbed
                    apiKey={apiKey}
                    height={400}
                    width="100%"
                    mode="place"
                    q={`${location}`}
                    style="border-radius: 10px"
                />
            </div>
            </div>
        </section>
    );
};