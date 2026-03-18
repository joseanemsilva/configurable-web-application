export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface HeroData {
    heading: string;
    subheading: string;
    ctaPrimary: string;
    heroImage: {url: string; alternativeText: string};
}

export interface SectionTitleData {
    id: number;
    title: string;
    description: string;
}

export interface Content {
    id: number;
    title: string;
    description: string;
}

export interface MissionData {
    sectionTitle: SectionTitleData;
    contents: Content[];
}

export interface ServiceSectionData {
    sectionTitle: SectionTitleData;
    ctaPrimary: string;
    serviceImage: {url: string; alternativeText: string};
}

export interface PaymentPlanData {
    sectionTitle: SectionTitleData;
}


export interface TestimonialData {
    id: number;
    authorName: string;
    quote: string;
    image?: {url: string; alternativeText: string};
    rating: number;
}