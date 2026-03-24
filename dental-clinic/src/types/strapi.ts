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
    description?: string;
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

export interface CtaContent extends SectionTitleData {
    ctaPrimary: string;
    link: string;
}

export interface PaymentPlanData {
    sectionTitle: SectionTitleData;
    contents: CtaContent[];
}

export interface SingleTestimonial {
    id: number;
    authorName: string;
    quote: string;
    image?: {url: string; alternativeText: string};
    rating: number;
}

export interface TestimonialData {
    sectionTitle: SectionTitleData;
    testimonials: SingleTestimonial[];
}

export interface ContactInfo {
    id: number;
    // icon: string;
    title: string;
    description: string;
}

export interface InputField {
    label: string;
    placeholder: string;
}

export interface ContactForm {
    title: string;
    fullName: InputField;
    email: InputField;
    phoneNumber: InputField;
    message: InputField;
    submit: string;
}

export interface Maps {
    sectionTitle: SectionTitleData;
    location: string;
}

export interface ContactData {
    sectionTitle: SectionTitleData;
    contactInfo: ContactInfo[];
    contactForm: ContactForm;
    maps: Maps;
}

export interface HeadingData extends SectionTitleData {
    longDescription: string;
}

export interface TeamCard {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: {url: string; alternativeText: string};
}

export interface Team {
    sectionTitle: SectionTitleData;
    teamCards: TeamCard[];
}

export interface AboutUsData {
    heading: HeadingData;
    team: Team;
    ctaSection: CtaContent;
}

export interface Service {
    id: number;
    service: string;
}

export interface MyImage {
    url: string;
    alternativeText: string
}
export interface ServiceCard {
    id: number;
    sectionTitle: SectionTitleData;
    serviceList: Service[];
    image: MyImage;
}

export interface ServicesData {
    sectionTitle: SectionTitleData;
    serviceCards: ServiceCard[];
    ctaSection: CtaContent;
}