import SectionTitle from "./SectionTitle";
import Link from "next/link";

const ClosingSection = () => {
  return (
    <section className="bg-accent1 relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container mx-auto">
            <SectionTitle
                title="Ready to Book Your Appointment?"
                paragraph="We are currently accepting new patients. Whether it’s your child’s first check-up or a long-overdue cleaning for yourself, our doors are open. Your family comfort is our greatest priority."
                center
            />
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-6">
                <Link href="/contact-us" className="rounded-4xl px-6 py-2 text-base font-semibold btn bg-primary text-background duration-300 ease-in-out hover:bg-primary/80"> Book Your First Visit </Link>
            </div>
        </div>
    </section>
  );
};

export default ClosingSection;