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