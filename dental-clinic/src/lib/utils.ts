import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getStrapiMediaUrl(url?: string | null) {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;

    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`
}