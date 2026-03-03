import { FaTooth } from "react-icons/fa";

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
        <section className="bg-accent2 text-white lg:py-20 md:py-32">
            <div className="container mx-auto text-center max-w-5xl">
                <h2 className="lg:text-5xl text-black font-bold mb-6 sm:text-4xl">Dental Care For Everyone</h2>
                <p className=" text-black">We believe clear communication is the foundation of great healthcare. Our dedicated team is proud to offer services in both English and Portuguese, ensuring you feel heard, understood, and comfortable throughout your entire treatment. Schedule your visit today!</p>
            </div>
            <div className="sm:py-20">
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

