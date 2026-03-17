import Hero from "@/components/Hero";
import EngageSection from "@/components/Content/VisionSection";
import ServiceSection from "@/components/Content/ServiceSection";
import PaymentPlanSection from "@/components/Content/PaymentPlanSection";
import Testimonials from "@/components/Testimonials/index";
import Contact from "@/components/Contact/Contact";

import { getHeroSection } from "@/lib/api";
import HeroSection from "@/components/Hero";


interface HomePageProps {
  hero: any;
}

async function getPageData(): Promise<HomePageProps> {
  try {
    const [heroRes] = await Promise.all([getHeroSection()]);

    return {
      hero: heroRes
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return {
      hero: null
    };
  }
}

export default async function HomePage() {
  const pageData = await getPageData();

  return (
    <main>
      {pageData.hero && <HeroSection data={pageData.hero} />}
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
