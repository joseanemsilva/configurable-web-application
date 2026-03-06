import SectionTitle from "../Common/SectionTitle";
import { GoogleMapsEmbed } from '@next/third-parties/google'

const MapSection: React.FC = () => {
    const apiKey = process.env.NEXT_PUBLIC_API_GOOGLE || ' ';
    return (
        <section className="bg-accent1 text-white sm:px-10 lg:py-20 md:py-32 pt-16 pb-5">
            <SectionTitle
                title="Find Us on Google Maps"
                paragraph="We are conveniently located in the heart of Toronto, making it easy for you to access our dental services. Our clinic is situated at 51 Dockside Dr, Toronto, ON M5A 0B6, just a short distance from major public transportation routes and parking facilities."
                width="75%"
                center
            />
            <div className="container flex justify-center  mx-auto p-4 mb-8 w-100%">
                <GoogleMapsEmbed
                    apiKey={apiKey}
                    height={400}
                    width={900}
                    mode="place"
                    q="George Brown College - Waterfront Campus 51 Dockside Dr, Toronto, ON M5A 0B6"
                />
            </div>
        </section>
    );
};

export default MapSection;