'use client';

import SectionTitle from "../Common/SectionTitle";
import { ReadMore } from "../Common/ReadMore";

const Heading: React.FC = () => {
    return (
        <section className="bg-accent2 text-white lg:py-20 md:py-32 py-16 px-8">
            <SectionTitle
                title="Our Story"
                center
            />
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-6">
                <ReadMore
                    id="about-us"
                    text=" We started with a simple observation in the heart of our neighborhood. Our founder, Dr. Luciana Silva, noticed that many families felt overwhelmed by the dental experience facing language barriers, rigid scheduling, and high costs that kept them from the care they deserved.
                    Driven by the belief that a healthy smile is a universal right, Dr. Silva set out to create a practice that felt less like a clinical office and more like a community hub. We opened our doors with a mission to provide All-Age Smile Care that speaks your language literally. By building a bilingual team, we have turned the dreaded dentist visit into a comfortable, supportive experience for toddlers, seniors, and everyone in between."
                    maxLength={500}
                />
            </div>
        </section>
    );
}

export default Heading;