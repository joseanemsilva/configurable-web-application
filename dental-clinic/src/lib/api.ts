import { type MissionData, type ServiceSectionData, type HeroData, type StrapiResponse, type PaymentPlanData, type TestimonialData } from "../types/strapi";

const baseurl = process.env.STRAPI_URL || 'http://localhost:1337';

export async function fetchAPI<T>(path: string, options: RequestInit = {}) : Promise<StrapiResponse<T>> {
    const url = new URL(`/api${path}`, baseurl);

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
            ...options.headers,
        },
        ...options,
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}

// Export a helper function to fetch data from Strapi with authentication
export async function getHeroSection(): Promise<HeroData> {
    const response = await fetchAPI('/hero-section?populate=*');
    return response.data as HeroData;
}

export async function getMissionSection(): Promise<MissionData> {
    const response = await fetchAPI('/mission-section?populate=*');
    return response.data as MissionData;
}

export async function getServiceSection(): Promise<ServiceSectionData> {
    const response = await fetchAPI('/service-section?populate=*');
    return response.data as ServiceSectionData;
}

export async function getPaymentPlanSection(): Promise<PaymentPlanData> {
    const response = await fetchAPI('/payment-plan-section?populate=*');
    return response.data as PaymentPlanData;
}


// Export a helper function to fetch testimonials from Strapi
export async function getTestimonials(): Promise<TestimonialData> {
    const response = await fetchAPI('/testimonial-section?populate[testimonials][populate][0]=image&populate[sectionTitle]=*');
    return response.data as TestimonialData;
}