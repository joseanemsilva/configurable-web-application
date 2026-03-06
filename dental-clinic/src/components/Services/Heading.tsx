import SectionTitle from "../Common/SectionTitle";

const Heading: React.FC = () => {
    return (
        <section className="bg-accent2 sm:px-10 lg:py-20 md:py-32 pt-16 pb-5">
                <SectionTitle
                    title="Our Services"
                    paragraph="We offer a wide range of dental services to meet all your oral health needs. From routine check-ups and cleanings to advanced cosmetic and restorative procedures, our experienced team is dedicated to providing personalized care in a comfortable environment."
                    width="75%"
                    center
                />                
        </section>
    );
}

export default Heading;