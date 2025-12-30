import { Listing } from "@/types/listing";

export function generateSeo(listing: Partial<Listing>) {
  const title = `${listing.title} in ${listing.sector}, ${listing.city} | Affordable ${listing.propertyType}`;

  const description = `${listing.title} offers ${listing.propertyType} in ${listing.sector}, ${listing.city}. Prices start from ₹${listing.priceFrom?.toLocaleString()} onwards. Get complete details, floor plans & site visit.`;

  return {
    metaTitle: title.slice(0, 60),
    metaDescription: description.slice(0, 155)
  };
}
