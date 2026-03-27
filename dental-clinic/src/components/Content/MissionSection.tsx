import { FaTooth } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import { type MissionData } from "@/types/strapi";

interface MissionSectionProps {
    mission: MissionData;
}

export default function MissionSection({ mission }: MissionSectionProps) {
    return (
        <section className="bg-accent2 text-white lg:py-20 md:py-32 py-16 px-8">
            <SectionTitle
                sectionTitleData={mission.sectionTitle}
                center
            />

            <div className="">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {mission.contents.map ((content) => (
                            <div key={content.id} className="mx-auto flex max-w-xs flex-col gap-y-4 p-4">
                                <FaTooth className="text-4xl mx-auto" />
                                <dt className="lg:text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">{content.title}</dt>
                                <dd className="text-base/7 text-gray-600">
                                    {content.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};