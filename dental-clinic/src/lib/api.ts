import { type MissionData, type ServiceSectionData, type HeroData, type StrapiResponse, type PaymentPlanData, type TestimonialData, type ContactData, type AboutUsData, type ServicesData} from "../types/strapi";

const baseurl = process.env.STRAPI_URL || 'http://localhost:1337';

async function fetchAPI<T>(path: string) : Promise<StrapiResponse<T>> {
    const url = new URL(`/api${path}`, baseurl);

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
            },
        });

    if (!response.ok) {
        throw new Error(`API error on ${path}: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log(path,"API Response:", JSON.stringify(data, null, 2));
    return data;
}

// Use the locale language defined by the user. Otherwise, render the content with default locale.
async function fetchLocalized<T>(path: string, locale: string) : Promise<StrapiResponse<T>> {
    return Promise.any([
        fetchAPI<T>(`${path}&locale=${locale}`),
        fetchAPI<T>(path),
    ])
}

// Export a helper function to fetch data from Strapi with authentication
export async function getHeroSection(locale: string): Promise<HeroData> {
    const response = await fetchLocalized("/hero-section?populate=*", locale);
    return response.data as HeroData;
}

export async function getMissionSection(locale: string): Promise<MissionData> {
    const response = await fetchLocalized("/mission-section?populate=*", locale);
    return response.data as MissionData;
}

export async function getServiceSection(locale: string): Promise<ServiceSectionData> {
    const response = await fetchLocalized("/service-section?populate=*", locale);
    return response.data as ServiceSectionData;
}

export async function getPaymentPlanSection(locale: string): Promise<PaymentPlanData> {
    const response = await fetchLocalized("/payment-plan-section?populate=*", locale);
    return response.data as PaymentPlanData;
}

// Export a helper function to fetch testimonials from Strapi
export async function getTestimonials(locale: string): Promise<TestimonialData> {
    const response = await fetchLocalized("/testimonial-section?populate[testimonials][populate][0]=image&populate[sectionTitle]=*", locale);
    return response.data as TestimonialData;
}

export async function getContact(locale: string): Promise<ContactData> {
    const response = await fetchLocalized("/contact?populate[sectionTitle]=*&populate[contactInfo]=*&populate[contactForm][populate][0]=fullName&populate[contactForm][populate][1]=email&populate[contactForm][populate][2]=phoneNumber&populate[contactForm][populate][3]=message&populate[maps][populate]=*", locale);
    return response.data as ContactData;
}

export async function getAboutUs(locale: string): Promise<AboutUsData> {
    const response = await fetchLocalized("/about-us?populate[heading]=*&&populate[team][populate][sectionTitle]=*&populate[team][populate][teamCards][populate][image][fields][0]=url&populate[team][populate][teamCards][populate][image][fields][1]=alternativeText&populate[ctaSection]=*", locale)
    return response.data as AboutUsData;
}

export async function getServices(locale: string): Promise<ServicesData> {
    const response = await fetchLocalized("/service?populate[sectionTitle]=*&populate[serviceCards][populate][sectionTitle]=*&populate[serviceCards][populate][serviceList]=*&populate[serviceCards][populate][image][fields]&populate[ctaSection]=*", locale);
    return response.data as ServicesData;
}