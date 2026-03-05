import SectionTitle from "@/components/Common/SectionTitle";
import SingleTeam from "./SingleTeam";

interface TeamType {
    id: number;
    name: string;
    designation: string;
    image: string;
    bio?: string;
};

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Dr. Luciana Silva",
    designation: "Lead Dentist and Founder",
    image: "/user.jpg",
    bio: "With over fifteen years of clinical experience, she specializes in family dentistry and is a leading advocate for patient-centered care. Her bilingual fluency in English and Portuguese allows her to connect deeply with the community, ensuring every patient feels understood."
  },
  {
    id: 2,
    name: "Dr. Mark Fernandez",
    designation: "Associate Dentist",
    image: "/user.jpg",
    bio: "Dr. Mark Thompson brings a calm, reassuring presence to the BrightSmile team, specializing in restorative and emergency dental procedures. Mark stays at the forefront of dental technology, constantly integrating the latest minimally invasive methods into his daily practice."
  },
  {
    id: 3,
    name: "Ana Oliveira",
    designation: "Dental Hygienist",
    image: "/user.jpg",
    bio: "Ana Oliveira is a licensed dental hygienist with a passion for promoting oral health and preventing dental disease. She takes the time to educate patients on proper brushing and flossing techniques, ensuring that everyone leaves with a clean, healthy smile."
  },
  {
    id: 4,
    name: "Beatriz Fontes",
    designation: "Dental Hygienist",
    image: "/user.jpg",
    bio: "Beatriz Fontes has a unique talent for turning routine cleanings into fun, educational adventures that leave children feeling brave and excited to return. Beatriz focuses heavily on preventive care, empowering patients of all ages with the tools and knowledge to maintain their oral health at home."
  },
];

const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-22.5 lg:pt-30"
    >
      <div className="container mx-auto">
        <div className="mb-15 text-justify">
          <SectionTitle
            title="Meet Our Team"
            paragraph="Our team of dedicated professionals is here to provide you with exceptional dental care. With a passion for creating healthy smiles and a commitment to patient comfort, we work together to ensure that every visit is a positive experience. We offer services in both English and Portuguese, making it easier for our diverse community to access the care they need. Get to know the friendly faces behind our practice and discover how we can help you achieve your best smile."
            width="80%"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;