import Hero from "@/components/Hero";
import EngageSection from "@/components/Content/MissionSection";

import { getServiceSection, getHeroSection, getMissionSection, getPaymentPlanSection, getTestimonials, getContact } from "@/lib/api";
import HeroSection from "@/components/Hero";
import MissionSection from "@/components/Content/MissionSection";
import ServiceSection from "@/components/Content/ServiceSection";
import PaymentPlanSection from "@/components/Content/PaymentPlanSection";
import Testimonials from "@/components/Testimonials/index";
import Contact from "@/components/Contact/Contact";

interface HomePageProps {
  hero: any;
  mission: any;
  service: any;
  paymentPlan: any;
  testimonials: any;
  contact: any;
}

async function getPageData(): Promise<HomePageProps> {
  try {
    const [heroRes, missionRes, serviceRes, paymentPlanRes, testimonialsRes, contactRes] = await Promise.all([
      getHeroSection(),
      getMissionSection(),
      getServiceSection(),
      getPaymentPlanSection(),
      getTestimonials(),
      getContact(),
    ]);

    return {
      hero: heroRes,
      mission: missionRes,
      service: serviceRes,
      paymentPlan: paymentPlanRes,
      testimonials: testimonialsRes,
      contact: contactRes,
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return {
      hero: null,
      mission: null,
      service: null,
      paymentPlan: null,
      testimonials: null,
      contact: null,
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
      {pageData.contact && <Contact contact={pageData.contact}/>}
    </main>
  );
}
