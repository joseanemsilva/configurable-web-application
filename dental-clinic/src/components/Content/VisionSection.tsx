import { FaTooth } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";

interface ContentType {
    id: number,
    title: string,
    description: string
}

const contents: ContentType[] = [
  { id: 1, title: 'Open 7 days a week', description: 'We offer weekend appointments.' },
  { id: 2, title: 'Emergencies Welcome', description: 'We prioritize emergency visits.' },
  { id: 3, title: 'Direct Insurance Billing', description: 'We bill insurance directly.' },
]


const EngageSection: React.FC = () => {
    return (
        <section className="bg-accent2 text-white lg:py-20 md:py-32 py-16 px-8">
            <SectionTitle
                title="Our Mission"
                paragraph="We believe clear communication is the foundation of great healthcare. Our dedicated team is proud to offer services in both English and Portuguese, ensuring you feel heard, understood, and comfortable throughout your entire treatment. Schedule your visit today!"
                center
            />

            <div className="">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {contents.map((content) => (
                        <div key={content.id} className="mx-auto flex max-w-xs flex-col gap-y-4 p-4">
                            <FaTooth className="text-4xl mx-auto" />
                            <p className="lg:text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">{content.title}</p>
                            <p className="text-base/7 text-gray-600">
                                {content.description}
                            </p>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>

        </section>
    );
}

export default EngageSection;

