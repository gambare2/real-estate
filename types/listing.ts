export interface Listing {
    id: string;
    title: string;
    slug: string;
    city: string;
    sector: string;
    propertyType: string;
    priceFrom: number;
    area: string;
    description: string;
    amenities: string[];
    images: string[];
    location: {
      lat: number;
      lng: number;
      address: string;
    };
    seo?: {
      metaTitle?: string;
      metaDescription?: string;
    };
    brandId: string;
  }
  