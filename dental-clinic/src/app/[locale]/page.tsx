import { getServiceSection, getHeroSection, getMissionSection, getPaymentPlanSection, getTestimonials, getContact } from "@/lib/api";
import HeroSection from "@/components/Hero";
import MissionSection from "@/components/Content/MissionSection";
import ServiceSection from "@/components/Content/ServiceSection";
import PaymentPlanSection from "@/components/Content/PaymentPlanSection";
import Testimonials from "@/components/Testimonials/index";
import Contact from "@/components/Contact/Contact";
import ErrorPage from "@/components/Common/ErrorPage";
import { getLocale } from "next-intl/server";

interface HomePageProps {
  hero: any;
  mission: any;
  service: any;
  paymentPlan: any;
  testimonials: any;
  contact: any;
  error: boolean;
}

async function getPageData(locale: string): Promise<HomePageProps> {
  try {
    const [heroRes, missionRes, serviceRes, paymentPlanRes, testimonialsRes, contactRes] = await Promise.all([
      getHeroSection(locale),
      getMissionSection(locale),
      getServiceSection(locale),
      getPaymentPlanSection(locale),
      getTestimonials(locale),
      getContact(locale),
    ]);

    return {
      hero: heroRes,
      mission: missionRes,
      service: serviceRes,
      paymentPlan: paymentPlanRes,
      testimonials: testimonialsRes,
      contact: contactRes,
      error: false,
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
      error:true,
    };
  }
}

export default async function HomePage() {
  const locale = await getLocale();
  const pageData = await getPageData(locale);

  return (
    <main>
      {pageData.error && <ErrorPage/>}
      {pageData.hero && <HeroSection data={pageData.hero} />}
      {pageData.mission && <MissionSection mission={pageData.mission} />}
      {pageData.service && <ServiceSection service={pageData.service} />}
      {pageData.paymentPlan && <PaymentPlanSection paymentPlan={pageData.paymentPlan} />}
      {pageData.testimonials && <Testimonials testimonials={pageData.testimonials}/>}
      {pageData.contact && <Contact contact={pageData.contact}/>}
      </main>
  );
}
