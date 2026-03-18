import Hero from "@/components/Hero";
import EngageSection from "@/components/Content/MissionSection";
import Contact from "@/components/Contact/Contact";

import { getServiceSection, getHeroSection, getMissionSection, getPaymentPlanSection, getTestimonials } from "@/lib/api";
import HeroSection from "@/components/Hero";
import MissionSection from "@/components/Content/MissionSection";
import ServiceSection from "@/components/Content/ServiceSection";
import PaymentPlanSection from "@/components/Content/PaymentPlanSection";
import Testimonials from "@/components/Testimonials/index";


interface HomePageProps {
  hero: any;
  mission: any;
  service: any;
  paymentPlan: any;
  testimonials: any;
}

async function getPageData(): Promise<HomePageProps> {
  try {
    const [heroRes, missionRes, serviceRes, paymentPlanRes, testimonialsRes] = await Promise.all([
      getHeroSection(),
      getMissionSection(),
      getServiceSection(),
      getPaymentPlanSection(),
      getTestimonials(),
    ]);

    return {
      hero: heroRes,
      mission: missionRes,
      service: serviceRes,
      paymentPlan: paymentPlanRes,
      testimonials: testimonialsRes,
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return {
      hero: null,
      mission: null,
      service: null,
      paymentPlan: null,
      testimonials: null,
    };
  }
}

export default async function HomePage() {
  const pageData = await getPageData();

  return (
    <main>
      {pageData.hero && <HeroSection data={pageData.hero} />}
      {pageData.mission && <MissionSection mission={pageData.mission} />}
      {pageData.service && <ServiceSection service={pageData.service} />}
      {pageData.paymentPlan && <PaymentPlanSection paymentPlan={pageData.paymentPlan} />}
      {pageData.testimonials && <Testimonials testimonials={pageData.testimonials}/>}
        {/* <Contact/> */}
    </main>
  );
}
