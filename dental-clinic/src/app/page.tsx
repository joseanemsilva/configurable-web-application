import Hero from "@/components/hero/Hero";
import EngageSection from "@/components/EngageSection";
import ServiceSection from "@/components/ServiceSection";
import PaymentPlanSection from "@/components/PaymentPlanSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero/>
      <EngageSection/>
      <ServiceSection/>
      <PaymentPlanSection/>
      <Testimonials/>
    </div>
  );
}
