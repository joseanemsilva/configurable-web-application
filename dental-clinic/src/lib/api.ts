import { type HeroData, type StrapiResponse } from "../types/strapi";

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
    return response.json();
}

// Export a helper function to fetch data from Strapi with authentication
export async function getHeroSection(): Promise<HeroData> {
    const response = await fetchAPI('/hero-section?populate=*');
    return response.data as HeroData;
}