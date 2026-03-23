import Image from "next/image";
import { type TeamCard } from "@/types/strapi";

interface TeamCardProps {
    teamCard: TeamCard;
}

export default function TeamMember({ teamCard }: TeamCardProps) {
    return (
        <>
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
                <div className="group mb-8 rounded-xl bg-white pb-4 pt-12 dark:bg-dark dark:shadow-none shadow-sm">
                    <div className="relative z-10 mx-auto mb-16 h-50 w-50">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${teamCard.image.url}`}
                            alt={teamCard.image.alternativeText}
                            className="w-full object-cover"
                            width={200}
                            height={200}
                        />
                    </div>

                    <div className="text-center">
                        <h3 className="mb-1 text-lg font-semibold text-primary dark:text-white">
                            {teamCard.name}
                        </h3>
                        <p className="mb-3 text-sm text-black">
                            {teamCard.role}
                        </p>
                        <p className="text-base text-black px-6 text-justify">
                            {teamCard.bio}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};