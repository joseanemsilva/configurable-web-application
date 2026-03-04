import Hero from "@/components/Hero";
import EngageSection from "@/components/Content/VisionSection";
import ServiceSection from "@/components/Content/ServiceSection";
import PaymentPlanSection from "@/components/Content/PaymentPlanSection";
import Testimonials from "@/components/Testimonials/index";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <Hero/>
      <EngageSection/>
      <ServiceSection/>
      <PaymentPlanSection/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}
