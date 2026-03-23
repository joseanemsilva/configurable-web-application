import SectionTitle from "@/components/Common/SectionTitle";
import TeamMember from "./TeamMember";

import {type SectionTitleData, type TeamCard} from "@/types/strapi";

interface TeamProps {
  sectionTitle: SectionTitleData;
  team: TeamCard[];
}

export default function Team({ sectionTitle, team }: TeamProps) {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-22.5 lg:pt-30"
    >
      <div className="container mx-auto">
        <div className="mb-15 text-justify">
          <SectionTitle
            sectionTitleData={sectionTitle}
            width="80%"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {team.map((teamMember, i) => (
            <TeamMember key={i} teamCard={teamMember} />
          ))}
        </div>
      </div>
    </section>
  );
};