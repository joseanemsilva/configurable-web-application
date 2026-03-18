import Hero from "@/components/Hero";
import EngageSection from "@/components/Content/MissionSection";
import Testimonials from "@/components/Testimonials/index";
import Contact from "@/components/Contact/Contact";

import { getServiceSection, getHeroSection, getMissionSection, getPaymentPlanSection } from "@/lib/api";
import HeroSection from "@/components/Hero";
import MissionSection from "@/components/Content/MissionSection";
import ServiceSection from "@/components/Content/ServiceSection";
import PaymentPlanSection from "@/components/Content/PaymentPlanSection";


interface HomePageProps {
  hero: any;
  mission: any;
  service: any;
  paymentPlan: any;
}

async function getPageData(): Promise<HomePageProps> {
  try {
    const [heroRes, missionRes, serviceRes, paymentPlanRes] = await Promise.all([
      getHeroSection(),
      getMissionSection(),
      getServiceSection(),
      getPaymentPlanSection(),
    ]);

    return {
      hero: heroRes,
      mission: missionRes,
      service: serviceRes,
      paymentPlan: paymentPlanRes,
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return {
      hero: null,
      mission: null,
      service: null,
      paymentPlan: null,
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
      {pageData.paymentPlan && <PaymentPlanSection paymentPlan={pageData.paymentPlan}/>}
      {/* <PaymentPlanSection/> */}
        {/* <Testimonials/>
        <Contact/> */}
    </main>
  );
}





// export default function Home() {
//   return (
//     <div>
//       <Hero/>
//       <EngageSection/>
//       <ServiceSection/>
//       <PaymentPlanSection/>
//       <Testimonials/>
//       <Contact/>
//     </div>
//   );
// }
